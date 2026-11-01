# NextDoorStep — multi-page site (Next.js)

Same brand, design and Nexus content as the live site, split into real pages:
`/`, `/owners`, `/tenants-buyers`, `/projects`, `/partners`, `/pricing`, `/faq`, `/nexus`.

## Run it on your PC
Install Node.js 20+ from nodejs.org, then in this folder:

    npm install
    npm run dev          # http://localhost:3000

## Edit content (no code needed)
Everything lives in `content/`:
- `plans.ts`        owner / tenant prices — replace every `[PRICE]`
- `projects.ts`     new-launch cards (builder, location, price range, RERA)
- `testimonials.ts` placeholder reviews
- `builders.ts`     builders you actually work with
- `faqs.ts`         FAQ groups (wrap a link to Nexus in <nexus>...</nexus>)
- `nexusPackages.ts` the 4 Nexus packages (feeds Nexus page, Pricing page, form)
- `localities.ts`, `nav.ts`, `site.ts` (phone, WhatsApp, email, address, RERA)

## Enquiry form
Posts to the same Google Apps Script sheet as before (same columns).
Override with env var `NEXT_PUBLIC_SHEET_URL` if you change the script.

## Publish
    npm run build        # static site in /out
- Vercel / Netlify: import the repo, framework = Next.js (no config needed).
- GitHub Pages: upload the `out/` folder contents (CNAME for nextdoorstep.in is included).
