<template>
    <div class="tabs" style="margin-bottom: var(--s6)">
        <button v-for="(item, i) in cases" :key="item.no" :class="{ 'is-active': activeIndex === i }" @click="selectCase(i)">
            {{ item.title }} <span class="row__sub" style="display: inline">· {{ item.no }}</span>
        </button>
    </div>
</template>

<script setup>
    const { cases, activeIndex, selectCase } = useDokumen()
</script>
