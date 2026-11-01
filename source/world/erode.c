/* Step 2 of the offline world bake: let rain wear the relief down into valleys, and find where the rivers run.
 *   cc -O2 -o erode erode.c -lm && ./erode <in.f32> <width> <iterations> <out.f32> [K] [depth]
 * in.f32 comes from bake-heights.js: width*height*[h, r], row 0 = south. Only land (h > 0) erodes; the sea is the base level.
 * Each iteration: fill pits (priority flood), route every cell to its steepest lower neighbour, add up the area that drains
 * through it (spread over all lower neighbours, which avoids the straight grid lines of single-direction routing), then cut
 * channels with the stream-power law (implicit, Braun & Willett 2013). What was cut away is softened and taken off the
 * original relief, so the big shapes of the land stay exactly where they were and only the valleys are new. out.f32 holds width*height*[relief, flow, river distance,
 * river strength]: relief in the page's units, flow = drained area / cell area, and for texels near a river the distance (in
 * texels) to the nearest river segment and that river's strength (0..1). */
#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <string.h>

static int W, H;
static float *z, *z0, *hh, *A, *A8, *dist;
static int *rec, *order; static unsigned char *land, *done;
typedef struct { float z; int i; } Node;
static Node *heap; static int hn;
static void push(float zz, int i) { int k = hn++; while (k > 0) { int p = (k - 1) / 2; if (heap[p].z <= zz) break; heap[k] = heap[p]; k = p; } heap[k].z = zz; heap[k].i = i; }
static Node pop(void) { Node top = heap[0], last = heap[--hn]; int k = 0;
  for (;;) { int c = 2 * k + 1; if (c >= hn) break; if (c + 1 < hn && heap[c + 1].z < heap[c].z) c++; if (heap[c].z >= last.z) break; heap[k] = heap[c]; k = c; }
  heap[k] = last; return top; }
static const int DX[8] = {1, -1, 0, 0, 1, 1, -1, -1}, DY[8] = {0, 0, 1, -1, 1, -1, 1, -1};
static inline int nb(int x, int y, int k, int *ok) { int nx = (x + DX[k] + W) % W, ny = y + DY[k]; *ok = ny >= 0 && ny < H; return ny * W + nx; }
static inline double cdx(int y) { double lat = ((y + 0.5) / H - 0.5) * M_PI; double c = cos(lat); return (c < 0.02 ? 0.02 : c) * 2 * M_PI / W; }
static inline double ndist(int y, int k) { double dx = cdx(y) * abs(DX[k]), dy = M_PI / H * abs(DY[k]); return sqrt(dx * dx + dy * dy); }

