<template>
    <div class="timeline">
        <div v-for="step in steps" :key="step.title" class="tl" :class="`is-${step.state}`">
            <span class="tl__dot" />
            <p class="tl__date">{{ step.date }}</p>
            <p class="tl__title">{{ step.title }}</p>
            <p class="tl__desc">{{ step.desc }}</p>
        </div>
    </div>
</template>

<script setup>
    defineProps({
        steps: { type: Array, required: true },
    })
</script>
