# FLY AIR LOGISTICS - International Freight Forwarder Website

Production-ready, high-performance brochure website for **FLY AIR LOGISTICS** (International Freight Forwarders), moving cargo worldwide from Pakistan since 2012 (with trade foundations established in the 1980s). 

Built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, and architected for global edge deployment on **Cloudflare Workers** using `@opennextjs/cloudflare`.

---

## 🏗️ Architecture & Tech Stack

- **Framework**: Next.js 15 (App Router) with React 19 and TypeScript.
- **Hosting & Runtime**: Cloudflare Workers via `@opennextjs/cloudflare` with `nodejs_compat`.
- **Database**: Cloudflare D1 integration configured in `wrangler.toml` and `/api/contact` route handler.
- **Image Storage**: Cloudflare R2 bucket binding configured in `wrangler.toml` with custom domain image resolution helper in `lib/r2.ts`.
- **Styling**: Tailwind CSS with sharp, corporate aesthetics and `@tailwindcss/typography`.
- **Forms**: Route Handler at `/api/contact` with logging, optional D1 persistence, and WhatsApp/Email fallbacks.
- **Blog System**: Build-time static generation (`scripts/generate-blog.mjs`) generating `lib/posts.ts` from `content/blog/*.md` to guarantee zero runtime `fs` operations on Cloudflare Workers edge nodes.

---

## 🎨 Brand & Visual Identity

- **Colors**:
  - **Primary**: Deep Freight Red (`#C8102E`)
  - **Secondary**: Charcoal Black (`#0F1115` / `#1A1D24`)
  - **Background**: Pure White (`#FFFFFF`) / Architectural Light Grey (`#F8FAFC`)
  - **Text**: Premium Slate Black (`#0F172A`) & Dark Charcoal (`#1E293B`)
- **UI Enforcements**:
  - **Rectangle ONLY**: All buttons, cards, badges, and input elements enforce `rounded-none` (0px border-radius). No rounded pills.
  - **Wing Motif**: Aerodynamic, multi-blade wing SVG branding and subtle geometric dividers (`WingDivider.tsx`).
  - **Corporate Tone**: Authoritative, international, and precision-engineered for Pakistani exporters and global consignees.

---

## 🗺️ Site Structure & Routes

| Route | Page | Description |
| :--- | :--- | :--- |
| `/` | **Home** | Hero, Trust Stats (Since 2012, Roots 1980s), 10 Services Grid, Pakistan Gateways & Global Coverage, Testimonial ("Testimonial coming soon."), Direct CTA. |
| `/services` | **Services Directory** | Complete index of all 10 specialized forwarding solutions. |
| `/services/air-freight` | **Air Freight** | IATA scheduled flights, cold-chain, and express air cargo from LHE, KHI, ISB, SKT. |
| `/services/sea-freight` | **Sea Freight** | FCL and LCL container shipping via Karachi Port Trust (KPT) and Port Qasim (QICT). |
| `/services/land-freight` | **Land Freight** | Bonded highway drayage connecting dry ports to seaports across M-2, M-3, M-5, and N-5. |
| `/services/customs-clearance` | **Customs Brokerage** | Licensed clearance agents for Pakistan Single Window (PSW), WeBOC, and HS Code valuation. |
| `/services/door-to-door` | **Door-to-Door Delivery** | Frictionless DDP and DAP shipping from factory floor to international consignee. |
| `/services/warehousing` | **Warehousing & Storage** | Cargo staging, export palletization (ISPM-15), shrink-wrapping, and consolidation in Lahore/Karachi. |
| `/services/cargo-insurance` | **Cargo Insurance** | Institute Cargo Clauses (A) All-Risk transit insurance and General Average protection. |
| `/services/documentation` | **Export/Import Documentation** | Chamber Certificate of Origin, SBP electronic Form E, and UCP 600 Letter of Credit audits. |
| `/services/lcl-fcl` | **LCL & FCL Consolidation** | Groupage boxes, buyer consolidation, and full container bookings. |
| `/services/project-cargo` | **Project Cargo & Heavy Lift** | Out-of-gauge (OOG) machinery, route surveys, and breakbulk vessel chartering. |
| `/about` | **About Us** | Corporate heritage from 1980s Brandreth Road roots, 2012 incorporation, mission, and trust signals. |
| `/contact` | **Contact & Inquiries** | 84 Brandreth Road, Lahore; 10:00 AM – 08:00 PM; interactive form with Thank You state; direct WhatsApp hotline (+92 325 5577711). |
| `/blog` | **Blog Index** | Educational guides on Pakistani exports, customs, transit comparison, and Incoterms. |
| `/blog/[slug]` | **Blog Post Single** | In-depth articles with Table of Contents, Reading Time, and Article JSON-LD schema. |
| `/privacy-policy` | **Privacy Policy** | Professional freight client data privacy terms. |
| `/terms-and-conditions` | **Terms of Carriage** | Standard trading conditions, Hague-Visby & Montreal Convention liability limits. |
| `/sitemap.xml` | **XML Sitemap** | Dynamic, comprehensive sitemap covering all 28 indexable URLs. |
| `/robots.txt` | **Robots.txt** | Clean indexing directives allowing search engines and blocking `/api/`. |
| `404` | **Not Found** | Custom styled error page with home and service links. |

