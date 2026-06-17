#!/usr/bin/env python3
"""
Stockifi translation reviewer — v2 generator.

Builds a single self-contained HTML (EN | Norwegian | Swedish) for Simon, grouped:
  Static pages   — Home, Pricing, Contact, Integrations (scraped from dist/<main>,
                   grouped section-by-section using the H1/H2 headings)
  Megamenu       — nav labels + descriptions (src/data/nav-i18n.ts)
  Products       — feature pages (content/products/{en,no,sv}/*.md frontmatter)
  Solutions      — pages         (content/solutions/{en,no,sv}/*.md frontmatter)

Rows where EN==NO==SV (untranslated brand names, numbers) or where a NO/SV side
is empty are dropped, so only real translation work shows. Structured rows carry
their source file + field path so edits apply back programmatically.

Run:  python3 copy-review/build.py --html      # rebuild dist first if copy changed
"""
import re, json, os, sys
import yaml
from collections import OrderedDict
from html.parser import HTMLParser
from difflib import SequenceMatcher

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DIST = os.path.join(ROOT, "dist")
LOCALES = ("en", "no", "sv")
rel = lambda p: os.path.relpath(p, ROOT)

def add_row(rows, label, en, no, sv, src=None):
    """Append a reviewable row unless EN is empty/placeholder, all locales match,
    a NO/SV side is empty, or an identical EN string is already in this section."""
    if en is None: return
    en = str(en); no = "" if no is None else str(no); sv = "" if sv is None else str(sv)
    if not en.strip() or en.strip().startswith("["): return
    if en == no == sv: return
    if not no.strip() or not sv.strip(): return
    if any(r["en"] == en for r in rows): return  # dedup repeated labels
    rows.append({"label": label, "en": en, "no": no, "sv": sv, **({"src": src} if src else {})})

def finalize(page):
    """Assign page-unique stable ids across all sections; drop empty sections."""
    page["sections"] = [s for s in page["sections"] if s["rows"]]
    i = 0
    for s in page["sections"]:
        for r in s["rows"]:
            r["id"] = str(i); i += 1
    return page

# ───────────────────────── static (scrape dist, section-aware) ─────────────────────────
STATIC_PAGES = [
    ("home", "index.html", "Home"),
    ("pricing", "pricing/index.html", "Pricing"),
    ("contact", "contact/index.html", "Contact"),
    ("integrations", "integrations/index.html", "Integrations"),
]
SKIP_TAGS = {"script", "style", "svg", "noscript", "path", "lottie-player"}
# Subtrees skipped by class — untranslatable, locale-shuffled brand/logo lists that
# otherwise break positional alignment for everything after them.
SKIP_CLASSES = ("ip-cloud", "ic-name", "ic-logo", "accordion", "acc-item", "tc-card")
# True HTML void elements only (never have a close tag). SVG elements like <path>
# DO get explicit </path> in this serialization, so they must NOT be treated as void
# or their close tags corrupt the subtree-skip depth counter.
VOID = {"img", "br", "hr", "input", "meta", "link", "source", "col", "wbr", "area", "base", "embed", "track"}

class MainText(HTMLParser):
    HEAD = {"h1", "h2"}
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.in_main = False; self.skip = 0; self.h = 0; self.cskip = 0
        self.texts = []; self.sections = []; self.cur = "Intro"; self.hbuf = ""
    def handle_starttag(self, tag, attrs):
        if tag == "main": self.in_main = True; return
        if not self.in_main: return
        if self.cskip:                       # inside a class-skipped subtree
            if tag not in VOID: self.cskip += 1
            return
        cls = (dict(attrs).get("class") or "").split()
        if any(c in cls for c in SKIP_CLASSES):
            if tag not in VOID: self.cskip = 1
            return
        if tag in SKIP_TAGS: self.skip += 1
        if tag in self.HEAD and not self.skip:
            if self.h == 0: self.hbuf = ""
            self.h += 1
    def handle_endtag(self, tag):
        if tag == "main": self.in_main = False; return
        if not self.in_main: return
        if self.cskip: self.cskip -= 1; return
        if tag in SKIP_TAGS and self.skip: self.skip -= 1
        if tag in self.HEAD and self.h > 0:
            self.h -= 1
            if self.h == 0 and self.hbuf.strip():
                self.cur = self.hbuf.strip()
                self.texts.append(self.cur); self.sections.append(self.cur)
                self.hbuf = ""
    def handle_data(self, data):
        if not self.in_main or self.skip or self.cskip: return
        t = re.sub(r"\s+", " ", data).strip()
        if not t or not re.search(r"[A-Za-zÀ-ÿ]", t): return
        if self.h > 0: self.hbuf = (self.hbuf + " " + t).strip()
        else: self.texts.append(t); self.sections.append(self.cur)

