# Blueprint — Website & Portal Klien Kantor Hukum

> Tahap: Blueprint (PM/PO) — sebelum design/dev. Lihat CONVENTIONS.md untuk standar teknis implementasi.

## 🎯 Problem

Kantor hukum menengah (6-20 advokat, multi-praktik: Corporate, M&A, Tax, IP, Employment, Litigation) kehilangan calon klien karena tidak punya kehadiran online yang profesional/modern untuk menampilkan kredibilitas & area praktiknya, **dan** klien existing tidak punya visibility ke progress kasus mereka — harus telepon manual, kirim dokumen via email tanpa kontrol akses, dan bayar invoice secara manual. Ini menurunkan konversi lead dan membebani staf dengan kerja administratif berulang.

## 📋 Scope

**IN:**

- **Website publik:** company profile, daftar area praktik, profil tim advokat, artikel/blog hukum, halaman kontak + CTA, form konsultasi dengan routing ke layanan sesuai, booking konsultasi online, daftar client/testimoni
- **Portal klien:** login klien, dashboard progress kasus, upload & kelola dokumen (per-kasus, akses terbatas), pembayaran invoice online

**OUT (fase ini):**

- Admin/CMS panel untuk staf mengelola konten & meng-update status kasus — **gap penting**, lihat catatan Handoff
- Integrasi akuntansi/ERP
- Multi-bahasa (asumsi Bahasa Indonesia saja dulu)
- Live chat real-time
- Native mobile app

## 👤 User Stories

### Epic A — Website Publik

- **S1 — Company Profile** (🔴 Must) [UI]
  Sebagai calon klien, aku mau melihat profil kantor supaya bisa menilai kredibilitasnya sebelum konsultasi.
  AC: tampil deskripsi, visi, keunggulan, foto kantor · edge: konten belum diisi → placeholder, bukan blank

- **S2 — Area Praktik** (🔴 Must) [UI]
  Sebagai calon klien, aku mau lihat daftar area praktik (Corporate, M&A, Tax, IP, Employment, Litigation, dll) supaya tahu kantor ini menangani masalahku.
  AC: list + deskripsi singkat + link detail · edge: area tanpa advokat ditugaskan tetap tampil tanpa broken link

- **S3 — Profil Tim Advokat** (🔴 Must) [UI]
  Sebagai calon klien, aku mau lihat profil advokat (nama, spesialisasi, pengalaman) supaya bisa menilai keahliannya.
  AC: card per advokat + spesialisasi + area praktik terkait · edge: advokat baru tanpa foto → avatar default

- **S4 — Artikel/Blog Hukum** (🟡 Should) [UI]
  Sebagai pengunjung, aku mau baca artikel hukum supaya percaya pada expertise kantor.
  AC: list + halaman detail artikel · edge: belum ada artikel → empty state, bukan error

- **S5 — Kontak & CTA** (🔴 Must) [UI]
  Sebagai calon klien, aku mau lihat info kontak & CTA supaya mudah menghubungi kantor.
  AC: alamat, telp, email, peta, CTA "Konsultasi Sekarang" di halaman relevan · edge: form kontak submit tanpa field wajib → validasi

- **S6 — Form Konsultasi dengan Routing** (🔴 Must) [UI]
  Sebagai calon klien, aku mau isi form konsultasi yang mengarahkanku ke layanan/area praktik yang sesuai supaya ditangani advokat yang tepat.
  AC: pilih kategori masalah → auto-route ke area praktik · validasi field wajib · edge: kategori tak dikenal → fallback "konsultasi umum"; cegah double submit

- **S7 — Booking Konsultasi Online** (🔴 Must) [UI]
  Sebagai calon klien, aku mau booking jadwal konsultasi online supaya tak perlu telepon manual.
  AC: pilih tanggal/jam tersedia → konfirmasi via email · edge: slot penuh tak bisa dipilih; booking tanggal lampau ditolak

- **S8 — Daftar Client/Testimoni** (🟡 Should) [UI]
  Sebagai calon klien, aku mau lihat daftar client/testimoni supaya makin yakin dengan reputasi kantor.
  AC: logo/nama client (dengan consent) atau testimoni tampil · edge: belum ada testimoni → section disembunyikan

### Epic B — Portal Klien

- **S9 — Login Klien** (🔴 Must) [UI]
  Sebagai klien terdaftar, aku mau login ke portal supaya bisa akses info kasusku secara aman.
  AC: login email+password → redirect dashboard · edge: password salah → pesan generik (tak bocorkan user exist); akun belum aktif → block

- **S10 — Dashboard Progress Kasus** (🔴 Must) [UI]
  Sebagai klien, aku mau lihat progress kasusku (status, tahapan, riwayat) supaya tak perlu telepon staf untuk update.
  AC: status + timeline tahapan + advokat penanggung jawab · edge: klien tanpa kasus aktif → empty state; kasus milik klien lain tidak boleh terlihat (authz kepemilikan ketat)

- **S11 — Upload & Kelola Dokumen** (🔴 Must) [UI]
  Sebagai klien, aku mau upload dokumen kasusku supaya advokat bisa memprosesnya tanpa kirim manual via email.
  AC: upload file (PDF/gambar, limit ukuran) terikat ke kasus tertentu, akses hanya klien pemilik & advokat terkait · edge: file >limit ditolak, tipe tak didukung ditolak, upload gagal → retry dengan pesan jelas

- **S12 — Pembayaran Invoice Online** (🔴 Must) [UI]
  Sebagai klien, aku mau bayar invoice online supaya tak perlu transfer manual & menunggu konfirmasi.
  AC: lihat daftar invoice + status → bayar via payment gateway · edge: pembayaran gagal → status tetap belum bayar, bisa retry; invoice lunas tak bisa dibayar dobel

## 🤝 Handoff

- Stories ber-UI: semua (S1-S12) — heavy-UI product
- Tone/brand hint: **"modern, profesional, trustworthy"** — cocok untuk multi-praktik korporat & litigasi
- **Score Kesiapan: 8/10** — problem, user, scope, ID+prioritas sudah kuat. Yang menahan skor sempurna:
    1. Beberapa AC di S4/S8 masih tipis edge case-nya
    2. **Gap arsitektur:** portal klien butuh sisi staf untuk meng-update status kasus, konten artikel, dan invoice — tapi Admin/CMS panel sengaja di-OUT-kan fase ini. Bukan blocker untuk lanjut ke desain, tapi **perlu blueprint susulan untuk "Admin/Staff Backend"** sebelum portal klien ini bisa benar-benar dipakai produksi.

**Keputusan cabang pipeline:** menunggu konfirmasi user — belum ada design pattern → `design-studio`; sudah ada → `tech-handoff`.

## Konteks domain (riset)

Lihat riset regulasi & struktur kantor hukum Indonesia (UU Advokat, Kode Etik, implikasi role Advokat vs Paralegal, kerahasiaan klien) di memory project — relevan untuk desain role & data model saat tech-handoff/dev.
