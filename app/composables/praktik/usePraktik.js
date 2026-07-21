// Data area praktik (mock FE). Edge: area tanpa advokat (unassigned) tetap tampil + CTA konsultasi umum.
// TODO: wire backend — ganti mock dengan useFetch ke endpoint area praktik.
export const usePraktik = () => {
    const areas = [
        {
            no: '01',
            name: 'Korporat & Komersial',
            route: 'korporat',
            desc: 'Pendampingan hukum korporasi menyeluruh: pendirian dan restrukturisasi entitas, tata kelola perusahaan, penyusunan dan negosiasi kontrak komersial, hingga kepatuhan regulasi lintas sektor.',
            tags: ['Tata Kelola', 'Kontrak Komersial', 'Kepatuhan', 'Restrukturisasi'],
            assignees: [
                { initials: 'AW', name: 'Arya Wirasena', role: 'Managing Partner' },
                { initials: 'DS', name: 'Dimas Saputra', role: 'Senior Associate' },
            ],
        },
        {
            no: '02',
            name: 'Merger & Akuisisi',
            route: 'ma',
            desc: 'Uji tuntas hukum (legal due diligence), penataan struktur transaksi, penyusunan perjanjian jual beli saham/aset, dan negosiasi hingga penutupan transaksi.',
            tags: ['Due Diligence', 'SPA', 'Joint Venture', 'Divestasi'],
            assignees: [{ initials: 'AW', name: 'Arya Wirasena', role: 'Managing Partner' }],
        },
        {
            no: '03',
            name: 'Perpajakan',
            route: 'pajak',
            desc: 'Perencanaan pajak yang efisien dan patuh, pendampingan pemeriksaan, keberatan, hingga banding di Pengadilan Pajak.',
            tags: ['Tax Planning', 'Sengketa Pajak', 'Transfer Pricing'],
            assignees: [{ initials: 'RP', name: 'Raka Pramudya', role: 'Partner — Perpajakan' }],
        },
        {
            no: '04',
            name: 'Kekayaan Intelektual',
            route: 'ip',
            desc: 'Pendaftaran dan pengelolaan merek, paten, hak cipta, perjanjian lisensi, serta penegakan hak terhadap pelanggaran.',
            tags: ['Merek', 'Paten', 'Lisensi', 'Penegakan'],
            assignees: [{ initials: 'NF', name: 'Nadia Firdaus', role: 'Associate — IP' }],
        },
        {
            no: '05',
            name: 'Ketenagakerjaan',
            route: 'kerja',
            desc: 'Hubungan industrial, penyusunan Perjanjian Kerja Bersama, penanganan PHK, dan penyelesaian perselisihan di Pengadilan Hubungan Industrial.',
            tags: ['PKB', 'PHK', 'PHI'],
            assignees: [],
        },
        {
            no: '06',
            name: 'Litigasi & Arbitrase',
            route: 'litigasi',
            desc: 'Perwakilan dalam sengketa komersial di pengadilan negeri, kasasi, hingga arbitrase institusional (BANI) dan internasional.',
            tags: ['Sengketa Komersial', 'Arbitrase', 'Eksekusi'],
            assignees: [{ initials: 'LK', name: 'Laksmi Kusuma', role: 'Partner — Litigasi' }],
        },
    ]

    return { areas }
}
