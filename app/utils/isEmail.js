// Validasi email sederhana untuk boundary form FE (paritas prototipe).
// Catatan: validasi otoritatif tetap di server (Zod) saat wiring backend.
export const isEmail = (value) => /.+@.+\..+/.test(value)
