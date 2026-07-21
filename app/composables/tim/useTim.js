// Data tim advokat (mock FE). Edge: advokat baru tanpa foto → avatar inisial + badge (di AttorneyCard).
// TODO: wire backend — ganti mock dengan useFetch ke endpoint tim; tambah paginasi (total > shown).
export const useTim = () => {
    const total = 14
    const attorneys = [
        { name: 'Arya Wirasena, S.H., LL.M.', initials: 'AW', role: 'Managing Partner', meta: 'Korporat · M&A · 22 thn' },
        { name: 'Laksmi Kusuma, S.H.', initials: 'LK', role: 'Partner — Litigasi', meta: 'Litigasi · Arbitrase · 17 thn' },
        { name: 'Raka Pramudya, S.H., M.H.', initials: 'RP', role: 'Partner — Perpajakan', meta: 'Pajak · Kepatuhan · 15 thn' },
        { name: 'Sekar Hapsari, S.H., M.Kn.', initials: 'SH', role: 'Partner — Korporat', meta: 'Korporat · Notariat · 14 thn' },
        { name: 'Dimas Saputra, S.H.', initials: 'DS', role: 'Senior Associate', meta: 'Korporat · Kontrak · 9 thn' },
        { name: 'Bagas Wicaksono, S.H.', initials: 'BW', role: 'Senior Associate', meta: 'Litigasi · PHI · 8 thn' },
        { name: 'Maya Anggraini, S.H.', initials: 'MA', role: 'Associate', meta: 'Perpajakan · 6 thn' },
        { name: 'Nadia Firdaus, S.H.', initials: 'NF', role: 'Associate — IP', meta: 'Kekayaan Intelektual · 4 thn', isNew: true },
    ]

    return { attorneys, total }
}
