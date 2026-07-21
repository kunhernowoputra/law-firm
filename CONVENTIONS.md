# Project Conventions — Source of Truth

> Standar non-fungsional yang WAJIB diikuti tiap task — acuan saat menulis & me-review kode.
>
> Stack: **Nuxt 4 (Vue + Nitro)** · **Vanilla JavaScript (ESM, TANPA TypeScript)** · **Postgres + Prisma** · Testing **pragmatis** · Security **data sensitif (PII/auth)**.

---

## 1. Code Style

### Naming

- **Variabel/fungsi:** `camelCase` — deskriptif, bukan singkatan (`userList` bukan `ul`)
- **Komponen Vue:** `PascalCase`. Folder = namespace, nama file = peran — JANGAN ulang nama folder di nama file. `components/admin/Topbar.vue` → auto-import `<AdminTopbar />` ✅, BUKAN `components/admin/AdminTopbar.vue` ❌. Nama satu kata OK kalau folder sudah kasih konteks (`Topbar.vue`, `Sidebar.vue`); nama generik di root tanpa folder (`Form.vue`) tetap dihindari.
- **Composables:** prefix `use` (`useComments.js`) — khusus yang punya state/reactive
- **Util murni:** `camelCase` TANPA prefix `use` (`formatDate`, `formatCurrency`) — fungsi murni tanpa state, di `app/utils/` atau `shared/utils/`
- **Server handler:** sesuai konvensi Nitro (`login.post.js`, `comments.get.js`)
- **Shared shapes:** bentuk data shared didokumentasikan sebagai objek/Zod schema di `shared/schemas/` (bukan TS interface)
- **Boolean:** prefix `is`/`has`/`can` (`isLoading`, `hasError`)
- **Konstanta:** `UPPER_SNAKE_CASE` untuk true constant

### Struktur File (Nuxt 4)

```
app/
  app.vue               → root component (NuxtLayout + NuxtPage) — .vue, ikut aturan nol-logic & no <style>
  error.vue             → custom error page (opsional) — .vue, ikut aturan
  components/[page]/     → 1 page = 1 folder senama (komponen khusus page itu); shared lintas-page → components/shared/
  composables/[page]/    → composable khusus page (atau use[Page].js); reusable lintas-page → composables/ root
  utils/                → helper MURNI tanpa state (formatDate, formatCurrency) — auto-import, NO prefix use
  pages/                → routing
  layouts/              → wrapper layout (default.vue, admin.vue) — .vue, ikut aturan nol-logic & no <style>
  middleware/           → route guard
  plugins/              → Nuxt plugin (registrasi runtime)
  assets/               → aset diproses build; assets/css = style global + entry Tailwind
server/
  api/                  → endpoint (Nitro)
  utils/                → helper server-side
  middleware/           → server middleware
shared/
  schemas/              → Zod schema (shared shapes / kontrak data)
  utils/                → helper dipakai client + server
prisma/                 → schema.prisma + migrations
```

**Pemetaan page → folder:** tiap `pages/x.vue` punya folder pendamping senama `components/x/` dan/atau `composables/x/`. Komponen/logic yang dipakai >1 page baru naik ke `shared/` (komponen) atau `composables/` root (logic).

### Formatting & Tooling

