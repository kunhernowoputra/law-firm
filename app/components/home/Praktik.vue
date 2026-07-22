<template>
    <section class="section wrap" aria-labelledby="praktik-h">
        <div class="sec-head reveal">
            <div>
                <p class="eyebrow">Layanan</p>
                <h2 id="praktik-h" class="sec-head__title" style="margin-top: var(--s3)">Keahlian, litigasi, dan perizinan dalam satu tim.</h2>
            </div>
        </div>

        <div class="tabs reveal" data-delay="1" role="tablist" aria-label="Kategori praktik" @keydown.left.prevent="selectPrev" @keydown.right.prevent="selectNext">
            <button v-for="(tab, i) in tabs" :id="`praktik-tab-${tab.key}`" :key="tab.key" role="tab" :aria-selected="activeIndex === i" :aria-controls="`praktik-panel-${tab.key}`" :tabindex="activeIndex === i ? 0 : -1" :class="{ 'is-active': activeIndex === i }" @click="selectTab(i)">
                {{ tab.label }}
            </button>
        </div>

        <div :id="`praktik-panel-${activeTab.key}`" class="practice reveal" data-delay="2" role="tabpanel" :aria-labelledby="`praktik-tab-${activeTab.key}`">
            <div v-for="item in practiceAreas[activeTab.key]" :key="item.name" class="practice__row" style="grid-template-columns: 1fr">
                <span>
                    <span class="practice__name">{{ item.name }}</span>
                    <span class="practice__desc">{{ item.desc }}</span>
                </span>
            </div>
        </div>
    </section>
</template>

<script setup>
    const { practiceAreas } = useHome()
    const { tabs, activeIndex, activeTab, selectTab, selectNext, selectPrev } = usePraktikTabs()
</script>
