<template>
    <div class="steps" aria-hidden="true">
        <span class="steps__item" :class="{ 'is-active': step === 1, 'is-done': step > 1 }"><span class="steps__num">1</span> Kategori</span>
        <span class="steps__sep" />
        <span class="steps__item" :class="{ 'is-active': step === 2, 'is-done': step > 2 }"><span class="steps__num">2</span> Detail</span>
        <span class="steps__sep" />
        <span class="steps__item" :class="{ 'is-active': step === 3 }"><span class="steps__num">3</span> Jadwal</span>
    </div>
</template>

<script setup>
    const { step } = useKonsultasi()
</script>
