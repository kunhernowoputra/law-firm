// Data homepage (mock FE). Empty/hidden state digerakkan panjang array (bukan toggle demo).
// TODO: wire backend — ganti mock dengan useFetch/useAsyncData ke endpoint konten publik.
export const useHome = () => {
    const stats = [
        { value: '2004', label: 'Tahun berdiri' },
        { value: '14', label: 'Advokat & konsultan' },
        { value: '6', label: 'Area praktik' },
        { value: '420+', label: 'Mandat terselesaikan' },
    ]

    const highlights = [
        { title: 'Kerahasiaan mutlak', text: 'Sesuai UU Advokat & Kode Etik Advokat Indonesia.' },
        { title: 'Tim senior-led', text: 'Advokat berpengalaman memimpin tiap mandat.' },
        { title: 'Transparan', text: 'Progres kasus & dokumen terpantau real-time.' },
        { title: 'Lintas industri', text: 'Energi, keuangan, teknologi, manufaktur.' },
    ]

    const practices = [
        { no: '01', name: 'Korporat & Komersial', desc: 'Pendirian, tata kelola, kontrak komersial, dan kepatuhan korporasi sehari-hari.' },
        { no: '02', name: 'Merger & Akuisisi', desc: 'Uji tuntas, penataan transaksi, dan negosiasi akuisisi lintas sektor.' },
        { no: '03', name: 'Perpajakan', desc: 'Perencanaan pajak, sengketa, dan pendampingan pemeriksaan.' },
        { no: '04', name: 'Kekayaan Intelektual', desc: 'Pendaftaran merek & paten, lisensi, dan penegakan hak.' },
        { no: '05', name: 'Ketenagakerjaan', desc: 'Hubungan industrial, PKB, PHK, dan penyelesaian perselisihan.' },
        { no: '06', name: 'Litigasi & Arbitrase', desc: 'Sengketa komersial di pengadilan negeri hingga arbitrase institusional.' },
    ]

    const attorneys = [
        { name: 'Arya Wirasena, S.H., LL.M.', initials: 'AW', role: 'Managing Partner', meta: 'Korporat · M&A · 22 thn' },
        { name: 'Laksmi Kusuma, S.H.', initials: 'LK', role: 'Partner — Litigasi', meta: 'Litigasi · Arbitrase · 17 thn' },
        { name: 'Raka Pramudya, S.H., M.H.', initials: 'RP', role: 'Partner — Perpajakan', meta: 'Pajak · Kepatuhan · 15 thn' },
        { name: 'Nadia Firdaus, S.H.', initials: 'NF', role: 'Associate — IP', meta: 'Kekayaan Intelektual · 4 thn', isNew: true },
    ]

    const insights = [
        { category: 'Korporat', title: 'Kewajiban Baru UU Perseroan Terbatas bagi Direksi', excerpt: 'Perubahan tanggung jawab fidusia direksi dan implikasinya terhadap keputusan bisnis strategis perusahaan.', date: '12 Jun 2026', readMinutes: 6 },
        { category: 'Perpajakan', title: 'Sengketa Pajak: Kapan Mengajukan Keberatan vs Banding', excerpt: 'Panduan praktis memilih jalur penyelesaian sengketa pajak yang tepat berdasarkan posisi dan bukti.', date: '28 Mei 2026', readMinutes: 8 },
        { category: 'Ketenagakerjaan', title: 'Menyusun PKB yang Tahan Uji di PHI', excerpt: 'Klausul-klausul kritis dalam Perjanjian Kerja Bersama yang sering menjadi titik sengketa.', date: '15 Mei 2026', readMinutes: 5 },
    ]

    const testimonial = {
        quote: 'Wirasena & Partners menangani akuisisi kami dengan ketenangan yang jarang. Dokumentasi tertib, komunikasi jelas, dan tidak sekalipun kerahasiaan kami terganggu.',
        byRole: 'Direktur Utama',
        byDetail: 'Perusahaan energi terbuka (nama dirahasiakan atas permintaan)',
    }
    const clients = ['Nusantara Energy', 'Bahari Logistik', 'Griya Modal', 'Sentra Digital', 'Karya Manufaktur']

    return { stats, highlights, practices, attorneys, insights, testimonial, clients }
}
