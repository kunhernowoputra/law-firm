// Sesi klien aktif (mock FE). TODO: wire backend — ganti dengan sesi auth nyata (useUserSession).
export const useClientSession = () => {
    const client = { name: 'Budi Prasetyo', company: 'PT Nusantara Energy', initials: 'BP' }
    return { client }
}
