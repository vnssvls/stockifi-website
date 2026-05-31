#!/usr/bin/env python3
"""
Convert Webflow CSV exports (webflow-exports/) into content files:
  - Blog + Customer Stories  -> markdown w/ YAML frontmatter (prose)  -> content/<coll>/en/<slug>.md
  - Integrations / Categories / Testimonials -> JSON data files       -> content/<coll>/<coll>.en.json
Image CDN URLs are rewritten to /media/<coll>/<filename> (matches harvested assets/<coll>/).
Run from stockifi-website/ root:  python3 scripts/convert-content.py
"""
import csv, json, os, re, urllib.parse

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
EX = os.path.join(ROOT, "webflow-exports")
OUT = os.path.join(ROOT, "content")

try:
    from markdownify import markdownify as html2md
except ImportError:
    html2md = None  # fall back to raw HTML in body

IMG_RE = re.compile(r"https://cdn\.prod\.website-files\.com/\S+?\.(?:jpe?g|png|webp|svg|gif|avif)", re.I)

def media_path(url, coll):
    name = urllib.parse.unquote(os.path.basename(urllib.parse.urlparse(url).path))
    name = re.sub(r"[^A-Za-z0-9._-]", "_", name)
    return f"/media/{coll}/{name}"

def rewrite_imgs(text, coll):
    if not text:
        return text
    return IMG_RE.sub(lambda m: media_path(m.group(0), coll), text)

def first_img(cell, coll):
    if not cell:
        return None
    m = IMG_RE.search(cell)
    return media_path(m.group(0), coll) if m else None

def all_imgs(cell, coll):
    return [media_path(u, coll) for u in IMG_RE.findall(cell or "")]

def body_md(html, coll):
    html = rewrite_imgs(html or "", coll)
    if not html.strip():
        return ""
    return html2md(html, heading_style="ATX").strip() if html2md else html

def yaml_scalar(v):
    if v is None or v == "":
        return '""'
    if isinstance(v, bool):
        return "true" if v else "false"
    s = str(v).replace("\\", "\\\\").replace('"', '\\"').replace("\n", " ").strip()
    return f'"{s}"'

def write_frontmatter(fields):
    lines = ["---"]
    for k, v in fields.items():
        if isinstance(v, list):
            if not v:
                lines.append(f"{k}: []")
            else:
                lines.append(f"{k}:")
                lines += [f"  - {yaml_scalar(x)}" for x in v]
        else:
            lines.append(f"{k}: {yaml_scalar(v)}")
    lines.append("---")
    return "\n".join(lines)

def load(name):
    p = os.path.join(EX, name)
    return list(csv.DictReader(open(p, encoding="utf-8"))) if os.path.exists(p) else []

def b(row, key):
    return (row.get(key, "") or "").strip().lower() == "true"

def md_file(coll, slug, frontmatter, body):
    d = os.path.join(OUT, coll, "en")
    os.makedirs(d, exist_ok=True)
    with open(os.path.join(d, f"{slug}.md"), "w", encoding="utf-8") as f:
        f.write(write_frontmatter(frontmatter) + "\n\n" + (body or "") + "\n")

