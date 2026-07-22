<template>
    <div class="section wrap">
        <div class="reveal" style="margin-bottom: var(--s7)">
            <p class="eyebrow">Kontak &amp; Konsultan</p>
            <h1 style="font-size: var(--fs-h1); margin-top: var(--s3); max-width: 28ch">Hubungi Kami untuk Konsultasi dan Pendampingan Hukum Terstruktur.</h1>
            <p class="prose" style="color: var(--ink-3); margin-top: var(--s4); max-width: 60ch">Tim Advokat dan Konsultan Hukum kami siap memberikan solusi serta kepastian hukum yang tepat bagi kebutuhan bisnis maupun instansi Anda.</p>
        </div>

        <div class="grid grid--2" style="gap: var(--s8); align-items: start">
            <div class="reveal">
                <KontakInfo />
            </div>
            <KontakForm />
        </div>
    </div>
</template>

<script setup>
    definePageMeta({ footerVariant: 'slim' })

    useHead({
        title: 'Kontak — Ridwan & Co.',
        meta: [{ name: 'description', content: 'Alamat, WhatsApp, email, dan form kontak Ridwan & Co..' }],
    })
</script>
