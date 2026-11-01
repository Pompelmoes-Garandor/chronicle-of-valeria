// The table data behind the app's online mode (players, pins, votes, answers).
//   GET    /api/db                  everything the caller may see; send If-None-Match to get a cheap 304
//   PUT    /api/db/:collection/:id  write your own doc (JSON body)
//   DELETE /api/db/:collection/:id  DM only: reset who plays whom
// The rules live in ../lib/rules.mts and are tested in tests/table.test.mjs.
import type { Config, Context } from "@netlify/functions";
import { currentAccount, json, unauthorized } from "../lib/auth.mts";
import { tableStore } from "../lib/store.mts";
import { deleteDoc, setDoc, sync } from "../lib/table.mts";

export default async (req: Request, context: Context) => {
  const me = await currentAccount();
  if (!me) return unauthorized();
  const store = tableStore(context);
  const { collection, id } = context.params;

  if (req.method === "GET" && !collection) {
    const r = await sync(store, me, req.headers.get("if-none-match"));
    if (r.status === 304) return new Response(null, { status: 304, headers: { ETag: r.etag!, "Cache-Control": "no-store" } });
    return json(r.body, 200, { ETag: r.etag! });
  }
  if (req.method === "PUT" && collection && id) {
    let doc: unknown;
    try {
      doc = await req.json();
    } catch {
      return json({ error: "Body must be JSON" }, 400);
    }
    const r = await setDoc(store, me, collection, id, doc);
    return json(r.body, r.status);
  }
  if (req.method === "DELETE" && collection && id) {
    const r = await deleteDoc(store, me, collection, id);
    return json(r.body, r.status);
  }
  return json({ error: "Not found" }, 404);
};

export const config: Config = { path: ["/api/db", "/api/db/:collection/:id"], method: ["GET", "PUT", "DELETE"] };
