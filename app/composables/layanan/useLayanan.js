// Data halaman Layanan (mock FE). Rincian per kategori: keahlian, litigasi, perizinan.
// TODO: wire backend — ganti mock dengan useFetch/useAsyncData ke endpoint konten publik.
export const useLayanan = () => {
    const practiceAreas = {
        keahlian: [
            { name: 'Hukum Pidana', desc: 'Pendampingan tersangka, terdakwa, dan korban sejak tahap penyidikan hingga persidangan pidana umum maupun khusus.', imageUrl: '/assets/praktik/hukum-pidana.jpg' },
            { name: 'Hukum Perdata', desc: 'Penanganan sengketa keperdataan seperti wanprestasi, perbuatan melawan hukum, dan hak kebendaan.', imageUrl: '/assets/praktik/hukum-perdata.jpg' },
            { name: 'Hak Kekayaan Intelektual', desc: 'Pendaftaran, lisensi, dan penegakan hak atas merek, paten, hak cipta, dan desain industri.', imageUrl: '/assets/praktik/hki.jpg' },
            { name: 'Hukum Perusahaan dan Bisnis', desc: 'Pendirian badan usaha, tata kelola korporasi, penyusunan kontrak komersial, dan transaksi bisnis.', imageUrl: '/assets/praktik/perusahaan-bisnis.jpg' },
            { name: 'Hukum Tata Usaha Negara', desc: 'Konsultasi dan pendampingan atas keputusan atau tindakan pejabat pemerintahan yang berdampak pada kepentingan klien.', imageUrl: '/assets/praktik/tata-usaha-negara.jpg' },
            { name: 'Hukum Administrasi Negara', desc: 'Pendampingan kepatuhan terhadap regulasi dan prosedur administrasi pemerintahan.', imageUrl: '/assets/praktik/administrasi-negara.jpg' },
            { name: 'Hukum Tenaga Kerja', desc: 'Penyusunan perjanjian kerja, Perjanjian Kerja Bersama, dan pendampingan perselisihan hubungan industrial.', imageUrl: '/assets/praktik/tenaga-kerja.jpg' },
            { name: 'Hukum Lingkungan', desc: 'Pendampingan kepatuhan izin lingkungan serta penanganan isu pencemaran dan kerusakan lingkungan hidup.', imageUrl: '/assets/praktik/lingkungan.jpg' },
            { name: 'Hukum Pasar Modal', desc: 'Pendampingan emiten dan pelaku pasar modal dalam kepatuhan regulasi OJK dan transaksi efek.', imageUrl: '/assets/praktik/pasar-modal.jpg' },
            { name: 'Hukum Perpajakan', desc: 'Konsultasi perencanaan pajak dan pendampingan proses pemeriksaan perpajakan.', imageUrl: '/assets/praktik/perpajakan.jpg' },
            { name: 'Penyelesaian Sengketa (ADR)', desc: 'Mediasi, negosiasi, dan fasilitasi penyelesaian sengketa di luar jalur pengadilan.', imageUrl: '/assets/praktik/adr.jpg' },
            { name: 'Pendapat Hukum (Legal Opinion)', desc: 'Penyusunan kajian dan opini hukum tertulis sebagai dasar pengambilan keputusan bisnis atau hukum klien.', imageUrl: '/assets/praktik/legal-opinion.jpg' },
            { name: 'Legal Audit', desc: 'Uji tuntas hukum (due diligence) menyeluruh atas legalitas dan risiko hukum suatu entitas atau transaksi.', imageUrl: '/assets/praktik/legal-audit.jpg' },
        ],
        litigasi: [
            { name: 'Pidana', desc: 'Pendampingan proses litigasi pidana dari tingkat penyidikan hingga persidangan di pengadilan negeri.', imageUrl: '/assets/praktik/hukum-pidana.jpg' },
            { name: 'Perdata', desc: 'Penanganan gugatan perdata dari pendaftaran gugatan hingga pelaksanaan putusan di pengadilan negeri.', imageUrl: '/assets/praktik/hukum-perdata.jpg' },
            { name: 'Tata Usaha Negara', desc: 'Pendampingan sengketa administrasi negara di Pengadilan Tata Usaha Negara.', imageUrl: '/assets/praktik/sengketa-tun.jpg' },
            { name: 'Hubungan Industrial', desc: 'Pendampingan perselisihan hubungan industrial di Pengadilan Hubungan Industrial.', imageUrl: '/assets/praktik/hubungan-industrial.jpg' },
            { name: 'Perpajakan', desc: 'Pendampingan sengketa perpajakan di Pengadilan Pajak.', imageUrl: '/assets/praktik/perpajakan.jpg' },
            { name: 'PKPU/Kepailitan', desc: 'Pendampingan permohonan Penundaan Kewajiban Pembayaran Utang dan kepailitan di Pengadilan Niaga.', imageUrl: '/assets/praktik/pkpu-kepailitan.jpg' },
            { name: 'Sengketa Pilkada/Pemilu', desc: 'Pendampingan sengketa hasil pemilihan kepala daerah dan pemilihan umum.', imageUrl: '/assets/praktik/pilkada-pemilu.jpg' },
            { name: 'Mahkamah Konstitusi', desc: 'Penanganan perkara pengujian undang-undang dan sengketa kewenangan lembaga negara di Mahkamah Konstitusi.', imageUrl: '/assets/praktik/mahkamah-konstitusi.jpg' },
            { name: 'Arbitrase', desc: 'Pendampingan penyelesaian sengketa komersial melalui forum arbitrase nasional maupun internasional.', imageUrl: '/assets/praktik/arbitrase.jpg' },
            { name: 'Penetapan Pengadilan', desc: 'Pengurusan permohonan penetapan pengadilan (voluntair) seperti waris, perwalian, dan pengangkatan anak.', imageUrl: '/assets/praktik/penetapan-pengadilan.jpg' },
            { name: 'Banding dan Kasasi', desc: 'Pendampingan upaya hukum banding di pengadilan tinggi dan kasasi di Mahkamah Agung.', imageUrl: '/assets/praktik/banding-kasasi.jpg' },
        ],
        perizinan: [
            { name: 'Pendirian Usaha', desc: 'Pengurusan legalitas pendirian PT, CV, firma, dan bentuk badan usaha lainnya.', imageUrl: '/assets/praktik/pendirian-usaha.jpg' },
            { name: 'Pengurusan Perizinan', desc: 'Pengurusan izin usaha dan operasional melalui sistem OSS dan instansi terkait.', imageUrl: '/assets/praktik/pengurusan-perizinan.jpg' },
            { name: 'Perizinan Bidang Khusus', desc: 'Pengurusan izin sektoral dengan persyaratan khusus, seperti izin lingkungan, kesehatan, dan sektor keuangan.', imageUrl: '/assets/praktik/administrasi-negara.jpg' },
            { name: 'Layanan Notaris & PPAT', desc: 'Kami membantu individu maupun badan usaha dalam memastikan setiap transaksi dan tindakan hukum dilakukan secara sah, tertib administrasi, serta memberikan kepastian hukum.', imageUrl: '/assets/praktik/notaris-ppat.jpg' },
        ],
    }

    return { practiceAreas }
}
