// Data tim advokat (mock FE). Edge: advokat baru tanpa foto → avatar inisial + badge (di AttorneyCard).
// TODO: wire backend — ganti mock dengan useFetch ke endpoint tim; tambah paginasi (total > shown).
export const useTim = () => {
    const total = 7
    const attorneys = [
        { name: 'Mohamad Ridwan, S.H., M.Kn.', initials: 'MR', role: 'Managing Partner', photoUrl: '/assets/advocat/ridwan.webp' },
        { name: 'Novan Rizky Martunus, S.H.', initials: 'NM', role: 'Partner', photoUrl: '/assets/advocat/novan.webp' },
        { name: 'Muhammad Fajar Sidik, S.H.', initials: 'MS', role: 'Partner', photoUrl: '/assets/advocat/muhammad.webp' },
        { name: 'Chairani Azifah, S.H., M.Kn.', initials: 'CA', role: 'Partner', photoUrl: '/assets/advocat/chairani.webp' },
        { name: 'Ratna Dilah', initials: 'RD', role: 'Manager Finance', photoUrl: '/assets/advocat/ratna.webp' },
        { name: 'Muhammad Qeis Aslam', initials: 'MA', role: 'Associate', photoUrl: '/assets/advocat/aslam.webp' },
        { name: 'Abu Ishaq Ibrahim', initials: 'AI', role: 'Associate', photoUrl: '/assets/advocat/abu.webp' },
    ]

    return { attorneys, total }
}
