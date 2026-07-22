<template>
    <div>
        <section class="reveal">
            <p class="prose" style="color: var(--ink-3)">{{ program.desc }}</p>
        </section>

        <section v-if="eligibility.length" class="reveal" data-delay="1" style="margin-top: var(--s7)">
            <p class="eyebrow">Syarat Kelayakan</p>
            <div class="grid grid--3" style="margin-top: var(--s5); gap: var(--s5)">
                <div v-for="item in eligibility" :key="item.title" class="card">
                    <b style="color: var(--ink); font-family: var(--font-display); font-size: 1.1rem">{{ item.title }}</b>
                    <p style="color: var(--ink-3); font-size: var(--fs-sm); margin-top: 6px">{{ item.text }}</p>
                </div>
            </div>
        </section>

        <section v-if="areas.length" class="reveal" data-delay="2" style="margin-top: var(--s7)">
            <p class="eyebrow">Area yang Dibantu</p>
            <div class="grid grid--2" style="margin-top: var(--s5); gap: var(--s5)">
                <div v-for="item in areas" :key="item.title" class="card">
                    <b style="color: var(--ink); font-family: var(--font-display); font-size: 1.1rem">{{ item.title }}</b>
                    <p style="color: var(--ink-3); font-size: var(--fs-sm); margin-top: 6px">{{ item.text }}</p>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
    defineProps({
        program: { type: Object, required: true },
        eligibility: { type: Array, required: true },
        areas: { type: Array, required: true },
    })
</script>
