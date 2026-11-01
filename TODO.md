# NextDoorStep — Content TODO

Items needed before the site can go fully live. Each section maps to a specific config file.

---

## Pricing (`content/pricing.config.ts`)

### Tier names — keeping current names, update later if needed
- [x] Owner rent-out: **Launch / Boost / Concierge** (keeping as-is)
- [x] Tenant move-in: **Move-in Lite / Move-in Plus / Move-in Complete** (keeping as-is)

### Buyer brokerage
- [x] `buyer_brokerage_percent` set to `"1%"`

### Seller brokerage
- [x] `seller_brokerage_percent` set to `"2%"`

---

## Testimonials (`content/testimonials.ts`)

- [ ] Real client quote #1 (Owner or Tenant)
- [ ] Real client quote #2 (Owner or Tenant)
- [ ] Real client quote #3 (Buyer)
- [ ] Real client quote #4 (Owner)

The testimonials section on the homepage is **hidden** until at least one real quote is added.

---

## Builders / partners (`content/builders.ts`)

- [ ] Real builder or partner names you work with (replace the 5 placeholders)
- [ ] Logos (optional — add `logo: "/assets/builder-name.svg"` if available)

The builder strip is **hidden** until at least one real name is added.

---

## Communities (`components/sections/Communities.tsx`)

- [ ] Confirm market note per area — currently drafted as illustrative copy
- [ ] Real community photos — replace gradient placeholder backgrounds with actual images

---

## Trust strip / stats

- [ ] Confirm "50+ Families assisted" is accurate and current
- [ ] Confirm "50+ Deals closed" stat in Communities section
- [ ] **Needs verification:** "70+ bank partners" stat on /nexus — confirm this number is accurate before launch
- [ ] **Needs verification:** "30+ Nexus services" stat on /nexus — confirm this number is accurate before launch

---

## Hero stats

- [ ] Decide which 3–4 trust points to show in the hero panel cards

---

## Sample listings (`components/sections/SampleCard.tsx`)

- [ ] Three sample listings (Whitefield 3BHK, Bellandur 2BHK, Sarjapur Road 2BHK villa) are illustrative.
      Replace with real anonymised examples if available, or keep the "Sample" label.

---

## Nexus checklist (`components/sections/NexusBand.tsx`)

- [ ] Review and approve the "7 things to verify" checklist wording before going live.

---

## Buyer brokerage display

- [x] `buyer_brokerage_percent` is currently `"1%"` — shown on /tenants-buyers and /pricing
- [ ] **Confirm:** Is "1%" the correct buyer-side brokerage to show publicly? If not, clear the value and the UI will show "Quote shared upfront"

## Legal / RERA

- [ ] RERA number `PRM/KA/RERA/1251/310/AG/260423/007159` — confirm still current
- [ ] Office address in `content/site.ts` — confirm correct
- [ ] Review draft Privacy Policy at `/privacy` before making it final — not yet reviewed by legal counsel
- [ ] Review draft Terms of Service at `/terms` before making it final — not yet reviewed by legal counsel

---

## Photos

- [ ] `public/assets/east-blr-neighbourhood.png` — confirm this is the correct hero image
- [ ] Community area photos for the Communities grid
