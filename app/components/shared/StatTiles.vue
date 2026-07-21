<template>
    <div class="stat-tiles">
        <div v-for="tile in tiles" :key="tile.label" class="tile">
            <p class="tile__label">{{ tile.label }}</p>
            <p class="tile__value" :style="tile.tone ? `color:var(--${tile.tone})` : undefined">
                {{ tile.value }}<small v-if="tile.sub"> {{ tile.sub }}</small>
            </p>
        </div>
    </div>
</template>

<script setup>
    defineProps({
        tiles: { type: Array, required: true },
    })
</script>
