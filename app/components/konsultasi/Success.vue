<template>
    <div class="card" style="text-align: center; padding: var(--s8)">
        <div class="state__icon" style="background: var(--ok-soft); color: var(--ok)">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20 6L9 17l-5-5" /></svg>
        </div>
        <h2 style="font-size: var(--fs-h2)">Konsultasi terjadwal.</h2>
        <p style="color: var(--ink-3); margin-top: var(--s3); max-width: 44ch; margin-inline: auto">
            Kami telah menerima permintaan Anda untuk tim <b>{{ routeName }}</b> pada <b>{{ scheduledWhen }}</b
            >. Konfirmasi telah dikirim ke email Anda.
        </p>
        <div style="display: flex; gap: var(--s3); justify-content: center; margin-top: var(--s6); flex-wrap: wrap">
            <NuxtLink class="btn btn--primary" to="/">Kembali ke Beranda</NuxtLink>
            <NuxtLink class="btn btn--outline" to="/portal/login">Masuk Portal Klien</NuxtLink>
        </div>
    </div>
</template>

<script setup>
    const { routeName, scheduledWhen } = useKonsultasi()
</script>
