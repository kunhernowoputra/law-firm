// Data homepage (mock FE). Empty/hidden state digerakkan panjang array (bukan toggle demo).
// TODO: wire backend — ganti mock dengan useFetch/useAsyncData ke endpoint konten publik.
export const useHome = () => {
    const stats = [
        { value: '2025', label: 'Tahun berdiri' },
        { value: '7', label: 'Advokat & konsultan' },
        { value: '6', label: 'Area praktik utama' },
        { value: '81+', label: 'Perkara terselesaikan' },
    ]

    const highlights = [
        { title: 'Kerahasiaan mutlak', text: 'Sesuai UU Advokat & Kode Etik Advokat Indonesia.' },
        { title: 'Tim senior-led', text: 'Advokat berpengalaman memimpin tiap mandat.' },
        { title: 'Transparan', text: 'Progres kasus & dokumen terpantau real-time.' },
        { title: 'Lintas industri', text: 'Energi, keuangan, teknologi, manufaktur.' },
    ]

    const attorneys = [
        { name: 'Mohamad Ridwan, S.H., M.Kn.', initials: 'MR', role: 'Managing Partner', photoUrl: '/assets/advocat/ridwan.jpeg' },
        { name: 'Ratna Dilah', initials: 'RD', role: 'Manager Finance', photoUrl: '/assets/advocat/ratna.jpeg' },
        { name: 'Muhammad Fajar Sidik, S.H.', initials: 'MS', role: 'Partner', photoUrl: '/assets/advocat/muhammad.jpeg' },
        { name: 'Chairani Azifah, S.H., M.Kn.', initials: 'CA', role: 'Partner', photoUrl: '/assets/advocat/chairani.jpeg' },
    ]

    const insights = [
        { category: 'Korporat', title: 'Kewajiban Baru UU Perseroan Terbatas bagi Direksi', excerpt: 'Perubahan tanggung jawab fidusia direksi dan implikasinya terhadap keputusan bisnis strategis perusahaan.', imageUrl: '/assets/insights/korporat-direksi.jpg' },
        { category: 'Perpajakan', title: 'Sengketa Pajak: Kapan Mengajukan Keberatan vs Banding', excerpt: 'Panduan praktis memilih jalur penyelesaian sengketa pajak yang tepat berdasarkan posisi dan bukti.', imageUrl: '/assets/insights/sengketa-pajak.jpg' },
        { category: 'Ketenagakerjaan', title: 'Menyusun PKB yang Tahan Uji di PHI', excerpt: 'Klausul-klausul kritis dalam Perjanjian Kerja Bersama yang sering menjadi titik sengketa.', imageUrl: '/assets/insights/pkb-ketenagakerjaan.jpg' },
    ]

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
        { name: 'Rama Citra Nada', logo: '/assets/clients/rama-citra-nada.jpeg' },
        { name: 'Wegasoft Tech Indonesia', logo: '/assets/clients/wegasoft-tech-indonesia.jpeg' },
    ]

    return { stats, highlights, attorneys, insights, clients }
}
