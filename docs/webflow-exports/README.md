# Webflow CSV exports go here

Drop one CSV per collection **per locale**. Webflow exports only the locale you are currently viewing, so switch locale in the CMS panel and export again for each.

Naming convention:
```
blog_en.csv  blog_no.csv  blog_de.csv  blog_da.csv
customer-stories_en.csv  ...
integrations_en.csv  ...
testimonials_en.csv  ...
```

How to export in Webflow: CMS panel → select collection → Export → choose current locale view.

Once a CSV lands here, Claude parses it to lock the exact field schema in `../audit/02-content-model.md` and build the Strapi import.