---

## 📈 SEO & Performance Highlights

- **One H1 per page** with strict semantic `H2/H3` hierarchy across every layout.
- **Self-referencing Canonical URLs** configured on every static and dynamic page.
- **Structured Data (Schema.org)**:
  - `FreightForwarder` / `Organization` schema in `app/layout.tsx`.
  - `WebSite` schema with search action in `app/layout.tsx`.
  - `Service` and `BreadcrumbList` schemas in `app/services/[slug]/page.tsx`.
  - `BlogPosting` / `Article` schema in `app/blog/[slug]/page.tsx`.
- **Zero Runtime File System Dependency**: Blog markdown is compiled at build-time via `scripts/generate-blog.mjs` into `lib/posts.ts`, ensuring 100% compatibility with edge environments like Cloudflare Workers.
- **Core Web Vitals**: Minimal client-side JavaScript, responsive typography, eager header rendering, and zero layout shift.

---

## 🚀 Local Development & Deployment

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production (Cloudflare Worker)
```bash
npm run build:worker
```
This script runs the blog generator, executes `next build`, and bundles the app using OpenNext into `.open-next/worker.js` and `.open-next/assets`.

### 4. Preview Worker Locally with Wrangler
```bash
npm run preview
```

### 5. Deploy to Cloudflare Workers
```bash
npm run deploy
```

---

## ⚙️ Cloudflare Bindings Configuration (`wrangler.toml`)

- **R2 Image Bucket**:
  ```toml
  [[r2_buckets]]
  binding = "R2_BUCKET"
  bucket_name = "flyair-assets"
  ```
- **D1 Database**:
  ```toml
  [[d1_databases]]
  binding = "DB"
  database_name = "flyair-db"
  database_id = "<your-d1-database-id>"
  ```
  *(To create the inquiries table in D1, run: `npx wrangler d1 execute flyair-db --command "CREATE TABLE inquiries (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT, phone TEXT, service TEXT, message TEXT, created_at TEXT);"`)*

---

## 📞 Company Contact Details

- **Company**: FLY AIR LOGISTICS (International Freight Forwarders)
- **Head Office**: 84 Brandreth Road, Lahore, Pakistan
- **Business Hours**: Monday – Saturday: 10:00 AM – 08:00 PM
- **WhatsApp**: [+92 325 5577711](https://wa.me/923255577711)
- **Email**: [flyairlogistics.official@gmail.com](mailto:flyairlogistics.official@gmail.com)

