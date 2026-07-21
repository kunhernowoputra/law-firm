<template>
    <div class="auth__card">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--s6)">
            <div>
                <h1 style="font-size: var(--fs-h2)">Portal Klien</h1>
                <p style="color: var(--ink-3); font-size: var(--fs-sm); margin-top: 6px">Masuk untuk melihat progres kasus, dokumen, dan invoice Anda.</p>
            </div>
            <SharedThemeToggle />
        </div>

        <div v-if="authError === 'generic'" class="alert alert--bad" role="alert" style="margin-bottom: var(--s4)">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 8v4M12 16h.01" />
            </svg>
            <span>Email atau kata sandi salah. Silakan coba lagi.</span>
        </div>
        <div v-if="authError === 'blocked'" class="alert alert--warn" role="alert" style="margin-bottom: var(--s4)">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <rect x="4" y="10" width="16" height="10" rx="2" />
                <path d="M8 10V7a4 4 0 018 0v3" />
            </svg>
            <span><b>Akun belum aktif.</b> Aktivasi dikirim ke email Anda saat kasus dibuka. Hubungi admin bila belum menerimanya.</span>
        </div>

        <form novalidate @submit.prevent="submit">
            <div class="field" :class="{ 'field--error': errors.email }">
                <label class="label" for="l-email">Email</label>
                <input id="l-email" v-model="form.email" class="input" type="email" autocomplete="email" placeholder="nama@perusahaan.co.id" @input="clearError('email')" />
                <span class="field-error">Masukkan email yang valid.</span>
            </div>
            <div class="field" :class="{ 'field--error': errors.password }">
                <div style="display: flex; justify-content: space-between; align-items: baseline">
                    <label class="label" for="l-pwd">Kata sandi</label>
                    <a href="#" style="font-size: var(--fs-xs)">Lupa sandi?</a>
                </div>
                <div style="position: relative">
                    <input id="l-pwd" v-model="form.password" class="input" :type="showPassword ? 'text' : 'password'" autocomplete="current-password" style="padding-right: var(--s7)" @input="clearError('password')" />
                    <button type="button" :aria-label="showPassword ? 'Sembunyikan sandi' : 'Tampilkan sandi'" style="position: absolute; right: var(--s3); top: 50%; transform: translateY(-50%); width: 36px; height: 36px; display: grid; place-items: center; color: var(--ink-3)" @click="togglePassword">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7">
                            <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
                            <circle cx="12" cy="12" r="3" />
                        </svg>
                    </button>
                </div>
                <span class="field-error">Kata sandi wajib diisi.</span>
            </div>
            <label style="display: flex; gap: var(--s2); align-items: center; font-size: var(--fs-sm); color: var(--ink-2); margin-top: var(--s4)"> <input v-model="form.remember" type="checkbox" style="width: 18px; height: 18px; accent-color: var(--accent)" /> Ingat perangkat ini </label>
            <button type="submit" class="btn btn--primary btn--block" :class="{ 'is-loading': isSubmitting }" :disabled="isSubmitting" style="margin-top: var(--s5)">
                <span v-if="isSubmitting" class="btn__spinner" aria-hidden="true" />
                <span class="btn__label">{{ isSubmitting ? 'Memeriksa…' : 'Masuk' }}</span>
            </button>
        </form>

        <div style="margin-top: var(--s6); padding-top: var(--s5); border-top: 1px solid var(--line)">
            <p style="font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--ink-4); margin-bottom: var(--s3)">Demo — coba skenario</p>
            <div style="display: flex; gap: var(--s2); flex-wrap: wrap">
                <button class="btn btn--ghost btn--sm" :class="{ 'btn--outline': demoMode === 'ok' }" style="border: 1px solid var(--line)" @click="setDemo('ok')">Login berhasil</button>
                <button class="btn btn--ghost btn--sm" :class="{ 'btn--outline': demoMode === 'wrong' }" style="border: 1px solid var(--line)" @click="setDemo('wrong')">Sandi salah</button>
                <button class="btn btn--ghost btn--sm" :class="{ 'btn--outline': demoMode === 'blocked' }" style="border: 1px solid var(--line)" @click="setDemo('blocked')">Akun belum aktif</button>
            </div>
        </div>

        <p style="text-align: center; color: var(--ink-3); font-size: var(--fs-sm); margin-top: var(--s6)">Belum jadi klien? <NuxtLink to="/konsultasi">Ajukan konsultasi</NuxtLink></p>
    </div>
</template>

<script setup>
    const { form, errors, showPassword, isSubmitting, authError, demoMode, togglePassword, setDemo, clearError, submit } = useLogin()
</script>