- **Vanilla JavaScript (ESM)** — semua kode `.js`/`.mjs` + `.vue` (`<script setup>` tanpa `lang="ts"`). TIDAK pakai TypeScript, tidak ada `.ts`/tsconfig, tidak ada typecheck gate.
- **Arrow function default (ES6):** semua fungsi pakai arrow (`const fn = () => {}`, `useX = () => {}`, handler `(event) => {}`). Hindari `function` declaration kecuali memang butuh hoisting/`this` dinamis.
- **Urutan blok SFC:** `<template>` → `<script setup>` → `<style>`. Template SELALU duluan.
- **Styling:** Tailwind utility-first di template. DILARANG `<style scoped>` / blok `<style>` di `.vue`. Token & style global di `tailwind.config` + `assets/css`. Komponen tidak punya CSS lokal.
- **ESLint + Prettier** — kode harus lolos lint sebelum `Done` (ini gate utama pengganti typecheck)
- **Validasi runtime** — karena tanpa type-safety statis, validasi input di boundary (Zod) jadi lebih penting
- **Prettier config:** `tabWidth: 4`, `printWidth: 9999` (tidak wrap by width), `semi: false`, `singleQuote: true`, `trailingComma: all`, `singleAttributePerLine: false`
- **Import order:** built-in → eksternal → internal (`~/`, `@/`) → relatif
- **Alias path (Nuxt 4):** `~/` & `@/` = `app/` (srcDir), BUKAN root project. `server/` & `shared/` ada DI LUAR `app/` → DILARANG `~/server/...` atau `~/shared/...` (resolve ke `app/` → error startup).
    - Server utils → andalkan auto-import Nitro (NO explicit import)
    - Shared schema → alias `#shared`
    - Jangan import eksplisit yang sudah di-auto-import Nuxt (`server/utils/`, `composables/`, `components/`)
- **Bahasa:** komentar & pesan error untuk dev boleh Indonesia; identifier kode tetap English

---

## 2. Maintainability

✅ **DO:**

- **Single Responsibility** — satu fungsi/komponen satu tujuan. Kalau nama fungsi pakai "dan", pecah.
- **DRY** — logic berulang → composable/util. Tapi jangan abstraksi prematur (<3x pakai biarkan).
- **`.vue` = tampilan saja, NOL logic** — state (`ref`/`reactive`), `computed`, `watch`, fetch, transform, business rule SEMUA di composable, lalu di-`return` dan dikonsumsi `.vue`. `.vue` hanya boleh: `const { ... } = useX()`, `defineProps`/`defineEmits`/`defineModel`, template ref DOM, dan binding. Komponen presentasional murni (props-only) tidak punya composable karena memang sudah nol logic.
- **Early return** ketimbang nested if dalam-dalam
- **Self-documenting** — nama jelas > komentar. Komentar hanya untuk "kenapa", bukan "apa".

❌ **DON'T:**

- File komponen > 250 baris (pecah jadi sub-komponen)
- Composable yang handle >1 domain
- Dead code / commented-out code (hapus, ada git)
- Magic number/string (jadikan konstanta atau config)
- Prop drilling > 2 level (pakai provide/inject atau store)
- Business logic / fetch / transform / state inline di `<script setup>` (pindah ke composable)

---

## 3. Performance

✅ **DO:**

- **Lazy load** komponen berat → prefix `Lazy` (`<LazyHeavyChart />`)
- **`useAsyncData`/`useFetch` dengan `transform`** untuk kurangi payload yang dikirim ke client
- **`server: false` / `lazy: true`** untuk data non-kritis (tidak block render)
- **Pagination** untuk list (jangan fetch semua) — pola standar (`page`/`limit`)
- **Index DB** untuk kolom yang difilter/di-join (sesuai pola akses query)
- **`v-memo` / `shallowRef`** untuk list besar yang jarang berubah

❌ **DON'T:**

- Fetch waterfall (fetch berurutan padahal bisa paralel → `Promise.all`)
- `SELECT *` / `findMany` tanpa `select` field yang dibutuhkan
- Komputasi berat di template (pindah ke `computed`)
- Import library besar untuk hal kecil (cek bundle impact)
- Reactive berlebihan pada data statis

---

## 4. Scalability

✅ **DO:**

- **Hindari N+1 query** — pakai Prisma `include`/`select` relasi, bukan loop query
- **Batasi query result** — selalu ada `take`/`limit`, jangan unbounded
- **Stateless server handler** — jangan simpan state di memori proses (pakai DB/cache)
- **Cache yang mahal & jarang berubah** — Nitro `cachedFunction` / route rules
- **Index sesuai pola akses query**, composite index untuk filter+sort

