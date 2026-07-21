<template>
    <article class="card reveal" :data-delay="delay || undefined" style="margin-top: var(--s5)">
        <div class="grid grid--2" style="gap: var(--s7); align-items: start">
            <div>
                <span class="practice__num">{{ area.no }}</span>
                <h2 style="font-size: var(--fs-h2); margin-top: var(--s2)">{{ area.name }}</h2>
                <p class="prose" style="color: var(--ink-3); margin-top: var(--s4); font-size: var(--fs-sm)">{{ area.desc }}</p>
                <div class="practice__tags" style="margin-top: var(--s5)">
                    <span v-for="tag in area.tags" :key="tag" class="tag">{{ tag }}</span>
                </div>
            </div>
            <div>
                <p class="eyebrow no-rule" style="margin-bottom: var(--s3)">Advokat penanggung jawab</p>
                <template v-if="area.assignees.length">
                    <div v-for="(person, i) in area.assignees" :key="person.initials" class="assignee" :style="i < area.assignees.length - 1 ? 'margin-bottom:var(--s3)' : undefined">
                        <span class="assignee__av">{{ person.initials }}</span>
                        <span
                            ><b>{{ person.name }}</b
                            ><small>{{ person.role }}</small></span
                        >
                    </div>
                    <NuxtLink class="link-arrow" style="margin-top: var(--s5)" :to="{ path: '/konsultasi', query: { kategori: area.route } }">
                        Konsultasi bidang ini
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                    </NuxtLink>
                </template>
                <template v-else>
                    <div class="alert alert--warn" style="align-items: center">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                            <circle cx="12" cy="12" r="9" />
                            <path d="M12 8v4M12 16h.01" />
                        </svg>
                        <span>Belum ada advokat yang ditugaskan untuk area ini. Konsultasi tetap dapat diajukan dan akan dialihkan ke tim yang sesuai.</span>
                    </div>
                    <NuxtLink class="link-arrow" style="margin-top: var(--s5)" to="/konsultasi">
                        Ajukan konsultasi umum
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                    </NuxtLink>
                </template>
            </div>
        </div>
    </article>
</template>

<script setup>
    defineProps({
        area: { type: Object, required: true },
        delay: { type: Number, default: 0 },
    })
</script>