def scrape(path):
    if not os.path.exists(path): return None
    p = MainText(); p.feed(open(path, encoding="utf-8").read()); return p

def align(en, other):
    out = [""] * len(en)
    for tag, i1, i2, j1, j2 in SequenceMatcher(a=en, b=other, autojunk=False).get_opcodes():
        if tag == "equal":
            for k in range(i2 - i1): out[i1 + k] = other[j1 + k]
        elif tag == "replace":
            run = other[j1:j2]
            for k in range(i2 - i1): out[i1 + k] = run[k] if k < len(run) else ""
    return out

def build_static():
    pages = []
    for key, rp, label in STATIC_PAGES:
        p = {l: scrape(os.path.join(DIST, rp) if l == "en" else os.path.join(DIST, l, rp)) for l in LOCALES}
        if any(v is None for v in p.values()):
            print(f"!! static {label}: missing dist file", file=sys.stderr); continue
        en, secs = p["en"].texts, p["en"].sections
        no = align(en, p["no"].texts); sv = align(en, p["sv"].texts)
        sec_map = OrderedDict()
        for i in range(len(en)):
            sec_map.setdefault(secs[i], [])
            add_row(sec_map[secs[i]], "", en[i], no[i], sv[i])
        pages.append(finalize({"key": f"static-{key}", "label": label, "group": "Static pages",
                               "sections": [{"name": s, "rows": r} for s, r in sec_map.items()]}))
    return pages

# ───────────────────────── megamenu ─────────────────────────
def parse_ts_object(src, const_name):
    m = re.search(r"const\s+" + re.escape(const_name) + r"[^=]*=\s*\{", src)
    if not m: return {}
    i = src.index("{", m.start()); depth = 0; end = i
    for j in range(i, len(src)):
        if src[j] == "{": depth += 1
        elif src[j] == "}":
            depth -= 1
            if depth == 0: end = j; break
    body = src[i + 1:end]; out = {}
    for km in re.finditer(r"(\w+)\s*:\s*'((?:[^'\\]|\\.)*)'|(\w+)\s*:\s*\"((?:[^\"\\]|\\.)*)\"", body):
        if km.group(1): out[km.group(1)] = km.group(2).replace("\\'", "'")
        else: out[km.group(3)] = km.group(4).replace('\\"', '"')
    return out

def build_megamenu():
    path = os.path.join(ROOT, "src/data/nav-i18n.ts")
    src = open(path, encoding="utf-8").read()
    L = {l: parse_ts_object(src, l) for l in LOCALES}
    D = {l: parse_ts_object(src, l + "Descs") for l in LOCALES}
    lr, dr = [], []
    for k in L["en"]: add_row(lr, k, L["en"].get(k), L["no"].get(k), L["sv"].get(k), src={"file": rel(path), "field": k})
    for k in D["en"]: add_row(dr, k, D["en"].get(k), D["no"].get(k), D["sv"].get(k), src={"file": rel(path), "field": k + " (desc)"})
    return [finalize({"key": "megamenu", "label": "Mega menu (nav)", "group": "Megamenu",
                      "sections": [{"name": "Menu labels & buttons", "rows": lr},
                                   {"name": "Menu item descriptions", "rows": dr}]})]

# ───────────────────────── collections ─────────────────────────
def frontmatter(path):
    parts = open(path, encoding="utf-8").read().split("---", 2)
    return yaml.safe_load(parts[1]) if len(parts) == 3 else {}

