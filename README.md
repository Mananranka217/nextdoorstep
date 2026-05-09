# NextDoorStep

Static website for NextDoorStep — East Bengaluru's resale and rental desk. Two pages, no build tooling, no dependencies.

---

## Pages

### `index.html` — Landing page
- Hero with service summary and proof pills
- Intro section
- Quote band
- Areas section — Whitefield feature card, ORR Belt, Whitefield Communities, custom enquiry cluster
- NextDoorStep Nexus teaser band
- Enquiry form (routes to Sheet2 in Google Sheets)

### `nexus.html` — NextDoorStep Nexus
Full resale transaction support page:
- Hero with stats (70+ bank partners, 30+ services)
- "Before you pay the token" — 7 pre-token verification checks
- Features section — 5 feature rows with full-width overview card
- How it works — 6-step timeline (lock → collect → legal → sign → register → transfers)
- Services — 4 packages: Verify (₹9,999), Register (₹44,999), Complete+ (₹69,999), Custom
- Enquiry form (routes to Sheet1 in Google Sheets)

---

## File Structure

```
nds/
├── index.html
├── nexus.html
├── styles.css
├── script.js
├── server.js          # Local dev server only, not needed in production
└── assets/
    └── east-blr-neighbourhood.png
```

---

## Tech Stack

Plain HTML, CSS, and JavaScript. No framework, no build step, no npm.

- **Fonts** — Georgia (serif headings), Arial / system-ui (body)
- **CSS** — Custom properties, CSS Grid throughout, clamp() for fluid sizing
- **JS** — Single file (`script.js`), handles form submission only

---

## Form → Google Sheets Integration

Submissions are sent via an **image request** to bypass CORS — no server required in production.

```js
const img = new Image();
img.src = SHEET_URL + "?" + new URLSearchParams(data).toString();
```

**Apps Script endpoint:**
```
https://script.google.com/macros/s/AKfycbzYasX4CxR3pgmixRN7JROfj1OwM15gr8IBRhg4NnAsKtvHOnmybA3Oj17FByQX7cyC/exec
```

**Spreadsheet ID:** `1naVXcVL27JR0KzIFSnzIclScVLRqLM_f3kHjEugcFr4`

| Form | Sheet | `source` field |
|---|---|---|
| index.html | Sheet2 | `index` |
| nexus.html | Sheet1 | `paperwork` |

**Sheet columns:** Timestamp · Name · Phone · Role · I Want To · Service · Area · Message · Source

**Apps Script uses `doGet(e)`** (not `doPost`) — reads params from `e.parameter`. The script is deployed as a web app with access set to "Anyone".

---

## Running Locally

```bash
node server.js
```

Then open `http://localhost:3000`. The server is a simple static file server — not needed in production.

---

## Deployment

Works on any static host with no configuration:

- **Netlify** — drag and drop the folder
- **GitHub Pages** — push to `main`, enable Pages in repo settings
- **Vercel** — import repo, framework: Other

No build command. Publish directory is the root folder.

---

## Services (NextDoorStep Nexus)

| Package | Price | Covers |
|---|---|---|
| NextDoorStep Verify | ₹9,999 | Title search, document scrutiny, government approvals |
| NextDoorStep Register | ₹44,999 | Verify + sale agreement, sale deed, TDS, stamp duty, registration |
| NextDoorStep Complete+ | ₹69,999 | Register + khata, BESCOM, property tax transfers |
| Custom | — | Seller-side, inherited property, partial documents, bespoke needs |

---

## Areas Covered

**Whitefield corridor** — Whitefield, Hoodi, Hope Farm, Kadugodi, Varthur, Brookefield

**ORR Belt** — Marathahalli, Bellandur, Kadubeesanahalli, Sarjapur Road

---

## RERA

**PRM/KA/RERA/1251/310/AG/260423/007159**

---

## Contact

- **WhatsApp / Call** — 9740447501
- **Email** — support@nextdoorstep.in
- **Address** — 4th Cross Rd, opp. Salarpuria Sattva Apts, Venkojirao Khane, Bommanahalli, Bengaluru 560068
