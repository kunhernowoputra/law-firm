<template>
    <div class="card reveal" data-delay="1">
        <h2 style="font-size: var(--fs-h3)">Kirim pesan</h2>
        <p style="color: var(--ink-3); font-size: var(--fs-sm); margin-top: var(--s2); margin-bottom: var(--s5)">Untuk penjadwalan konsultasi berbayar, gunakan <NuxtLink to="/konsultasi">form konsultasi</NuxtLink>.</p>
        <form novalidate @submit.prevent="submit">
            <div class="field" :class="{ 'field--error': errors.nama }">
                <label class="label" for="k-nama">Nama <span class="req">*</span></label>
                <input id="k-nama" v-model="form.nama" class="input" autocomplete="name" @input="clearError('nama')" />
                <span class="field-error">Nama wajib diisi.</span>
            </div>
            <div class="field" :class="{ 'field--error': errors.email }">
                <label class="label" for="k-email">Email <span class="req">*</span></label>
                <input id="k-email" v-model="form.email" class="input" type="email" autocomplete="email" @blur="validateEmailBlur" @input="clearError('email')" />
                <span class="field-error">Masukkan email yang valid.</span>
            </div>
            <div class="field">
                <label class="label" for="k-subjek">Subjek</label>
                <input id="k-subjek" v-model="form.subjek" class="input" />
            </div>
            <div class="field" :class="{ 'field--error': errors.pesan }">
                <label class="label" for="k-pesan">Pesan <span class="req">*</span></label>
                <textarea id="k-pesan" v-model="form.pesan" class="textarea" placeholder="Tuliskan pesan Anda…" @input="clearError('pesan')" />
                <span class="field-error">Pesan wajib diisi.</span>
            </div>
            <button type="submit" class="btn btn--primary btn--block" :class="{ 'is-loading': isSubmitting }" :disabled="isSubmitting" style="margin-top: var(--s5)">
                <span v-if="isSubmitting" class="btn__spinner" aria-hidden="true" />
                <span class="btn__label">{{ isSubmitting ? 'Memproses…' : 'Kirim Pesan' }}</span>
            </button>
            <p class="hint" style="text-align: center; margin-top: var(--s4)">Dengan mengirim, Anda menyetujui bahwa informasi ini bersifat umum dan bukan nasihat hukum.</p>
        </form>
    </div>
</template>

<script setup>
    const { form, errors, isSubmitting, clearError, validateEmailBlur, submit } = useKontak()
</script>
