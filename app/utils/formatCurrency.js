const IDR = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 })

// Format angka ke Rupiah (mis. 15000000 → "Rp15.000.000").
export const formatCurrency = (amount) => IDR.format(amount)
