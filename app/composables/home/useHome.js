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
        { name: 'Arya Ridwan, S.H., LL.M.', initials: 'AW', role: 'Managing Partner', meta: 'Korporat · M&A · 22 thn', photoUrl: '/assets/team/arya-ridwan.jpg' },
        { name: 'Laksmi Kusuma, S.H.', initials: 'LK', role: 'Partner — Litigasi', meta: 'Litigasi · Arbitrase · 17 thn', photoUrl: '/assets/team/laksmi-kusuma.jpg' },
        { name: 'Raka Pramudya, S.H., M.H.', initials: 'RP', role: 'Partner — Perpajakan', meta: 'Pajak · Kepatuhan · 15 thn', photoUrl: '/assets/team/raka-pramudya.jpg' },
        { name: 'Nadia Firdaus, S.H.', initials: 'NF', role: 'Associate — IP', meta: 'Kekayaan Intelektual · 4 thn', isNew: true, photoUrl: '/assets/team/nadia-firdaus.jpg' },
    ]

    const insights = [
        { category: 'Korporat', title: 'Kewajiban Baru UU Perseroan Terbatas bagi Direksi', excerpt: 'Perubahan tanggung jawab fidusia direksi dan implikasinya terhadap keputusan bisnis strategis perusahaan.', date: '12 Jun 2026', readMinutes: 6, imageUrl: '/assets/insights/korporat-direksi.jpg' },
        { category: 'Perpajakan', title: 'Sengketa Pajak: Kapan Mengajukan Keberatan vs Banding', excerpt: 'Panduan praktis memilih jalur penyelesaian sengketa pajak yang tepat berdasarkan posisi dan bukti.', date: '28 Mei 2026', readMinutes: 8, imageUrl: '/assets/insights/sengketa-pajak.jpg' },
        { category: 'Ketenagakerjaan', title: 'Menyusun PKB yang Tahan Uji di PHI', excerpt: 'Klausul-klausul kritis dalam Perjanjian Kerja Bersama yang sering menjadi titik sengketa.', date: '15 Mei 2026', readMinutes: 5, imageUrl: '/assets/insights/pkb-ketenagakerjaan.jpg' },
    ]

    const testimonial = {
        quote: 'Ridwan & Co. menangani akuisisi kami dengan ketenangan yang jarang. Dokumentasi tertib, komunikasi jelas, dan tidak sekalipun kerahasiaan kami terganggu.',
        byRole: 'Direktur Utama',
        byDetail: 'Perusahaan energi terbuka (nama dirahasiakan atas permintaan)',
    }
    const clients = [
        { name: 'Alhasanah Berkah Bersama', logo: '/assets/clients/alhasanah-berkah-bersama.jpeg' },
        { name: 'Delta Flow Indonesia', logo: '/assets/clients/delta-flow-indonesia.jpeg' },
        { name: 'Horus Payment Solutions', logo: '/assets/clients/horus-payment-solutions.jpeg' },
        { name: 'Integrasi Sistem Finansial', logo: '/assets/clients/integrasi-sistem-finansial.jpeg' },
        { name: 'Mobilink Synergy Indonesia', logo: '/assets/clients/mobilink-synergy-indonesia.jpeg' },
        { name: 'Nextrix Digital Nusantara', logo: '/assets/clients/nextrix-digital-nusantara.jpeg' },
        { name: 'Pasti Ada Solusi', logo: '/assets/clients/pasti-ada-solusi.jpeg' },
        { name: 'Prima Cipta Tata Abadi', logo: '/assets/clients/prima-cipta-tata-abadi.jpeg' },
        { name: 'Pule Gading', logo: '/assets/clients/pule-gading.jpeg' },
        { name: 'Wegasoft Tech Indonesia', logo: '/assets/clients/wegasoft-tech-indonesia.jpeg' },
    ]

    return { stats, highlights, practices, attorneys, insights, testimonial, clients }
}
