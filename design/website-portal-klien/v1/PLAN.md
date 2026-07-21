# Peta Dekomposisi FE — Website + Portal Klien (frontend-craft)

> Sumber: `design/website-portal-klien/v1/*.html` + `assets/theme.css` + `assets/app.js` + `docs/structure-website-portal-klien.md`.
> Target: struktur FE Nuxt 4 patuh CONVENTIONS.md. FE-ONLY (data via composable mock + `// TODO: wire backend`).

## Keputusan arsitektur CSS (butuh approval — lihat GATE 1)

Prototipe memakai **design system CSS bespoke** (`theme.css`, semantic classes editorial), bukan Tailwind utility.
**Rencana (rekomendasi):**

1. **Token** (warna ink-ramp, accent, surfaces, status, lines, font, spacing 4px-scale, radius, shadow, wrap) → `tailwind.config.js theme.extend`, **di-map ke CSS custom properties** (`bg: 'var(--bg)'`, dst). Efek: dark-mode via `[data-theme="dark"]` swap otomatis; utility Tailwind & semantic class berbagi token yang sama; NOL magic value.
2. **Custom properties + reset/base + semantic component classes** → `app/assets/css/` (global, layered). Ini SAH: CONVENTIONS izinkan "style global di assets/css"; larangan hanya `<style scoped>` di `.vue`.
3. **Template `.vue`** pakai semantic class design-system + Tailwind utility untuk layout one-off. Nol `<style>` di komponen, nol magic value.

Alternatif (ditolak): rewrite 573 baris CSS editorial jadi utility murni → rusak fidelity, template bengkak >250 baris, hilang kejelasan semantik.

## Struktur file assets/css

```
app/assets/css/
  main.css        → @tailwind base/components/utilities + @import partial (entry, sudah terdaftar di nuxt.config)
  tokens.css      → :root + [data-theme=dark] custom properties + reset + base typography
  components.css  → semantic design-system classes (btn, card, nav, hero, forms, portal shell, timeline, rows, states, modal, toast, dst) di @layer components
```

## tailwind.config theme.extend (token)

- colors: bg/bg-alt/bg-sunk/surface/surface-2 · ink{DEFAULT,2,3,4} · line{DEFAULT,2} · accent{DEFAULT,ink,soft} · ok/warn/bad (+soft)
- fontFamily: display(Newsreader) · sans(Inter) · mono(IBM Plex Mono) — via @nuxt/fonts (auto Google Fonts)
- spacing: s1..s10 (4→128px) · borderRadius: DEFAULT(4px), sm(2px) · boxShadow: sm, md · maxWidth: wrap(1200px)

---

## Pohon komponen → folder Nuxt

### layouts/

- `default.vue` — public shell: `<SharedHeader/>` + `<slot/>` + `<SharedFooter/>`
- `portal.vue` — app shell: `<PortalSidebar/>` + `<PortalTopbar/>` + `<slot/>` + `<PortalTabbar/>`
- (login → `definePageMeta({ layout: false })`, full-screen auth grid sendiri)

### components/shared/ (lintas-page)

- `Header.vue` (SiteHeader) — nav sticky + brand + CTA + mobile drawer → konsumsi `useSiteHeader`
- `Footer.vue` (SiteFooter) — footer grid + `<SharedConfidential/>`
- `Confidential.vue` — notice kerahasiaan (props: variant) — presentasional
- `CtaBand.vue` — band CTA (props: title, text, ctaLabel, ctaTo) — presentasional
- `AttorneyCard.vue` — card advokat (props; fallback inisial, badge Baru) — presentasional
- `InsightCard.vue` — card artikel (props) — presentasional
- `StatTiles.vue` — grid stat (props: tiles[]) — presentasional
- `ThemeToggle.vue` — toggle light/dark → konsumsi `useTheme`

### components/portal/ (shell portal, dipakai layout portal)

- `Sidebar.vue` (PortalSidebar) — nav + `<PortalUserChip/>`
- `Topbar.vue` (PortalTopbar) — title (props/chrome) + `<SharedThemeToggle/>`
- `Tabbar.vue` (PortalTabbar) — bottom nav mobile
- `UserChip.vue` (PortalUserChip) — presentasional

### components/home/ → pages/index.vue

- `Hero.vue` · `About.vue` (S1) · `Practices.vue` (S2 preview) · `Team.vue` (S3 preview, loop AttorneyCard) · `Insights.vue` (S4 preview, loop InsightCard + empty) · `Testimonials.vue` (S8, hidden bila kosong)

