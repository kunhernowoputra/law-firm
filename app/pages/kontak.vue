<template>
    <div class="section wrap">
        <div class="reveal" style="margin-bottom: var(--s7)">
            <p class="eyebrow">Kontak</p>
            <h1 style="font-size: var(--fs-h1); margin-top: var(--s3); max-width: 20ch">Mari bicara. Dengan tenang dan rahasia.</h1>
        </div>

        <div class="grid grid--2" style="gap: var(--s8); align-items: start">
            <div class="reveal">
                <KontakInfo />
                <KontakMapPlaceholder />
            </div>
            <KontakForm />
        </div>
    </div>
</template>

<script setup>
    definePageMeta({ footerVariant: 'slim' })

    useHead({
        title: 'Kontak — Ridwan & Co.',
        meta: [{ name: 'description', content: 'Alamat, telepon, email, dan form kontak Ridwan & Co..' }],
    })
</script>
