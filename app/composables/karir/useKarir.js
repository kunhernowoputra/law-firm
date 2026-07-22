// Data halaman Karier (mock statis FE). Tidak ada lowongan aktif dari sumber data — CTA arahkan ke email inisiatif.
const EMAIL = 'rncolawoffice@gmail.com'
const EMAIL_SUBJECT = 'Lamaran Kerja — Ridwan & Co.'

const VALUES = [
    { title: 'Mentorship senior-led', text: 'Setiap mandat dipimpin advokat senior — Anda belajar langsung dari kasus berjalan, bukan simulasi.' },
    { title: 'Lintas industri', text: 'Menangani klien dari energi, keuangan, teknologi, hingga manufaktur sejak tahun pertama.' },
    { title: 'Jenjang yang jelas', text: 'Jalur karier dari Associate hingga Partner terbuka bagi kinerja dan kontribusi yang konsisten.' },
    { title: 'Budaya kolegial', text: 'Tim kecil yang saling mendukung — bukan hierarki kaku yang membatasi ruang belajar.' },
]

const QUALIFICATIONS = [
    { title: 'Integritas', text: 'Menjunjung Kode Etik Advokat Indonesia tanpa kompromi, termasuk soal kerahasiaan klien.' },
    { title: 'Ketelitian riset & penulisan hukum', text: 'Terbiasa menyusun memorandum, kontrak, dan dokumen litigasi secara presisi.' },
    { title: 'Inisiatif', text: 'Mampu bekerja mandiri di bawah tenggat, sekaligus terbuka menerima bimbingan.' },
]

const STEPS = [
    { title: 'Kirim CV & portofolio', text: 'Lampirkan CV, transkrip/ijazah, dan contoh tulisan hukum (jika ada) via email.' },
    { title: 'Seleksi berkas', text: 'Tim kami meninjau kesesuaian latar belakang dengan kebutuhan yang berjalan.' },
    { title: 'Wawancara', text: 'Diskusi dua arah — kompetensi teknis dan kecocokan dengan cara kerja tim.' },
    { title: 'Keputusan & onboarding', text: 'Kandidat terpilih akan dihubungi langsung untuk proses selanjutnya.' },
]

export const useKarir = () => {
    const mailtoHref = computed(() => `mailto:${EMAIL}?subject=${encodeURIComponent(EMAIL_SUBJECT)}`)

    return { values: VALUES, qualifications: QUALIFICATIONS, steps: STEPS, email: EMAIL, mailtoHref }
}