### components/praktik/ → pages/praktik.vue

- `Detail.vue` (PraktikDetail) — 1 area praktik (props; edge: tanpa advokat → alert)

### components/tim/ → pages/tim.vue

- (page loop `<SharedAttorneyCard/>` — tak perlu komponen page khusus)

### components/konsultasi/ → pages/konsultasi.vue

- `Stepper.vue` · `CategoryStep.vue` (S6 routing) · `DetailStep.vue` · `BookingStep.vue` (S7 daypick+slot) · `Success.vue`

### components/kontak/ → pages/kontak.vue

- `Info.vue` · `MapPlaceholder.vue` · `Form.vue` (S5)

### components/login/ → pages/portal/login.vue

- `Aside.vue` (LoginAside) · `Form.vue` (LoginForm)

### components/dashboard/ → pages/portal/index.vue

- `CaseCard.vue` · `Timeline.vue` (props: timeline[]) · `Assignees.vue` (props: advokat[]) · `Empty.vue` (empty state)

### components/dokumen/ → pages/portal/dokumen.vue

- `Tabs.vue` (case tabs) · `AccessNotice.vue` · `Dropzone.vue` · `UploadQueue.vue` · `DocRow.vue`

### components/invoice/ → pages/portal/invoice.vue

- `Row.vue` (InvoiceRow) · `PaymentModal.vue`

---

## Composables

### root composables/ (reusable lintas-page)

- `useTheme.js` — dark/light, persist localStorage (`wp-theme`), apply `data-theme`, SSR-safe (client apply)
- `useToast.js` — toast queue reusable (kontak, invoice, konsultasi)
- `useSiteHeader.js` — mobile drawer open + sticky-stuck on scroll (client)
- `useReveal.js` — scroll reveal IntersectionObserver, client-only via onNuxtReady (hindari hydration race)
- `usePortalChrome.js` — title topbar portal (useState, di-set per page)

### composables/[page]/

- `home/useHome.js` — mock: firma{stats}, practiceAreas[], attorneys[], insights[], testimonials[], clients[]; flags hasInsights/hasTestimonials
- `praktik/usePraktik.js` — areas[] detail (subLayanan, advokatTerkait; edge tanpa advokat)
- `tim/useTim.js` — attorneys[] full
- `konsultasi/useKonsultasi.js` — step state, form model, kategori→area routing, availableDays/slots mock, validasi per-field, double-submit guard, submit→success
- `kontak/useKontak.js` — form model, validasi, submit→toast
- `login/useLogin.js` — form model, show/hide password, error generik, akun-belum-aktif, loading submit
- `dashboard/useDashboard.js` — stats, cases[] (timeline+advokat), empty toggle
- `dokumen/useDokumen.js` — case tabs aktif, docs[] mock, dropzone drag state, upload sim (progress/error tipe/limit/retry), empty
- `invoice/useInvoice.js` — invoices[] mock, modal state, metode bayar, pay sim (gagal/retry, lunas disabled), toast

### app/utils/ (murni, no prefix use)

- `formatCurrency.js` — Rupiah
- `formatDate.js` — tanggal ID
- `formatBytes.js` — ukuran file

---

## States (empty/loading/error) — per komponen data

- `HomeInsights` — empty (belum ada artikel)
- `HomeTestimonials` — hidden bila kosong
- `PraktikDetail` — edge: area tanpa advokat → alert, tetap render + CTA umum
- `AttorneyCard` — fallback inisial (no foto), badge Baru
- `KonsultasiBookingStep` — slot penuh/tanggal lampau disabled; validasi; double-submit; success
- `KontakForm` — validasi; loading; toast
- `LoginForm` — error generik; akun belum aktif; loading; show/hide pw
- `DashboardCaseCard` — empty (tanpa kasus → CTA konsultasi)
- `DokumenDropzone/UploadQueue` — empty; uploading %; error tipe/limit→retry; drag-over
- `InvoiceRow/PaymentModal` — empty; belum bayar→Bayar; gagal→retry; lunas→disabled; modal loading; toast

## Catatan FE-only

- Semua data dari composable = mock typed (via Zod-less plain object, JSDoc shape) + `// TODO: wire backend`.
- Demo state-switcher prototipe (`data-state-*`) TIDAK diport — diganti `v-if` state real di composable.
- Nol sentuh `server/`, `prisma/`, API. Auth/login submit = mock (no real fetch).
