import { kontakSchema } from '#shared/schemas/kontak.js'

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const result = kontakSchema.safeParse(body)
    if (!result.success) throw createError({ statusCode: 422, statusMessage: 'Data form tidak valid' })

    const { nama, email, subjek, pesan } = result.data
    await sendNotifikasi({
        subjek: `Pesan baru dari website — ${nama}`,
        replyTo: email,
        html: buildEmailHtml({
            heading: 'Pesan Baru dari Form Kontak',
            fields: [
                { label: 'Nama', value: nama },
                { label: 'Email', value: email },
                { label: 'Subjek', value: subjek || '-' },
                { label: 'Pesan', value: pesan.replace(/\n/g, '<br>') },
            ],
        }),
    })

    return { success: true }
})
