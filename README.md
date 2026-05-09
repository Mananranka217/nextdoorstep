# NextDoorStep

Static website for NextDoorStep — a premium Bengaluru resale and rental concierge. Two pages, no build tooling, no dependencies.

Live: [github.com/Mananranka217/nextdoorstep](https://github.com/Mananranka217/nextdoorstep)

---

## Pages

### `index.html` — Homepage
- **Hero** — Headline, subheadline, trust pills (50+ families · no listing spam · same-day follow-up · local market guidance), primary CTA "Explore Properties", WhatsApp CTA, sublink to Nexus
- **Intro** — "No endless listings. Just the areas people ask for most."
- **Quote band** — Brand promise statement
- **Communities We Serve** — 8-card grid (7 localities + custom enquiry card), stats strip, trust strip
- **NextDoorStep Nexus teaser** — Brief Nexus intro with CTA
- **Enquiry form** — Routes to Sheet2 in Google Sheets

### `nexus.html` — NextDoorStep Nexus
Full resale transaction support and documentation page:
- **Hero** — "Buy with confidence. Sell with nothing left unresolved." + stats (70+ bank partners, 30+ Nexus services)
- **Before you pay the token** — 7 pre-token verification checks with CTA
- **Features** — Full-width overview card + 5 feature rows (legal diligence, documentation, transaction desk, finance, government coordination)
- **How it works** — 6-step timeline: lock → collect → legal review → sign → register → post-purchase transfers
- **Nexus services** — 4 packages: Verify (₹9,999), Register (₹44,999), Complete+ (₹69,999), Custom
- **Enquiry form** — Routes to Sheet1 in Google Sheets

---

## File Structure

```
nds/
├── index.html
├── nexus.html
├── styles.css
├── script.js
├── server.js        # Local dev only — not needed in production
└── assets/
    └── east-blr-neighbourhood.png
```

---

## Tech Stack

Plain HTML, CSS, and JavaScript. No framework, no build step, no npm.

- **Fonts** — Georgia (serif headings), Arial / system-ui (body)
- **CSS** — Custom properties, CSS Grid throughout, `clamp()` for fluid type and spacing
- **JS** — Single `script.js`, handles form submission only

---

## Form → Google Sheets Integration

Submissions sent via an **image request** to bypass CORS — no server required in production.

```js
const img = new Image();
img.src = SHEET_URL + "?" + new URLSearchParams(data).toString();
```

| | Value |
|---|---|
| Apps Script endpoint | `https://script.google.com/macros/s/AKfycbzYasX4CxR3pgmixRN7JROfj1OwM15gr8IBRhg4NnAsKtvHOnmybA3Oj17FByQX7cyC/exec` |
| Spreadsheet ID | `1naVXcVL27JR0KzIFSnzIclScVLRqLM_f3kHjEugcFr4` |

| Form | Sheet | `source` value |
|---|---|---|
| index.html | Sheet2 | `index` |
| nexus.html | Sheet1 | `paperwork` |

**Sheet columns:** Timestamp · Name · Phone · Role · I Want To · Service · Area · Message · Source

Apps Script uses `doGet(e)` (not `doPost`) and reads from `e.parameter`. Deployed as a web app with access set to "Anyone".

---

## Running Locally

```bash
node server.js
```

Open `http://localhost:3000`. The server is a static file server — not needed in production.

---

## Deployment

Works on any static host with no configuration:

| Host | How |
|---|---|
| Netlify | Drag and drop the folder |
| GitHub Pages | Push to `main`, enable Pages in repo settings |
| Vercel | Import repo, framework: Other |

No build command. Publish directory is the root folder.

---

## Communities Covered

| Locality | Descriptor |
|---|---|
| Whitefield | High resale & rental activity |
| Varthur | Fast-moving gated communities |
| Budigere Cross | Emerging residential growth |
| Hoodi | Apartment-focused micro market |
| AECS Layout | Established residential neighbourhood |
| Sarjapur Road | High tenant movement |
| Kadugodi | Growing end-user demand |

---

## NextDoorStep Nexus — Service Packages

| Package | Price | Covers |
|---|---|---|
| NextDoorStep Verify | ₹9,999 | Title search, document scrutiny, government approvals |
| NextDoorStep Register | ₹44,999 | Verify + sale agreement, sale deed, TDS, stamp duty, registration |
| NextDoorStep Complete+ | ₹69,999 | Register + khata, BESCOM, property tax transfers |
| Custom | — | Seller-side, inherited property, partial documents, bespoke needs |

---

## RERA

**PRM/KA/RERA/1251/310/AG/260423/007159**

---

## Contact

| | |
|---|---|
| WhatsApp / Call | 9740447501 |
| Email | support@nextdoorstep.in |
| Address | 4th Cross Rd, opp. Salarpuria Sattva Apts, Venkojirao Khane, Bommanahalli, Bengaluru 560068 |

