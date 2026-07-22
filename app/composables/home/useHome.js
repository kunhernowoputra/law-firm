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
        { name: 'Mohamad Ridwan, S.H., M.Kn.', initials: 'MR', role: 'Managing Partner' },
        { name: 'Novan Rizky Martunus, S.H.', initials: 'NM', role: 'Partner' },
        { name: 'Muhammad Fajar Sidik, S.H.', initials: 'MS', role: 'Partner' },
        { name: 'Chairani Azifah, S.H., M.Kn.', initials: 'CA', role: 'Partner' },
    ]

    const insights = [
        { category: 'Korporat', title: 'Kewajiban Baru UU Perseroan Terbatas bagi Direksi', excerpt: 'Perubahan tanggung jawab fidusia direksi dan implikasinya terhadap keputusan bisnis strategis perusahaan.', date: '12 Jun 2026', readMinutes: 6, imageUrl: '/assets/insights/korporat-direksi.jpg' },
        { category: 'Perpajakan', title: 'Sengketa Pajak: Kapan Mengajukan Keberatan vs Banding', excerpt: 'Panduan praktis memilih jalur penyelesaian sengketa pajak yang tepat berdasarkan posisi dan bukti.', date: '28 Mei 2026', readMinutes: 8, imageUrl: '/assets/insights/sengketa-pajak.jpg' },
        { category: 'Ketenagakerjaan', title: 'Menyusun PKB yang Tahan Uji di PHI', excerpt: 'Klausul-klausul kritis dalam Perjanjian Kerja Bersama yang sering menjadi titik sengketa.', date: '15 Mei 2026', readMinutes: 5, imageUrl: '/assets/insights/pkb-ketenagakerjaan.jpg' },
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
        { name: 'Wegasoft Tech Indonesia', logo: '/assets/clients/wegasoft-tech-indonesia.jpeg' },
    ]

    const practiceAreas = {
        keahlian: [
            { name: 'Hukum Pidana', desc: 'Pendampingan tersangka, terdakwa, dan korban sejak tahap penyidikan hingga persidangan pidana umum maupun khusus.' },
            { name: 'Hukum Perdata', desc: 'Penanganan sengketa keperdataan seperti wanprestasi, perbuatan melawan hukum, dan hak kebendaan.' },
            { name: 'Hak Kekayaan Intelektual', desc: 'Pendaftaran, lisensi, dan penegakan hak atas merek, paten, hak cipta, dan desain industri.' },
            { name: 'Hukum Perusahaan dan Bisnis', desc: 'Pendirian badan usaha, tata kelola korporasi, penyusunan kontrak komersial, dan transaksi bisnis.' },
            { name: 'Hukum Tata Usaha Negara', desc: 'Konsultasi dan pendampingan atas keputusan atau tindakan pejabat pemerintahan yang berdampak pada kepentingan klien.' },
            { name: 'Hukum Administrasi Negara', desc: 'Pendampingan kepatuhan terhadap regulasi dan prosedur administrasi pemerintahan.' },
            { name: 'Hukum Tenaga Kerja', desc: 'Penyusunan perjanjian kerja, Perjanjian Kerja Bersama, dan pendampingan perselisihan hubungan industrial.' },
            { name: 'Hukum Lingkungan', desc: 'Pendampingan kepatuhan izin lingkungan serta penanganan isu pencemaran dan kerusakan lingkungan hidup.' },
            { name: 'Hukum Pasar Modal', desc: 'Pendampingan emiten dan pelaku pasar modal dalam kepatuhan regulasi OJK dan transaksi efek.' },
            { name: 'Hukum Perpajakan', desc: 'Konsultasi perencanaan pajak dan pendampingan proses pemeriksaan perpajakan.' },
            { name: 'Penyelesaian Sengketa (ADR)', desc: 'Mediasi, negosiasi, dan fasilitasi penyelesaian sengketa di luar jalur pengadilan.' },
            { name: 'Pendapat Hukum (Legal Opinion)', desc: 'Penyusunan kajian dan opini hukum tertulis sebagai dasar pengambilan keputusan bisnis atau hukum klien.' },
            { name: 'Legal Audit', desc: 'Uji tuntas hukum (due diligence) menyeluruh atas legalitas dan risiko hukum suatu entitas atau transaksi.' },
        ],
        litigasi: [
            { name: 'Pidana', desc: 'Pendampingan proses litigasi pidana dari tingkat penyidikan hingga persidangan di pengadilan negeri.' },
            { name: 'Perdata', desc: 'Penanganan gugatan perdata dari pendaftaran gugatan hingga pelaksanaan putusan di pengadilan negeri.' },
            { name: 'Tata Usaha Negara', desc: 'Pendampingan sengketa administrasi negara di Pengadilan Tata Usaha Negara.' },
            { name: 'Hubungan Industrial', desc: 'Pendampingan perselisihan hubungan industrial di Pengadilan Hubungan Industrial.' },
            { name: 'Perpajakan', desc: 'Pendampingan sengketa perpajakan di Pengadilan Pajak.' },
            { name: 'PKPU/Kepailitan', desc: 'Pendampingan permohonan Penundaan Kewajiban Pembayaran Utang dan kepailitan di Pengadilan Niaga.' },
            { name: 'Sengketa Pilkada/Pemilu', desc: 'Pendampingan sengketa hasil pemilihan kepala daerah dan pemilihan umum.' },
            { name: 'Mahkamah Konstitusi', desc: 'Penanganan perkara pengujian undang-undang dan sengketa kewenangan lembaga negara di Mahkamah Konstitusi.' },
            { name: 'Arbitrase', desc: 'Pendampingan penyelesaian sengketa komersial melalui forum arbitrase nasional maupun internasional.' },
            { name: 'Penetapan Pengadilan', desc: 'Pengurusan permohonan penetapan pengadilan (voluntair) seperti waris, perwalian, dan pengangkatan anak.' },
            { name: 'Banding dan Kasasi', desc: 'Pendampingan upaya hukum banding di pengadilan tinggi dan kasasi di Mahkamah Agung.' },
        ],
        perizinan: [
            { name: 'Pendirian Usaha', desc: 'Pengurusan legalitas pendirian PT, CV, firma, dan bentuk badan usaha lainnya.' },
            { name: 'Pengurusan Perizinan', desc: 'Pengurusan izin usaha dan operasional melalui sistem OSS dan instansi terkait.' },
            { name: 'Perizinan Bidang Khusus', desc: 'Pengurusan izin sektoral dengan persyaratan khusus, seperti izin lingkungan, kesehatan, dan sektor keuangan.' },
        ],
    }

    return { stats, highlights, attorneys, insights, clients, practiceAreas }
}
