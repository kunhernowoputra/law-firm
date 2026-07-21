<template>
    <section v-if="testimonial" class="section" style="background: var(--ink)" aria-labelledby="testi-h">
        <div class="wrap">
            <p class="eyebrow reveal" style="color: rgba(255, 255, 255, 0.55)">Kepercayaan Klien</p>
            <h2 id="testi-h" class="visually-hidden">Testimoni klien</h2>
            <blockquote class="quote reveal" data-delay="1" style="border-color: var(--accent); margin-top: var(--s5)">
                <p class="quote__text" style="color: #fff">"{{ testimonial.quote }}"</p>
                <footer class="quote__by" style="color: rgba(255, 255, 255, 0.6)">
                    <b style="color: #fff">{{ testimonial.byRole }}</b> · {{ testimonial.byDetail }}
                </footer>
            </blockquote>
            <div v-if="clients.length" class="client-showcase reveal" data-delay="2" style="margin-top: var(--s8)">
                <p class="client-showcase__label">Klien Kami</p>
                <div class="client-grid">
                    <div v-for="client in clients" :key="client.name" class="client-card" :title="client.name">
                        <img :src="client.logo" :alt="client.name" loading="lazy" />
                        <span class="client-card__name">{{ client.name }}</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    defineProps({
        testimonial: { type: Object, default: null },
        clients: { type: Array, default: () => [] },
    })
</script>
