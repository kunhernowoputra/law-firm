<template>
    <section v-if="clients.length" class="section" style="background: var(--ink)" aria-labelledby="client-h">
        <div class="wrap">
            <p class="eyebrow reveal" style="color: rgba(255, 255, 255, 0.55)">Client Kami</p>
            <h2 id="client-h" class="sec-head__title reveal" data-delay="1" style="color: #fff; margin-top: var(--s4); max-width: 24ch">Terima kasih atas kepercayaan yang Anda berikan dan menjadikan kami mitra hukum Anda.</h2>
            <p class="reveal" data-delay="2" style="color: rgba(255, 255, 255, 0.65); margin-top: var(--s4); max-width: 640px">Kami menghargai kesempatan untuk mendampingi Anda dalam penanganan hukum, dan kepercayaan Anda mendorong kami untuk terus berinovasi serta memberikan layanan terbaik. Berikut adalah nama klien kami khususnya dalam bidang korporasi yang telah memberikan kepercayaan kepada kami.</p>
            <div class="client-grid reveal" data-delay="3" style="margin-top: var(--s7)">
                <div v-for="client in clients" :key="client.name" class="client-card" :title="client.name">
                    <img :src="client.logo" :alt="client.name" loading="lazy" />
                    <span class="client-card__name">{{ client.name }}</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    defineProps({
        clients: { type: Array, default: () => [] },
    })
</script>
