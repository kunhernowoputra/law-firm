const FMT = new Intl.DateTimeFormat('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })

// Format tanggal ID ringkas (mis. Date → "12 Jun 2026"). Terima Date atau string/ISO.
export const formatDate = (input) => {
    const date = input instanceof Date ? input : new Date(input)
    return Number.isNaN(date.getTime()) ? '' : FMT.format(date)
}