def fields_for(kind):
    if kind == "products":
        return [
            ("Meta", "Meta title", "metaTitle"), ("Meta", "Meta description", "metaDescription"),
            ("Hero", "Eyebrow", "eyebrow"), ("Hero", "Heading", "heading"), ("Hero", "Subhead", "subhead"),
            ("How it works", "Tagline", "howItWorks.tagline"), ("How it works", "Heading", "howItWorks.heading"),
            ("How it works", "Body", "howItWorks.body"),
            ("How it works", "Point", ("howItWorks.points", ["heading", "body"])),
            ("Benefits", "Benefit", ("benefits", ["heading", "body"])),
            ("FAQ", "FAQ", ("faqs", ["question", "answer"])),
            ("CTA", "Heading", "ctaHeading"), ("CTA", "Subhead", "ctaSubhead"),
        ]
    return [
        ("Meta", "Meta title", "metaTitle"), ("Meta", "Meta description", "metaDescription"),
        ("Hero", "Eyebrow", "eyebrow"), ("Hero", "Heading", "heading"), ("Hero", "Subhead", "subhead"),
        ("Problem", "Tagline", "problemTagline"), ("Problem", "Heading", "problemHeading"), ("Problem", "Body", "problemBody"),
        ("Benefits", "Benefit", ("benefits", ["heading", "body"])),
        ("Showcase", "Tagline", "showcaseTagline"), ("Showcase", "Heading", "showcaseHeading"), ("Showcase", "Body", "showcaseBody"),
        ("Showcase", "Sub", ("showcaseSubs", ["heading", "body"])),
        ("FAQ", "FAQ heading", "faqHeading"), ("FAQ", "FAQ", ("faqs", ["question", "answer"])),
        ("CTA", "Heading", "ctaHeading"), ("CTA", "Subhead", "ctaSubhead"),
    ]

def dig(d, dotted):
    cur = d
    for part in dotted.split("."):
        if not isinstance(cur, dict): return None
        cur = cur.get(part)
    return cur

def page_name(fm, slug):
    """Human page name for the sidebar: the feature/segment name (eyebrow), not the heading."""
    eb = fm.get("eyebrow")
    if isinstance(eb, str) and eb.strip() and not eb.startswith("["):
        return eb.strip()
    return slug.replace("-", " ").title()

def build_collection(kind, group):
    base = os.path.join(ROOT, "content", kind)
    slugs = sorted(f[:-3] for f in os.listdir(os.path.join(base, "en")) if f.endswith(".md"))
    specs = fields_for(kind); pages = []
    for slug in slugs:
        fm, ok = {}, True
        for l in LOCALES:
            fp = os.path.join(base, l, slug + ".md")
            if not os.path.exists(fp): ok = False; break
            fm[l] = frontmatter(fp)
        if not ok: continue
        srcs = {l: rel(os.path.join(base, l, slug + ".md")) for l in LOCALES}
        sec_map = OrderedDict()
        def push(section, label, en, no, sv, fieldpath):
            sec_map.setdefault(section, [])
            add_row(sec_map[section], label, en, no, sv, src={"no": srcs["no"], "sv": srcs["sv"], "field": fieldpath})
        for section, label, acc in specs:
            if isinstance(acc, str):
                push(section, label, dig(fm["en"], acc), dig(fm["no"], acc), dig(fm["sv"], acc), acc)
            else:
                listkey, subkeys = acc
                items = dig(fm["en"], listkey) or []
                for idx in range(len(items)):
                    for sk in subkeys:
                        g = lambda d, i=idx, s=sk: (dig(d, listkey) or [{}])[i].get(s) if i < len(dig(d, listkey) or []) and isinstance((dig(d, listkey) or [])[i], dict) else None
                        push(section, f"{label} {idx+1} — {sk}", g(fm["en"]), g(fm["no"]), g(fm["sv"]), f"{listkey}[{idx}].{sk}")
        pg = finalize({"key": f"{kind}-{slug}", "label": page_name(fm["en"], slug), "group": group,
                       "sections": [{"name": s, "rows": r} for s, r in sec_map.items()]})
        if pg["sections"]: pages.append(pg)
    return pages

def build_all():
    return build_static() + build_megamenu() + build_collection("products", "Products") + build_collection("solutions", "Solutions")

if __name__ == "__main__":
    pages = build_all()
    groups = OrderedDict()
    for p in pages:
        n = sum(len(s["rows"]) for s in p["sections"])
        groups.setdefault(p["group"], [0, 0]); groups[p["group"]][0] += 1; groups[p["group"]][1] += n
    print(f"{'group':16} {'pages':>6} {'rows':>6}"); total = 0
    for g, (a, b) in groups.items(): print(f"{g:16} {a:>6} {b:>6}"); total += b
    print(f"{'TOTAL':16} {'':>6} {total:>6}")
    if "--html" in sys.argv:
        from html_template import TEMPLATE
        payload = json.dumps({"pages": pages}, ensure_ascii=False).replace("<", "\\u003c")
        out = os.path.join(os.path.dirname(__file__), "stockifi-translation-review.html")
        open(out, "w", encoding="utf-8").write(TEMPLATE.replace("/*__DATA__*/", payload))
        print("\nwrote", out)
