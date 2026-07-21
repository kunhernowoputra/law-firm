<template>
    <div class="confidential">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
            <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" />
            <path d="M9 12l2 2 4-4" />
        </svg>
        <div>
            <b>{{ title }}</b>
            <p>{{ body }}</p>
        </div>
    </div>
</template>

<script setup>
    defineProps({
        title: { type: String, default: 'Kerahasiaan Klien Dilindungi' },
        body: {
            type: String,
            default: 'Seluruh komunikasi dan dokumen yang Anda sampaikan kepada Wirasena & Partners bersifat rahasia dan dilindungi hak imunitas advokat sesuai Undang-Undang No. 18 Tahun 2003 tentang Advokat serta Kode Etik Advokat Indonesia. Informasi di situs ini bersifat umum dan bukan merupakan nasihat hukum; hubungan advokat–klien baru terbentuk setelah kesepakatan tertulis.',
        },
    })
</script>
