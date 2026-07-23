import { Resend } from 'resend'

const TUJUAN = 'rncolawoffice@gmail.com'
// Domain ridwanco.com belum dibeli — pakai domain testing Resend dulu.
// Setelah domain dibeli & diverifikasi di dashboard Resend, ganti ke: Ridwan & Co. Law Office <noreply@ridwanco.com>
const PENGIRIM = 'Ridwan & Co. Law Office <onboarding@resend.dev>'

export const sendNotifikasi = async ({ subjek, html, replyTo }) => {
    const { resendApiKey } = useRuntimeConfig()
    const resend = new Resend(resendApiKey)

    const { error } = await resend.emails.send({
        from: PENGIRIM,
        to: TUJUAN,
        replyTo,
        subject: subjek,
        html,
    })

    if (error) throw createError({ statusCode: 502, statusMessage: 'Gagal mengirim notifikasi email' })
}
