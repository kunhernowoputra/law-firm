# Ridwan & Co. Law Office — Website

Website marketing kantor hukum Ridwan & Co. — Nuxt 4 (Vue + Nitro), vanilla JavaScript (tanpa TypeScript), Tailwind CSS.

Standar coding & struktur project: lihat [`CONVENTIONS.md`](./CONVENTIONS.md).

> Portal klien (`/portal/**`) masih prototipe frontend (mock, tanpa backend/auth) — belum dilink dari navigasi publik dan di-`noindex` via `routeRules`. Jangan dianggap fitur live.

## Setup

```bash
npm install
```

## Development

```bash
npm run dev
```

Jalan di `http://localhost:3000`.

## Quality Gate

```bash
npm run lint       # ESLint
npm run test       # Vitest
npm run verify:all # lint + test (jalankan sebelum PR/deploy)
```

## Production

```bash
npm run build      # build Nitro server
npm run generate   # build static (kalau full-static)
npm run preview    # preview build production secara lokal
```

Deploy ke Vercel (project sudah linked, lihat `.vercel/project.json`). Push ke branch `main` untuk trigger deploy production.

### Environment Variables

Salin `.env.example` → `.env` untuk local dev. Variabel production di-set lewat dashboard Vercel:

| Variable               | Wajib? | Keterangan                                                                          |
| ---------------------- | ------ | ----------------------------------------------------------------------------------- |
| `DATABASE_URL`         | Belum  | Prisma/Postgres — belum dipakai fitur apapun saat ini (schema kosong)               |
| `NUXT_PUBLIC_SITE_URL` | Ya     | Domain production, dipakai sitemap.xml & meta SEO (default: `https://ridwanco.com`) |

## Database (Prisma)

```bash
npm run db:generate  # generate Prisma client
npm run db:migrate   # buat & jalankan migration (dev)
npm run db:studio    # buka Prisma Studio
```

Schema (`prisma/schema.prisma`) saat ini kosong — belum ada fitur yang butuh database.