int main(int argc, char **argv) {
  if (argc < 5) { fprintf(stderr, "usage: erode in.f32 width iterations out.f32 [K] [depth]\n"); return 1; }
  W = atoi(argv[2]); H = W / 2; int N = atoi(argv[3]); size_t n = (size_t)W * H;
  float *in = malloc(n * 2 * sizeof(float)); FILE *f = fopen(argv[1], "rb"); if (!f || fread(in, sizeof(float), n * 2, f) != n * 2) { fprintf(stderr, "bad input\n"); return 1; } fclose(f);
  z = malloc(n * 4); z0 = malloc(n * 4); hh = malloc(n * 4); A = malloc(n * 4); A8 = malloc(n * 4); dist = malloc(n * 4);
  rec = malloc(n * sizeof(int)); order = malloc(n * sizeof(int)); land = calloc(n, 1); done = calloc(n, 1); heap = malloc(n * sizeof(Node));
  for (size_t i = 0; i < n; i++) { hh[i] = in[2 * i]; z0[i] = z[i] = hh[i] > 0 ? in[2 * i + 1] : 0; land[i] = hh[i] > 0; }
  const double K = argc > 5 ? atof(argv[5]) : 0.3, m = 0.5, dt = 1.0, depth = argc > 6 ? atof(argv[6]) : 1.0;   /* erosion, area exponent, step, how much of the cut to keep */
  int nl = 0;
  for (int it = 0; it < N; it++) {
    /* fill pits: flood from the sea inwards; every land cell drains towards the cell it was reached from or lower */
    memset(done, 0, n); hn = 0; nl = 0;
    for (int y = 0; y < H; y++) for (int x = 0; x < W; x++) { int i = y * W + x; if (land[i]) continue;
      for (int k = 0; k < 8; k++) { int ok, j = nb(x, y, k, &ok); if (ok && land[j]) { push(0, i); done[i] = 1; break; } } }
    while (hn) { Node t = pop(); int i = t.i, x = i % W, y = i / W; if (land[i]) order[nl++] = i;
      for (int k = 0; k < 8; k++) { int ok, j = nb(x, y, k, &ok); if (!ok || done[j] || !land[j]) continue; done[j] = 1;
        if (z[j] <= z[i] + 1e-6f) { z[j] = z[i] + 1e-6f; } push(z[j], j); } }
    /* receivers: the steepest way down */
    for (int o = 0; o < nl; o++) { int i = order[o], x = i % W, y = i / W; double best = 0; int r = -1;
      for (int k = 0; k < 8; k++) { int ok, j = nb(x, y, k, &ok); if (!ok) continue; double s = (z[i] - z[j]) / ndist(y, k); if (s > best) { best = s; r = j; } }
      rec[i] = r < 0 ? i : r; }
    /* drained area, from the ridges down: spread over every lower neighbour by slope (A), and along the steepest path only (A8, for the rivers) */
    for (int o = 0; o < nl; o++) { int i = order[o]; A[i] = A8[i] = (float)(cdx(i / W) * M_PI / H); }
    for (int o = nl - 1; o >= 0; o--) { int i = order[o], r = rec[i], x = i % W, y = i / W; if (r != i && land[r]) A8[r] += A8[i];
      double w[8], ws = 0; int jj[8];
      for (int k = 0; k < 8; k++) { int ok, j = nb(x, y, k, &ok); jj[k] = j; w[k] = 0; if (!ok || !land[j]) continue; double s = (z[i] - z[j]) / ndist(y, k); if (s > 0) { w[k] = pow(s, 1.1); ws += w[k]; } }
      if (ws > 0) for (int k = 0; k < 8; k++) if (w[k] > 0) A[jj[k]] += (float)(A[i] * w[k] / ws); }
    /* cut channels (implicit stream power), from the sea up */
    for (int o = 0; o < nl; o++) { int i = order[o], r = rec[i]; if (r == i) continue;
      int x = i % W, y = i / W, rx = r % W, ry = r / W; int ddx = abs(rx - x); if (ddx > 1) ddx = 1; int ddy = abs(ry - y);
      double d = sqrt(pow(cdx(y) * ddx, 2) + pow(M_PI / H * ddy, 2));
      double F = K * dt * pow(A[i], m) / d; double zr = land[r] ? z[r] : 0; if (z[i] > zr) z[i] = (float)((z[i] + F * zr) / (1 + F)); }
    fprintf(stderr, "iteration %d, %d land cells\n", it + 1, nl);
  }
  /* what the water cut away, softened (two box passes) so the grid of the routing never shows, then taken off the original */
  for (size_t i = 0; i < n; i++) dist[i] = land[i] ? z0[i] - z[i] : 0;
  for (int pass = 0; pass < 2; pass++) { memcpy(z, dist, n * 4);
    for (int y = 0; y < H; y++) for (int x = 0; x < W; x++) { int i = y * W + x; if (!land[i]) continue; double s = 0; int c = 0;
      for (int yy = y - 1; yy <= y + 1; yy++) { if (yy < 0 || yy >= H) continue; for (int xx = x - 1; xx <= x + 1; xx++) { s += z[yy * W + (xx + W) % W]; c++; } }
      dist[i] = (float)(s / c); } }
  for (size_t i = 0; i < n; i++) { z[i] = land[i] ? z0[i] - (float)depth * dist[i] : 0; if (z[i] < 0) z[i] = 0; }
  /* rivers: cells that drain enough area; distance from every texel to the nearest river segment (cell centre to its receiver) */
  double cell = cdx(H / 2) * M_PI / H, thr = 900 * cell * (W / 4096.0) * (W / 4096.0), amax = 0;   /* the same area of land at any size */
  for (int o = 0; o < nl; o++) if (A8[order[o]] > amax) amax = A8[order[o]];
  float *out = malloc(n * 4 * sizeof(float)); const int RAD = 3;
  for (size_t i = 0; i < n; i++) { out[4 * i] = z[i]; out[4 * i + 1] = land[i] ? (float)(A8[i] / cell) : 0; out[4 * i + 2] = 99; out[4 * i + 3] = 0; }
  for (int o = 0; o < nl; o++) { int i = order[o]; if (A8[i] < thr || rec[i] == i) continue;
    int x = i % W, y = i / W, r = rec[i], rx = r % W, ry = r / W; if (rx - x > 1) rx -= W; if (x - rx > 1) rx += W;
    float str = (float)(log(A8[i] / thr) / log(amax / thr)); if (str > 1) str = 1;
    for (int yy = y - RAD; yy <= y + RAD; yy++) { if (yy < 0 || yy >= H) continue;
      for (int xx = x - RAD; xx <= x + RAD; xx++) { int j = yy * W + ((xx % W) + W) % W;
        double px = xx - x, py = yy - y, vx = rx - x, vy = ry - y, t = (px * vx + py * vy) / (vx * vx + vy * vy); if (t < 0) t = 0; if (t > 1) t = 1;
        double dd = hypot(px - t * vx, py - t * vy); if (dd < out[4 * j + 2]) { out[4 * j + 2] = (float)dd; out[4 * j + 3] = str; } } } }
  f = fopen(argv[4], "wb"); fwrite(out, sizeof(float), n * 4, f); fclose(f);
  fprintf(stderr, "done: max drained area %.0f cells, river threshold %.0f cells\n", amax / cell, thr / cell);
  return 0;
}
