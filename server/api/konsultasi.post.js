import { konsultasiSchema } from '#shared/schemas/konsultasi.js'

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const result = konsultasiSchema.safeParse(body)
    if (!result.success) throw createError({ statusCode: 422, statusMessage: 'Data form tidak valid' })

    const { kategori, nama, perusahaan, email, telp, ringkas, pickedDay, pickedSlot } = result.data
    await sendNotifikasi({
        subjek: `Booking konsultasi baru — ${nama}`,
        replyTo: email,
        html: buildEmailHtml({
            heading: 'Booking Konsultasi Baru',
            fields: [
                { label: 'Nama', value: nama },
                { label: 'Perusahaan', value: perusahaan || '-' },
                { label: 'Email', value: email },
                { label: 'Telepon', value: telp },
                { label: 'Kategori', value: kategori },
                { label: 'Ringkasan', value: ringkas.replace(/\n/g, '<br>') },
                { label: 'Jadwal', value: `${pickedDay} · ${pickedSlot} WIB` },
            ],
        }),
    })

    return { success: true }
})
