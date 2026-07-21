# Struktur Final — Website + Portal Klien Kantor Hukum

> Tahap: Handoff struktural (design-studio, Fase B) — diekstrak dari prototipe terpilih `design/website-portal-klien/v1/`.
> Ini spek **"apa yang dibangun"** untuk development manual. Skema data kanonik (Prisma) & kontrak API difinalkan saat tech-handoff/dev — lihat CONVENTIONS.md untuk standar teknis.
> Arah desain: editorial minimalis "authority through restraint" (referensi jonesday.com). Design token: `design/website-portal-klien/v1/assets/theme.css` (46 CSS custom properties) → dipindah ke `tailwind.config.js theme.extend`.

## 🧩 Component Inventory

### Shared — Publik (`components/shared/`)

- **SiteHeader** — nav sticky + brand SVG + CTA + mobile drawer. Di semua 5 layar publik.
- **SiteFooter** — kontak + kolom link + `ConfidentialNotice` (blok kerahasiaan klien, UU 18/2003).
- **CtaBand** — band CTA "Konsultasi Sekarang". Di homepage, praktik, tim.
- **ConfidentialNotice** — notice etik kerahasiaan; reusable (footer + portal).
- **AttorneyCard** — card advokat (avatar inisial fallback, badge "Baru"). Dipakai di `TeamPreview` (homepage) & halaman Tim.
- **InsightCard** — card artikel. Dipakai di `InsightPreview` (homepage) & (nanti) list artikel.

### Homepage-only

`Hero` · `AboutIntro` (S1) · `PracticePreview` (S2) · `TeamPreview` (S3) · `InsightPreview` (S4) · `Testimonial` (S8, section hidden bila kosong).

### Praktik / Tim / Kontak

- **PracticeDetail** ×6 — deskripsi, sub-layanan, advokat penanggung jawab.
- **ContactInfo** · **MapPlaceholder** · **ContactForm** (S5).

### Konsultasi (S6 + S7)

`ConsultStepper` (3 langkah) → `CategoryRouter` → `ConsultDetailForm` → `BookingPicker` → `ConsultSuccess`.

### Shared — Portal (`components/shared/`)

- **PortalShell** = `PortalSidebar` (desktop) + `PortalTopbar` (title + `ThemeToggle`) + `PortalTabbar` (mobile). Auth-guarded, di semua layar portal.
- **StatTiles** — grid kartu statistik. Dipakai di Dashboard (×4) & Invoice (×3).
- **ThemeToggle** — light/dark, persist localStorage. Dipakai portal (& login).

### Portal-only

- **Login**: `AuthAside` + `LoginForm`.
- **Dashboard**: `CaseCard` + `CaseTimeline` (stepper vertikal done/current/upcoming) + `AssignedAttorneys` + `CaseCompact`.
- **Dokumen**: `CaseTabs` + `AccessNotice` + `UploadDropzone` + `UploadQueue` + `DocumentRow`.
- **Invoice**: `InvoiceRow` + `PaymentModal`.

---

## 📥 Data Needs (→ development)

### Publik

**Homepage** (`pages/index.vue`)

- tampil: `firma.{tagline, stats[]}` · `practiceAreas[].{no, nama, ringkas}` · `attorneys[].{nama, inisial, peran, area, pengalaman, isNew}` · `insights[].{kategori, judul, excerpt, tanggal, menitBaca, slug}` · `testimoni[].{kutipan, peran, klien}` · `clients[].nama`
- aksi: READ

**Area Praktik** (`pages/praktik.vue`)

- tampil: `area.{no, nama, deskripsi, subLayanan[], advokatTerkait[].{nama, inisial, peran}}`
- aksi: READ; link → konsultasi (prefill kategori)

**Tim Advokat** (`pages/tim.vue`)

- tampil: `attorney.{nama, gelar, inisial, peran, areaPraktik[], pengalamanThn, fotoUrl?, isNew}`
- aksi: READ

**Konsultasi + Booking** (`pages/konsultasi.vue`)

- input: `kategori*` · `nama*` · `perusahaan` · `email*` (format) · `telp*` · `ringkasan*` · `tanggal*` · `jam*` · `consent*`
- tampil: `kategori[].{value, label, areaRoute}` · `availableDays[].{tanggal, disabled, alasan}` · `slots[].{jam, disabled}`
- aksi: **CREATE** (konsultasi + booking) · routing kategori→area · konfirmasi email

**Kontak** (`pages/kontak.vue`)

- input: `nama*` · `email*` (format) · `subjek` · `pesan*`
- tampil: `office.{alamat, telp, email, jamKerja, mapEmbed}`
- aksi: **CREATE** (pesan kontak)

