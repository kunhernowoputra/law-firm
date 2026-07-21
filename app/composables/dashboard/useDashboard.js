// Data dashboard portal (mock FE). Empty state = cases kosong (v-if length). Authz kepemilikan di server.
// TODO: wire backend — ganti mock dengan useFetch ke endpoint kasus milik klien (authz ketat).
export const useDashboard = () => {
    const { client } = useClientSession()

    const stats = [
        { label: 'Kasus aktif', value: '2' },
        { label: 'Dokumen', value: '18' },
        { label: 'Invoice belum bayar', value: '1', tone: 'warn' },
        { label: 'Konsultasi mendatang', value: '1', sub: '· 25 Jul' },
    ]

    const mainCase = {
        title: 'Akuisisi PT Cahaya Baru',
        no: 'WP-2026-0142',
        area: 'Merger & Akuisisi',
        status: { label: 'Berjalan', tone: 'accent' },
        timeline: [
            { date: '02 Jun 2026', title: 'Penunjukan & Kesepakatan Kuasa', desc: 'Surat kuasa ditandatangani, tim ditugaskan.', state: 'done' },
            { date: '18 Jun 2026', title: 'Uji Tuntas Hukum (Due Diligence)', desc: 'Review dokumen legal target selesai; temuan dilaporkan.', state: 'done' },
            { date: 'Sedang berjalan · est. 30 Jul', title: 'Negosiasi & Penyusunan SPA', desc: 'Draf Sale & Purchase Agreement dalam pembahasan para pihak.', state: 'current' },
            { date: 'Mendatang', title: 'Penandatanganan & Closing', desc: 'Eksekusi transaksi dan pemenuhan condition precedent.', state: 'upcoming' },
        ],
        advokat: [
            { initials: 'AW', name: 'Arya Wirasena', role: 'Managing Partner · M&A' },
            { initials: 'DS', name: 'Dimas Saputra', role: 'Senior Associate' },
        ],
    }

    const secondCase = { title: 'Sengketa Kontrak Vendor', no: 'WP-2026-0138', area: 'Litigasi', status: { label: 'Menunggu', tone: 'warn' } }

    const cases = [mainCase, secondCase]

    return { client, stats, cases, mainCase, secondCase }
}
