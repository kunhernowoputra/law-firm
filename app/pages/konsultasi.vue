<template>
    <div class="section wrap wrap--narrow">
        <div class="reveal" style="margin-bottom: var(--s7)">
            <p class="eyebrow">Konsultasi</p>
            <h1 style="font-size: var(--fs-h1); margin-top: var(--s3); max-width: 20ch">Ceritakan situasi Anda, pilih jadwal.</h1>
        </div>

        <template v-if="!isDone">
            <KonsultasiStepper />
            <KonsultasiCategoryStep />
            <KonsultasiDetailStep />
            <KonsultasiBookingStep />
        </template>
        <KonsultasiSuccess v-else />
    </div>
</template>

<script setup>
    definePageMeta({ footerVariant: 'slim' })

    const { isDone } = useKonsultasi()

    useHead({
        title: 'Konsultasi & Booking — Ridwan & Co.',
        meta: [{ name: 'description', content: 'Ajukan konsultasi hukum dan pilih jadwal. Masalah Anda dirutekan otomatis ke area praktik yang sesuai.' }],
    })
</script>
