<template>
    <div class="panel">
        <div class="panel__head"><h3 style="font-size: 1rem">Advokat penanggung jawab</h3></div>
        <div class="panel__body stack">
            <div v-for="person in advokat" :key="person.initials" class="assignee">
                <span class="assignee__av">{{ person.initials }}</span>
                <span
                    ><b>{{ person.name }}</b
                    ><small>{{ person.role }}</small></span
                >
            </div>
            <hr class="divider" />
            <NuxtLink class="link-arrow" to="/konsultasi">
                Jadwalkan diskusi
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
    defineProps({
        advokat: { type: Array, required: true },
    })
</script>
