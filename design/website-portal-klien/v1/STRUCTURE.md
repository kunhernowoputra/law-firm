# STRUCTURE — Website + Portal Klien · Variasi v1 ("Editorial Restraint")

Digest struktural per layar untuk fase ekstraksi ke komponen Nuxt 4. Nama komponen memakai konvensi
folder-per-page (CONVENTIONS.md): `components/<page>/<Peran>.vue` → auto-import `<PageX />`.
Palet/typografi/spacing = CSS custom properties di `assets/theme.css` (satu sumber kebenaran) → nanti
dipindah ke `tailwind.config.js theme.extend` + `assets/css`.

## Design tokens (kanonik)

- Warna: `--ink` ramp (ink, ink-2..4) · `--accent` (#15559c navy, dark #5b95d6) · surfaces (bg/bg-alt/bg-sunk/surface) · status (ok/warn/bad) · hairlines (line/line-2).
- Font: `--font-display` Newsreader (serif) · `--font-sans` Inter · `--font-mono` IBM Plex Mono (meta/ID).
- Spacing: skala 4px `--s1..--s10`. Radius: sharp `--r`(4px)/`--r-sm`(2px). Motion: `--ease` expo, `--dur`.
- Mode: light (publik) + light/dark toggle (portal) via `data-theme="dark"` di `<html>`, persist localStorage.

---

## Layar A — Website Publik (light)

### 1. Homepage (`index.html`) → `pages/index.vue`

Component Inventory:

- `SiteHeader` (shared) — nav sticky + brand SVG + CTA + mobile drawer. Di semua layar publik.
- `Hero` — value prop, stat firma, CTA ganda.
- `AboutIntro` (S1) — profil/keunggulan, 2 kolom asimetris + grid nilai.
- `PracticePreview` (S2) — 6 baris editorial ber-nomor → link `praktik.html`.
- `TeamPreview` (S3) — grid 4 `AttorneyCard`.
- `InsightPreview` (S4) — grid 3 `InsightCard` + demo state (data/empty).
- `Testimonial` (S8) — quote + logo-strip; section disembunyikan bila kosong.
- `CtaBand` (shared) — CTA konsultasi.
- `SiteFooter` (shared) — kontak + kolom link + `ConfidentialNotice`.
  Data Needs:
- tampil: firma.{tagline, stats[]}, practiceAreas[].{no,nama,ringkas}, attorneys[].{nama,inisial,peran,area,pengalaman,isNew}, insights[].{kategori,judul,excerpt,tanggal,menitBaca,slug}, testimoni[].{kutipan,peran,klien}, clients[].nama
- input: — (statis)
- aksi: READ (semua preview)
  States: insights → empty (belum ada artikel); testimoni → hidden bila kosong.

### 2. Area Praktik (`praktik.html`) → `pages/praktik.vue`

Component Inventory: `SiteHeader`, `PracticeDetail` ×6 (deskripsi, tags sub-layanan, advokat penanggung jawab), `CtaBand`, `SiteFooter`.
Data Needs:

- tampil: area.{no,nama,deskripsi,subLayanan[], advokatTerkait[].{nama,inisial,peran}}
- aksi: READ; link → konsultasi (prefilled kategori)
  States: area tanpa advokat → alert "belum ada advokat ditugaskan", tetap render + CTA konsultasi umum (edge S2).

### 3. Tim Advokat (`tim.html`) → `pages/tim.vue`

Component Inventory: `SiteHeader`, grid `AttorneyCard` ×N, `CtaBand`, `SiteFooter`.
Data Needs:

- tampil: attorney.{nama,gelar,inisial,peran,areaPraktik[],pengalamanThn,fotoUrl?,isNew}
- aksi: READ
  States: tanpa foto → avatar inisial default (fallback); badge "Baru".

### 4. Konsultasi + Booking (`konsultasi.html`) → `pages/konsultasi.vue`

Component Inventory: `SiteHeader`, `ConsultStepper` (3 langkah), `CategoryRouter` (S6), `ConsultDetailForm`, `BookingPicker` (S7: daypick + slots), `ConsultSuccess`, `ConfidentialNotice`.
Data Needs:

- tampil: kategori[].{value,label,areaRoute}, availableDays[].{tanggal,disabled,alasan(lampau/penuh)}, slots[].{jam,disabled}
- input: kategori(radio, wajib), nama(wajib), perusahaan, email(wajib,format), telp(wajib), ringkasan(wajib), tanggal(wajib), jam(wajib), consent(checkbox,wajib)
- aksi: CREATE (konsultasi + booking), routing kategori→area, konfirmasi email
  States: validasi per-field, double-submit guard (btn loading), slot penuh/tanggal lampau disabled, success panel.

### 5. Kontak (`kontak.html`) → `pages/kontak.vue`

Component Inventory: `SiteHeader`, `ContactInfo` (alamat/telp/email/jam), `MapPlaceholder`, `ContactForm` (S5), `SiteFooter`.
Data Needs:

- tampil: office.{alamat,telp,email,jamKerja,mapEmbed}
- input: nama(wajib), email(wajib,format), subjek, pesan(wajib)
- aksi: CREATE (pesan kontak)
  States: validasi field wajib, submit → loading → toast sukses.

---

## Layar B — Portal Klien (light + dark)

Shell bersama: `PortalShell` = `PortalSidebar` (desktop) + `PortalTopbar` (title + theme toggle + demo status) + `PortalTabbar` (mobile). Auth-guarded.

### 6. Login (`portal-login.html`) → `pages/portal/login.vue` (layout kosong)

Component Inventory: `AuthAside` (brand + assurance), `LoginForm`, `ThemeToggle`.
Data Needs:

- input: email(wajib,format), password(wajib), rememberDevice(checkbox)
- aksi: authenticate → redirect dashboard
  States (S9): error generik "email atau sandi salah" (tak bocorkan user exist); akun belum aktif → blok (alert warn); loading; toggle show/hide password.

### 7. Dashboard Progress Kasus (`portal-dashboard.html`) → `pages/portal/index.vue`

Component Inventory: `PortalShell`, `StatTiles` ×4, `CaseCard` + `CaseTimeline` (stepper vertikal done/current/upcoming), `AssignedAttorneys`, `CaseCompact`.
Data Needs:

- tampil: klien.nama, stats.{kasusAktif,dokumen,invoiceBelumBayar,konsultasiMendatang}, cases[].{judul,noPerkara,area,status,timeline[].{tanggal,judul,deskripsi,state:done|current|upcoming}, advokat[].{nama,inisial,peran}}
- aksi: READ (authz kepemilikan ketat — hanya kasus milik klien)
  States (S10): empty (tanpa kasus aktif → CTA konsultasi); status badge (berjalan/menunggu).

### 8. Dokumen (`portal-dokumen.html`) → `pages/portal/dokumen.vue`

Component Inventory: `PortalShell`, `CaseTabs`, `AccessNotice`, `UploadDropzone`, `UploadQueue` (item progress/error), `DocumentRow` list.
Data Needs:

- tampil: docs[].{nama,tipe,ukuran,pengunggah,tanggal,statusVerifikasi:terverifikasi|direview}
- input: file (PDF/JPG/PNG, ≤10MB), terikat caseId
- aksi: CREATE (upload), READ, DOWNLOAD; akses terbatas klien pemilik + advokat terkait
  States (S11): empty (dropzone besar), uploading (progress bar %), error tipe tak didukung (ganti berkas), error >limit (retry), drag-over styling.

### 9. Invoice (`portal-invoice.html`) → `pages/portal/invoice.vue`

Component Inventory: `PortalShell`, `StatTiles` ×3, `InvoiceRow` list, `PaymentModal` (metode VA/kartu).
Data Needs:

- tampil: invoices[].{noInvoice,deskripsi,noPerkara,jatuhTempo/tanggalBayar,jumlah,status:belumBayar|lunas|gagal, metode?}
- input: metodePembayaran (radio)
- aksi: READ, PAY (via payment gateway), retry on fail
  States (S12): belum bayar → tombol Bayar; gagal → status tetap belum bayar + Coba lagi; lunas → tombol disabled (cegah bayar dobel); empty (tanpa invoice); modal loading; toast sukses.

---

## Catatan implementasi Nuxt

- `SiteHeader/SiteFooter/CtaBand/ConfidentialNotice/PortalShell/AttorneyCard/InsightCard/StatTiles` → `components/shared/`.
- Demo state switcher (`data-state-group`/`data-state-for`) hanya alat prototipe → di Nuxt diganti kondisi data real (`v-if`).
- Semua form: validasi boundary via Zod (`shared/schemas/`), double-submit guard, error generik untuk login (jangan bocorkan eksistensi user).
- Skema data kanonik (Prisma) difinalkan saat tech-handoff — di sini baru Data Needs per layar.
