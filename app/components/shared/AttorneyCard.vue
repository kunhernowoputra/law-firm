<template>
    <article class="attorney reveal" :data-delay="delay || undefined">
        <div class="attorney__avatar">
            <span v-if="isNew" class="tag attorney__badge">Baru</span>
            <img v-if="photoUrl" :src="photoUrl" :alt="name" />
            <span v-else class="attorney__initials">{{ initials }}</span>
        </div>
        <h3 class="attorney__name">{{ name }}</h3>
        <p class="attorney__role">{{ role }}</p>
        <p v-if="meta" class="attorney__meta">{{ meta }}</p>
    </article>
</template>

<script setup>
    defineProps({
        name: { type: String, required: true },
        initials: { type: String, required: true },
        role: { type: String, required: true },
        meta: { type: String, default: '' },
        isNew: { type: Boolean, default: false },
        photoUrl: { type: String, default: '' },
        delay: { type: Number, default: 0 },
    })
</script>
