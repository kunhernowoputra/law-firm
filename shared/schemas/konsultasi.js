import { z } from 'zod'

const CATEGORY_VALUES = ['korporat', 'ma', 'pajak', 'ip', 'kerja', 'litigasi', 'lain']

export const konsultasiSchema = z.object({
    kategori: z.enum(CATEGORY_VALUES),
    nama: z.string().trim().min(1),
    perusahaan: z.string().trim().optional().default(''),
    email: z.string().trim().email(),
    telp: z.string().trim().min(1),
    ringkas: z.string().trim().min(1),
    pickedDay: z.string().trim().min(1),
    pickedSlot: z.string().trim().min(1),
    consent: z.literal(true),
})
