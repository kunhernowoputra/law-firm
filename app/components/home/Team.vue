<template>
    <section class="section" style="background: var(--bg-alt); border-block: 1px solid var(--line)" aria-labelledby="tim-h">
        <div class="wrap">
            <div class="sec-head reveal">
                <div>
                    <p class="eyebrow">Orang</p>
                    <h2 id="tim-h" class="sec-head__title" style="margin-top: var(--s3)">Advokat yang memimpin mandat Anda.</h2>
                </div>
                <NuxtLink class="link-arrow" to="/tim">
                    Profil lengkap tim
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </NuxtLink>
            </div>
            <div class="grid grid--4">
                <SharedAttorneyCard v-for="(attorney, i) in attorneys" :key="attorney.name" v-bind="attorney" :delay="i" />
            </div>
        </div>
    </section>
</template>

<script setup>
    defineProps({
        attorneys: { type: Array, required: true },
    })
</script>
