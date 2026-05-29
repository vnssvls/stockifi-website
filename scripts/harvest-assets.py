#!/usr/bin/env python3
"""
Harvest image assets referenced in Webflow CSV exports.

- Scans every CSV in webflow-exports/ for Webflow CDN URLs (cdn.prod.website-files.com),
  including semicolon-separated multi-image cells (e.g. "3-Image Grid").
- Downloads each unique asset into assets/<collection>/ (deduped, idempotent).
- Writes assets/asset-map.csv: collection, company, field, original_url, local_file, status.

Usage:  python3 scripts/harvest-assets.py
Run from the stockifi-website/ folder root.
"""
import csv, os, re, sys, urllib.parse, urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
EXPORTS = os.path.join(ROOT, "webflow-exports")
ASSETS = os.path.join(ROOT, "assets")
URL_RE = re.compile(r"https://cdn\.prod\.website-files\.com/\S+?\.(?:jpe?g|png|webp|svg|gif|avif)", re.I)

SYSTEM_COLS = {"Collection ID", "Locale ID", "Item ID", "Created On",
               "Updated On", "Published On", "Website"}  # Website is an external link, not an asset

def collection_from_filename(fn):
    base = os.path.splitext(os.path.basename(fn))[0]
    return re.sub(r"_(en|no|de|da)$", "", base, flags=re.I)

def filename_from_url(url):
    path = urllib.parse.urlparse(url).path
    name = urllib.parse.unquote(os.path.basename(path))
    return re.sub(r"[^A-Za-z0-9._-]", "_", name)

def main():
    if not os.path.isdir(EXPORTS):
        sys.exit(f"no exports dir at {EXPORTS}")
    csvs = sorted(f for f in os.listdir(EXPORTS) if f.lower().endswith(".csv"))
    if not csvs:
        sys.exit("no CSVs in webflow-exports/ yet")

    rows_out, seen, downloaded, skipped, failed = [], set(), 0, 0, 0
    for fn in csvs:
        coll = collection_from_filename(fn)
        outdir = os.path.join(ASSETS, coll)
        os.makedirs(outdir, exist_ok=True)
        with open(os.path.join(EXPORTS, fn), encoding="utf-8") as f:
            for r in csv.DictReader(f):
                company = (r.get("Company Name") or r.get("Name") or "").strip()
                for col, val in r.items():
                    if not val or col in SYSTEM_COLS:
                        continue
                    for url in URL_RE.findall(val):
                        local = filename_from_url(url)
                        dest = os.path.join(outdir, local)
                        rel = os.path.relpath(dest, ROOT)
                        status = "ok"
                        if url in seen:
                            status = "dup"
                        elif os.path.exists(dest):
                            status = "exists"; skipped += 1
                        else:
                            try:
                                req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
                                with urllib.request.urlopen(req, timeout=30) as resp, open(dest, "wb") as out:
                                    out.write(resp.read())
                                downloaded += 1
                            except Exception as e:
                                status = f"FAIL:{e}"; failed += 1
                        seen.add(url)
                        rows_out.append([coll, company, col, url, rel, status])

    mapfile = os.path.join(ASSETS, "asset-map.csv")
    os.makedirs(ASSETS, exist_ok=True)
    with open(mapfile, "w", newline="", encoding="utf-8") as f:
        w = csv.writer(f)
        w.writerow(["collection", "company", "field", "original_url", "local_file", "status"])
        w.writerows(rows_out)

    print(f"references: {len(rows_out)} | unique downloaded: {downloaded} | "
          f"already on disk: {skipped} | failed: {failed}")
    print(f"map written: {os.path.relpath(mapfile, ROOT)}")
    if failed:
        print("\nFAILURES:")
        for r in rows_out:
            if r[5].startswith("FAIL"):
                print(f"  {r[0]}/{r[1]} [{r[2]}] {r[3]} -> {r[5]}")

if __name__ == "__main__":
    main()