def json_file(coll, fname, data):
    d = os.path.join(OUT, coll)
    os.makedirs(d, exist_ok=True)
    with open(os.path.join(d, fname), "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

# --- Blog ---
def conv_blog():
    rows = load("blog_en.csv"); n = 0
    for r in rows:
        slug = r.get("Slug") or ""
        if not slug: continue
        fm = {
            "title": r.get("Article Title"), "slug": slug,
            "metaTitle": r.get("Meta Title"), "metaDescription": r.get("Meta Description"),
            "excerpt": r.get("Excerpt"), "postSummary": r.get("Post Summary"),
            "readTime": r.get("Read time"), "category": r.get("Category"),
            "publishDate": r.get("Custom publish date"), "featured": b(r, "Featured?"),
            "heroImage": first_img(r.get("Hero Image"), "blog"),
            "heroImageAlt": r.get("Hero Image Alt Text"),
            "ctaText": r.get("CTA Button Text (Optional)"), "ctaUrl": r.get("CTA Button URL (Optional)"),
            "draft": b(r, "Draft"), "webflowId": r.get("Item ID"),
        }
        md_file("blog", slug, fm, body_md(r.get("Body Content"), "blog"))
        n += 1
    return n

# --- Customer Stories ---
def conv_stories():
    rows = load("customer-stories_en.csv"); n = 0
    for r in rows:
        slug = r.get("Company Name (Slug)") or ""
        if not slug: continue
        p1 = body_md(r.get("Body Paragraph (1)"), "customer-stories")
        p2 = body_md(r.get("Body Paragraph (2)"), "customer-stories")
        body = "\n\n".join(x for x in [p1, p2] if x)
        fm = {
            "companyName": r.get("Company Name"), "slug": slug,
            "articleTitle": r.get("Article Title"),
            "user": r.get("User"), "designation": r.get("Designation/Position"),
            "businessType": r.get("Business Type"), "website": r.get("Website"),
            "oneLiner": r.get("One-liner testimonial"),
            "featuredQuote": r.get("Featured Quote for Customer Story"),
            "fullTestimonial": r.get("Full Testimonial"),
            "userPhoto": first_img(r.get("User Profile Photo"), "customer-stories"),
            "logoPrimary": first_img(r.get("Company Logo (Primary)"), "customer-stories"),
            "logoTransparent": first_img(r.get("Company Logo (transparent)"), "customer-stories"),
            "thumbnail": first_img(r.get("Thumbnail for Customer Story"), "customer-stories"),
            "imageGrid": all_imgs(r.get("3-Image Grid"), "customer-stories"),
            "singleImage": first_img(r.get("Single Image Feature"), "customer-stories"),
            "draft": b(r, "Draft"), "webflowId": r.get("Item ID"),
        }
        md_file("customer-stories", slug, fm, body)
        n += 1
    return n

# --- Integrations / Categories / Testimonials (JSON) ---
def conv_integrations():
    rows = load("integrations_en.csv")
    data = [{
        "name": r.get("Name"), "slug": r.get("Slug"),
        "category": (r.get("Category") or "").strip().lower(),
        "logo": first_img(r.get("Image"), "integrations"),
        "description": r.get("Description") or "",
        "draft": b(r, "Draft"), "webflowId": r.get("Item ID"),
    } for r in rows if r.get("Slug")]
    json_file("integrations", "integrations.en.json", data)
    return len(data)

def conv_categories():
    rows = load("integration-categories_en.csv")
    data = [{"name": r.get("Name"), "slug": r.get("Slug")} for r in rows if r.get("Slug")]
    json_file("integrations", "categories.en.json", data)
    return len(data)

def conv_testimonials():
    rows = load("testimonials_en.csv")
    data = [{
        "companyName": r.get("Company Name"), "slug": r.get("Company Name (Slug)"),
        "user": r.get("User"), "designation": r.get("Designation/Position"),
        "businessType": r.get("Business Type"),
        "oneLiner": r.get("One-liner testimonial"),
        "featuredQuote": r.get("Featured Quote for Customer Story"),
        "addToCustomerStories": b(r, "Add to Customer Stories"),
        "addToScrollingBanner": b(r, "Add to scrolling banner?"),
        "addToSavingsCalculator": b(r, "Add to Savings-Calculator landing page?"),
        "userPhoto": first_img(r.get("User Profile Photo"), "testimonials"),
        "logoPrimary": first_img(r.get("Company Logo (Primary)"), "testimonials"),
        "draft": b(r, "Draft"), "webflowId": r.get("Item ID"),
    } for r in rows if r.get("Company Name (Slug)")]
    json_file("testimonials", "testimonials.en.json", data)
    return len(data)

if __name__ == "__main__":
    print("markdownify:", "yes" if html2md else "NO (body kept as HTML)")
    print("blog:", conv_blog())
    print("customer-stories:", conv_stories())
    print("integrations:", conv_integrations())
    print("integration-categories:", conv_categories())
    print("testimonials:", conv_testimonials())
    print("-> content/ written")
