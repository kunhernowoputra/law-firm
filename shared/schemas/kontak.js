import { z } from 'zod'

export const kontakSchema = z.object({
    nama: z.string().trim().min(1),
    email: z.string().trim().email(),
    subjek: z.string().trim().optional().default(''),
    pesan: z.string().trim().min(1),
})