### Portal

> Semua READ ber-**authz kepemilikan ketat** — klien hanya bisa melihat data miliknya (kasus/dokumen/invoice milik klien lain TIDAK boleh terlihat).

**Login** (`pages/portal/login.vue`, layout kosong)

- input: `email*` (format) · `password*` · `rememberDevice`
- aksi: authenticate → redirect dashboard

**Dashboard Progress Kasus** (`pages/portal/index.vue`)

- tampil: `klien.nama` · `stats.{kasusAktif, dokumen, invoiceBelumBayar, konsultasiMendatang}` · `cases[].{judul, noPerkara, area, status, timeline[].{tanggal, judul, deskripsi, state:done|current|upcoming}, advokat[].{nama, inisial, peran}}`
- aksi: READ

**Dokumen** (`pages/portal/dokumen.vue`)

- tampil: `docs[].{nama, tipe, ukuran, pengunggah, tanggal, statusVerifikasi:terverifikasi|direview}`
- input: `file` (PDF/JPG/PNG, ≤10MB, terikat `caseId`)
- aksi: **CREATE** (upload) · READ · **DOWNLOAD** · akses terbatas pemilik + advokat terkait

**Invoice** (`pages/portal/invoice.vue`)

- tampil: `invoices[].{noInvoice, deskripsi, noPerkara, jatuhTempo|tanggalBayar, jumlah, status:belumBayar|lunas|gagal, metode?}`
- input: `metodePembayaran` (radio)
- aksi: READ · **PAY** (payment gateway) · retry on fail

---

## 🎭 States (empty / loading / error)

| Komponen/Layar         | State                                                                                                                                                                   |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `InsightPreview`       | **empty**: belum ada artikel                                                                                                                                            |
| `Testimonial`          | **hidden** bila kosong                                                                                                                                                  |
| `PracticeDetail`       | **edge**: area tanpa advokat → alert "belum ditugaskan", tetap render + CTA konsultasi umum                                                                             |
| `AttorneyCard`         | **fallback**: tanpa foto → avatar inisial; badge "Baru"                                                                                                                 |
| Konsultasi             | validasi per-field · **loading** (double-submit guard) · slot penuh / tanggal lampau disabled · **success** panel                                                       |
| Kontak / `ContactForm` | validasi wajib · **loading** → toast sukses                                                                                                                             |
| Login                  | **error** generik "email atau sandi salah" (tak bocorkan user exist) · akun belum aktif → blok (alert warn) · **loading** · show/hide password                          |
| Dashboard / `CaseCard` | **empty**: tanpa kasus aktif → CTA konsultasi · status badge (berjalan/menunggu)                                                                                        |
| Dokumen                | **empty** (dropzone besar) · **uploading** (progress %) · **error** tipe tak didukung / **error** >limit → retry · drag-over styling                                    |
| Invoice                | **empty** · belum bayar → Bayar · **gagal** → status tetap belum bayar + Coba lagi · **lunas** → tombol disabled (cegah bayar dobel) · modal **loading** → toast sukses |

---

## Catatan implementasi Nuxt

- Shared components → `components/shared/`. Sisanya folder-per-page: `components/<page>/<Peran>.vue` (auto-import `<PageX />`, konvensi CONVENTIONS.md).
- Demo state switcher di prototipe (`data-state-group`/`data-state-for`, tombol skenario) hanya alat prototipe → di Nuxt diganti kondisi data real (`v-if`).
- Semua form: validasi boundary via Zod (`shared/schemas/`), double-submit guard. Login: error generik (jangan bocorkan eksistensi user).
- Portal theme: `data-theme="dark"` di `<html>`, persist localStorage.
- Skema data kanonik (Prisma) & kontrak API difinalkan saat tech-handoff/dev — di sini baru Data Needs per layar.

---

## ⚠️ Gap arsitektur — WAJIB dibaca sebelum development

Portal klien ini butuh **sisi staf/CMS** untuk meng-update status kasus, mengelola konten artikel, dan generate invoice — sengaja di-**OUT**-kan fase ini (lihat blueprint). **Portal belum bisa dipakai produksi tanpa backend admin tersebut.** Perlu **blueprint susulan "Admin/Staff Backend"** sebelum atau paralel dengan implementasi portal ini.

## Konteks etik (jangan hilang di implementasi)

- **Kerahasiaan klien = prinsip etik inti** (UU 18/2003 Advokat + Kode Etik). Dokumen akses terbatas, audit trail akses dokumen, `ConfidentialNotice` menonjol di tiap layar relevan.
- Role: Advokat vs Paralegal/Staf beda permission (portal ini sisi KLIEN — role staf menyusul di blueprint admin).
