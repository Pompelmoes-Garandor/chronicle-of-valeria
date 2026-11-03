#!/usr/bin/env python3
"""Reads interlude results a player sent Sam by message (WhatsApp, mail) from the GitHub copy of the map.

The message ends in one line "CHRON-INTERLUDE <code>". Paste one or more messages into a file (or stdin):

    python3 source/interludes/read-message.py messages.txt
    pbpaste | python3 source/interludes/read-message.py

Prints each result as JSON, in the same shape the table site keeps in interludes/<account> ("done").
Nothing checks who sent it: the player picked their character on their own device.
"""
import base64, json, re, sys

text = open(sys.argv[1], encoding="utf-8").read() if len(sys.argv) > 1 else sys.stdin.read()
codes = re.findall(r"CHRON-INTERLUDE\s+([A-Za-z0-9_-]+)", text)
if not codes:
    sys.exit("No CHRON-INTERLUDE line found.")
for code in codes:
    raw = base64.urlsafe_b64decode(code + "=" * (-len(code) % 4))
    data = json.loads(raw.decode("utf-8"))
    print(json.dumps(data, ensure_ascii=False, indent=2))
