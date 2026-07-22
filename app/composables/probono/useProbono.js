// Data + WA CTA untuk halaman Pro Bono (mock statis FE — lihat tech-handoff/probono/BE-SPEC.md: no persistence, no endpoint).
const WA_NUMBER = '6285691248221'
const WA_MESSAGE = 'Halo Ridwan & Co., saya ingin bertanya tentang program bantuan hukum cuma-cuma (pro bono).'

const PROGRAM = {
    title: 'Bantuan Hukum Cuma-Cuma',
    desc: 'Sesuai amanat UU Advokat, Ridwan & Co. menyediakan pendampingan hukum tanpa biaya bagi masyarakat yang tidak mampu secara ekonomi — dari konsultasi awal hingga pendampingan proses hukum, dengan standar kerahasiaan dan profesionalisme yang sama seperti klien berbayar.',
}

const ELIGIBILITY = [
    { title: 'Tidak mampu secara ekonomi', text: 'Dibuktikan dengan Surat Keterangan Tidak Mampu (SKTM) dari kelurahan setempat.' },
    { title: 'Ranah perkara sesuai cakupan', text: 'Permasalahan hukum yang diajukan merupakan wilayah pidana, perdata, atau tata usaha negara.' },
    { title: 'Kelengkapan dokumen', text: 'Bersedia melengkapi dokumen pendukung yang diminta tim advokat selama proses berjalan.' },
]

const AREAS = [
    { title: 'Pidana', text: 'Pendampingan bagi tersangka/terdakwa tidak mampu.' },
    { title: 'Perdata Keluarga & Waris', text: 'Sengketa keluarga dan pembagian warisan.' },
    { title: 'Ketenagakerjaan', text: 'Perselisihan hubungan kerja bagi pekerja terdampak PHK.' },
    { title: 'Hak Sipil & Administrasi', text: 'Advokasi hak sipil dan administrasi kependudukan.' },
]

const TILES = [
    { label: 'Kasus pro bono ditangani', value: '40+', sub: '/ tahun' },
    { label: 'Jam pendampingan cuma-cuma', value: '600+', sub: 'jam / tahun' },
    { label: 'Advokat terlibat program', value: '5', sub: 'dari 7 tim' },
]

export const useProbono = () => {
    const whatsappHref = computed(() => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`)

    return { program: PROGRAM, eligibility: ELIGIBILITY, areas: AREAS, tiles: TILES, whatsappHref }
}