❌ **DON'T:**

- Query di dalam loop (klasik N+1)
- Operasi berat sinkron yang block event loop (pindah ke job/queue kalau perlu)
- Asumsi data kecil selamanya (uji dengan 10x volume ekspektasi)

---

## 5. Security (data sensitif — PII/auth)

✅ **DO:**

- **Validasi SEMUA input** dengan Zod di server handler sebelum diproses
- **Authz per endpoint** — cek login + kepemilikan/role (jangan cuma authn). "User X cuma bisa edit data X."
- **Hash password** dengan bcrypt/argon2 — JANGAN plain/reversible
- **Secrets via `runtimeConfig`/env** — JANGAN hardcode di kode atau commit `.env`
- **Rate limit** endpoint auth & sensitif (cegah brute force)
- **Sanitasi output** — jangan kirim `passwordHash`, token, field internal di response (sesuai shared shape yang disepakati)
- **HTTPS only**, cookie `httpOnly` + `secure` + `sameSite` untuk session
- **Parameterized query** — Prisma sudah aman; kalau raw SQL, JANGAN string concat

❌ **DON'T:**

- Percaya input client (selalu validasi ulang di server)
- Bocorkan detail error internal ke client (stack trace, query) — log internal, balikin pesan generik aman
- Authz hanya di frontend (frontend cuma UX; server yang menegakkan)
- Simpan data sensitif di localStorage
- Log data sensitif (password, token, PII) ke console/log

---

## 6. Testing (pragmatis)

✅ **Wajib di-test:**

- **Business logic kritis** — fungsi yang kalau salah, rugi/bug serius (auth, kalkulasi, validasi)
- **API endpoint** — integration test happy path + error utama (400/401/403)
- **Edge case yang didefinisikan di AC blueprint**

⚪ **Boleh skip:**

- Komponen presentasional murni (cukup verify visual)
- Wrapper tipis / getter-setter sepele

**Konvensi:**

- Test file: `[nama].test.js` / `[nama].spec.js` di samping file-nya atau di `tests/`
- Nama test deskriptif: `it('menolak login dengan password salah')` bukan `it('test1')`
- Arrange-Act-Assert structure

---

## 7. Error Handling

- **Server:** `createError({ statusCode, message })` dengan status code sesuai konvensi REST yang disepakati
- **Validasi:** kembalikan 400 + field error spesifik (bukan generik)
- **Client:** tiap `useFetch` punya handling `error` state (tampil ke user, lihat states design-studio)
- **Pesan informatif** untuk user (bukan "Error 500"), detail teknis ke log
- **Graceful degradation** — kalau satu bagian gagal, jangan crash seluruh halaman

---

## Checklist Cepat (acuan `Done` tiap task)

Tiap task lolos kalau:

```
- [ ] Lolos ESLint + Prettier (vanilla JS, tanpa typecheck)
- [ ] Naming: folder=namespace, file=peran (no dobel-prefix), struktur per-page
- [ ] File .vue/.js/.mjs (bukan .ts)
- [ ] Alias benar: no `~/server` / `~/shared`, server utils auto-import, shared pakai `#shared`
- [ ] SFC order template→script→style, Tailwind only (no <style scoped>)
- [ ] Semua fungsi arrow (ES6), no function declaration tanpa alasan
- [ ] .vue nol logic — semua state/computed/fetch di composable
- [ ] SRP — satu unit satu tujuan, file < 250 baris
- [ ] No hardcode (config/env), no magic number, no dead code
- [ ] Input divalidasi Zod (server), authz dicek (kalau sensitif)
- [ ] No secret di kode, no data sensitif di response/log
- [ ] Query: ada select field + index + no N+1, list ada limit
- [ ] Komponen berat lazy, data non-kritis lazy/transform
- [ ] Error handling lengkap (server + client state)
- [ ] Test untuk logic kritis / endpoint (kalau applicable)
```
