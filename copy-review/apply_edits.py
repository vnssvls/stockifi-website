#!/usr/bin/env python3
"""
Apply Simon's reviewer export (translation-edits.json) back to source.

Each change = {page, group, locale, original, updated, src}. The target file is
locale-specific; we replace `original` with `updated` there. `original` must occur
exactly once in the target (guards against wrong/ambiguous hits). Idempotent: if
`original` is gone but `updated` is already present, the change is counted ALREADY.

Usage:
  python3 apply_edits.py            # dry-run report (no writes)
  python3 apply_edits.py --apply    # write changes
"""
import json, os, sys
from collections import defaultdict

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
EDITS = os.path.expanduser("~/Downloads/translation-edits.json")

STATIC = {
    "static-home": "index.astro",
    "static-pricing": "pricing.astro",
    "static-contact": "contact.astro",
    "static-integrations": "integrations.astro",
}

def target_rel(c):
    s, loc = c["src"], c["locale"]
    if s is None:
        return f"src/pages/{loc}/{STATIC[c['page']]}"
    if "file" in s:
        return s["file"]            # nav-i18n.ts
    return s[loc]                   # collection no/sv path

import glob, re as _re
APPLY = "--apply" in sys.argv
changes = json.load(open(EDITS, encoding="utf-8"))["changes"]

def nav_block_span(text, locale, is_desc):
    """Return (start,end) of the `const <locale>[Descs]: Nav... = {...}` object body."""
    name = locale + ("Descs" if is_desc else "")
    m = _re.search(r"const\s+" + _re.escape(name) + r"\s*:\s*Nav\w+\s*=\s*\{", text)
    if not m:
        return None
    i = text.index("{", m.start()); depth = 0
    for j in range(i, len(text)):
        if text[j] == "{": depth += 1
        elif text[j] == "}":
            depth -= 1
            if depth == 0:
                return (i, j)
    return None

def grep_files(original):
    """Find source files (outside dist/other-locale noise) containing `original` exactly."""
    hits = []
    for f in glob.glob(os.path.join(ROOT, "src", "**", "*.astro"), recursive=True):
        if open(f, encoding="utf-8").read().count(original) >= 1:
            hits.append(f)
    return hits

stats = {"applied": 0, "already": 0, "miss": 0, "ambiguous": 0}
problems = []
writes = {}  # path -> new text (buffered)

def get_text(path):
    return writes.get(path) if path in writes else open(path, encoding="utf-8").read()

# Group by file; longest original first so a short phrase that is a substring of a
# longer edited phrase resolves to a unique match after the longer one is replaced.
by_file = defaultdict(list)
for c in changes:
    by_file[target_rel(c)].append(c)

for rel, items in sorted(by_file.items()):
    path = os.path.join(ROOT, rel)
    is_nav = rel.endswith("nav-i18n.ts")
    items.sort(key=lambda c: len(c["original"]), reverse=True)
    if not os.path.exists(path):
        for c in items:
            problems.append(("NOFILE", rel, c["locale"], c["original"][:50])); stats["miss"] += 1
        continue
    for c in items:
        o, u, loc = c["original"], c["updated"], c["locale"]
        text = get_text(path)
        if is_nav:
            span = nav_block_span(text, loc, c["src"]["field"].endswith("(desc)"))
            if not span:
                problems.append(("NOBLOCK", rel, loc, o[:55])); stats["miss"] += 1; continue
            s, e = span; block = text[s:e]; n = block.count(o)
            if n == 1:
                writes[path] = text[:s] + block.replace(o, u) + text[e:]; stats["applied"] += 1
            elif n == 0 and block.count(u) >= 1: stats["already"] += 1
            else:
                problems.append((f"NAV x{n}", rel, loc, o[:55]))
                stats["miss" if n == 0 else "ambiguous"] += 1
            continue
        n = text.count(o)
        if n == 1:
            writes[path] = text.replace(o, u); stats["applied"] += 1
        elif n > 1:
            writes[path] = text.replace(o, u); stats["applied"] += n   # same-locale dupes: fix all
        else:  # n == 0
            if text.count(u) >= 1:
                stats["already"] += 1
            else:  # try shared components (e.g. CtaEmail.astro)
                hits = [f for f in grep_files(o) if get_text(f).count(o) == 1]
                if len(hits) == 1:
                    fp = hits[0]; writes[fp] = get_text(fp).replace(o, u); stats["applied"] += 1
                else:
                    stats["miss"] += 1; problems.append(("MISS", rel, loc, o[:55]))

if APPLY:
    for p, t in writes.items():
        open(p, "w", encoding="utf-8").write(t)

print(f"{'APPLIED' if APPLY else 'DRY-RUN'} — {len(changes)} changes across {len(by_file)} files")
print(f"  applied:   {stats['applied']}")
print(f"  already:   {stats['already']}  (updated text already in source)")
print(f"  miss:      {stats['miss']}")
print(f"  ambiguous: {stats['ambiguous']}")
if problems:
    print(f"\n--- {len(problems)} need attention ---")
    for kind, rel, loc, snip in problems[:60]:
        print(f"  [{kind}] {loc} {rel}\n        {snip!r}")
