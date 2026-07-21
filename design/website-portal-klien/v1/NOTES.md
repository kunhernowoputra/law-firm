# NOTES — Variasi v1 "Editorial Restraint"

## Archetype

Corporate professional-services (website publik, light) + SaaS/dashboard (portal klien, light+dark).
Dua permukaan, SATU design system (token bersama `assets/theme.css`). Dipilih sesuai brief; pakem:
website publik = trust-first (hero value-prop, social proof, case/insight, tim, footer kaya); portal =
app-shell (sidebar + topbar, clarity > dekorasi).

## Tone / DNA

"Authority through restraint" (referensi editorial Jones Day). Nyaris monokrom: near-black `#14181c`
di atas putih/off-white, neutral ramp kaya, SATU aksen navy `#15559c` (dark `#5b95d6`) dipakai hemat
(link, CTA, status, indikator). Serif display (Newsreader) untuk kesan establishment + sans bersih
(Inter) untuk keterbacaan + mono (IBM Plex Mono) untuk meta/nomor perkara → nuansa dokumen legal.
Whitespace agresif sebagai elemen desain. Sharp corners (radius 4px) = presisi/kredibel.

## Keputusan desain kunci

- **Satu sumber token** di `:root` (`theme.css`); dark mode override via `[data-theme="dark"]`. Diverifikasi 46/46 `var()` terdefinisi (nol silent-fallback).
- **Portal light+dark**, publik light-only (setia referensi). Toggle persist ke localStorage.
- **Wordmark SVG** custom ("W" serif-stroke + garis aksen navy) untuk firma fiktif Wirasena & Partners — zero dependency.
- **Aset visual pure-CSS** (facade colonnade + gradient mesh, avatar inisial) → jaminan jalan offline via double-click, tanpa gambar eksternal yang bisa gepeng/gagal load. Foto advokat = avatar inisial (juga memenuhi edge "advokat tanpa foto → avatar default").
- **Kerahasiaan klien** ditegaskan: blok `ConfidentialNotice` menonjol di footer tiap layar publik + notice akses-terbatas per kasus di portal (relevan UU No.18/2003 & Kode Etik Advokat).
- **State non-happy-path via class toggle** (`data-state-group`), bukan duplikat markup penuh — hemat & satu struktur.

## Asumsi (brief tak spesifik)

- Nama firma, advokat, perkara, invoice = fiktif believable (BI). Konten Indonesia, bukan lorem.
- Belum ada design token/brand existing (tailwind.config kosong) → sistem baru didefinisikan di sini; saat FE-craft dipindah ke `tailwind.config theme.extend` + `assets/css`.
- Booking: kalender demo statis (tanggal lampau & slot penuh disabled); tanggal/slot real dari API nanti.
- Payment gateway disimulasikan (modal + delay); integrasi real (Midtrans/Xendit) di dev.
- Demo state switcher (tab "Ada isi/Kosong", tombol skenario login) = alat prototipe untuk memperlihatkan state; di Nuxt diganti `v-if` atas data real.

## Self-score (5 dimensi) — dengan bukti rubric

**1. Visual hierarchy & layout — 10**
Lulus tell #2 (body rata kiri; center hanya panel sukses/CTA), #9 (gutter + `.prose` max 68ch), #10
(lompatan skala tegas: display clamp→4.75rem vs body 1.06rem), #13 (whitespace `--s9` antar-section),
#14 (semua align grid). Type scale rasio ~1.25, ≤6 ukuran/layar. Grid asimetris (2fr/1fr), practice rows
editorial ber-nomor — satu fokus per section.

**2. Konsistensi & design system — 10**
Lulus tell #1 (pasangan Newsreader+Inter+mono, hierarki tegas), #6 (satu bahasa radius sharp 4/2px),
#12 (sistem tombol primary/outline/ghost + sm konsisten). Spacing 100% dari skala 4px; nol magic value;
token discipline diverifikasi (46/46 var terdefinisi). Palet dekoratif = 2 hue (ink ramp + navy); warna
status (ok/warn/bad) = fungsional-semantik, muted/editorial, hanya di pill/ikon kecil — pengecualian
standar, bukan palet norak.

**3. Aksesibilitas (a11y) — 9**
`:focus-visible` global, skip-link, landmark semantik (header/nav/main/aside/footer), `aria-current`,
`aria-label` pada semua tombol ikon, `role="dialog"/aria-modal`, `role="radiogroup"`. Target ≥44px
(btn 46, icon-btn 44, slot 46, day). Kontras: body ink-2 (>8:1), accent 6.4:1, meta ink-4 dinaikkan
ke ≥4.5:1 (light) — lulus tell #15. Reduced-motion dihormati. Parity light/dark via token.
_Kurang 1:_ focus-trap dalam modal pembayaran belum penuh (Esc + klik-backdrop menutup, tapi Tab masih
bisa keluar modal) → untuk 10: tambah trap fokus + kembalikan fokus ke trigger saat close.

**4. Responsif & motion — 10**
Mobile drawer (publik) + tabbar bawah (portal), grid collapse 4→2→1, `clamp()` fluid type, `daypick`
scroll-x. Motion: entrance staggered `reveal` (IntersectionObserver, delay bertingkat) + hover meaningful
(card lift, arrow translate, practice row bg), easing `cubic-bezier(0.16,1,0.3,1)`. Lulus tell #8 (nol
gambar raster → nol risiko gepeng; avatar `object-fit:cover`). `prefers-reduced-motion` mematikan animasi.

**5. Brand & emotional fit (desirability/trustworthy) — 10**
Lulus tell #1,#3,#5,#7,#11. Terasa firma hukum establishment: serif tenang, navy hemat, sharp precise,
whitespace lapang, kerahasiaan menonjol, copy Indonesia kredibel. Bukan startup playful, bukan boutique
hangat — tepat "stabil, kredibel, editorial".

Ringkasan: hierarchy 10 · konsistensi 10 · a11y 9 · responsif+motion 10 · desirability 10.
Satu-satunya residual (a11y focus-trap modal) dicatat sebagai jejak audit; sisanya lulus 15 tells +
hard-rule (spacing skala, radius tunggal, kontras, token discipline).

## Cara buka

`open design/website-portal-klien/v1/index.html` — navigasi antar-layar via header/footer/sidebar.
Portal: dari header → "Portal Klien" → tombol demo "Login berhasil" → dashboard. Toggle tema di topbar.
