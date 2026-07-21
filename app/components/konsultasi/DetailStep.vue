<template>
    <fieldset v-show="step === 2" class="step" style="border: 0; padding: 0; margin: 0">
        <div class="alert alert--ok" style="margin-bottom: var(--s5)">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20 6L9 17l-5-5" /></svg>
            <span
                >Konsultasi Anda akan diarahkan ke tim <b>{{ routeName }}</b
                >.</span
            >
        </div>
        <div class="form-row">
            <div class="field" :class="{ 'field--error': errors.nama }">
                <label class="label" for="k-nama">Nama lengkap <span class="req">*</span></label>
                <input id="k-nama" v-model="form.nama" class="input" autocomplete="name" @input="clearError('nama')" />
                <span class="field-error">Nama wajib diisi.</span>
            </div>
            <div class="field">
                <label class="label" for="k-perusahaan">Perusahaan / Instansi</label>
                <input id="k-perusahaan" v-model="form.perusahaan" class="input" autocomplete="organization" />
            </div>
        </div>
        <div class="form-row">
            <div class="field" :class="{ 'field--error': errors.email }">
                <label class="label" for="k-email">Email <span class="req">*</span></label>
                <input id="k-email" v-model="form.email" class="input" type="email" autocomplete="email" @input="clearError('email')" />
                <span class="field-error">Masukkan email yang valid.</span>
            </div>
            <div class="field" :class="{ 'field--error': errors.telp }">
                <label class="label" for="k-telp">No. telepon <span class="req">*</span></label>
                <input id="k-telp" v-model="form.telp" class="input" type="tel" autocomplete="tel" placeholder="+62…" @input="clearError('telp')" />
                <span class="field-error">Nomor telepon wajib diisi.</span>
            </div>
        </div>
        <div class="field" :class="{ 'field--error': errors.ringkas }">
            <label class="label" for="k-ringkas">Ringkasan singkat masalah <span class="req">*</span></label>
            <textarea id="k-ringkas" v-model="form.ringkas" class="textarea" placeholder="Ceritakan garis besar situasi Anda. Jangan sertakan dokumen rahasia pada tahap ini." @input="clearError('ringkas')" />
            <span class="hint">Informasi ini bersifat rahasia dan tidak membentuk hubungan advokat–klien.</span>
            <span class="field-error">Mohon jelaskan singkat masalah Anda.</span>
        </div>
        <div style="display: flex; justify-content: space-between; margin-top: var(--s6)">
            <button type="button" class="btn btn--ghost" @click="prev">Kembali</button>
            <button type="button" class="btn btn--primary" @click="next">Lanjut ke Jadwal</button>
        </div>
    </fieldset>
</template>

<script setup>
    const { step, form, errors, routeName, clearError, prev, next } = useKonsultasi()
</script>
