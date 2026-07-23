<template>
    <div>
        <section class="section--tight wrap" style="padding-top: var(--s8)">
            <p class="eyebrow reveal">Layanan</p>
            <h1 class="reveal" data-delay="1" style="font-size: var(--fs-h1); max-width: 22ch; margin-top: var(--s4)">Keahlian, litigasi, dan perizinan dalam satu tim.</h1>
            <p class="reveal prose" data-delay="2" style="margin-top: var(--s4); color: var(--ink-3)">Rincian lengkap layanan kami di tiga kategori: bidang keahlian hukum, pendampingan litigasi di forum peradilan, dan pengurusan perizinan usaha.</p>
        </section>

        <section class="wrap" style="padding-bottom: var(--s9)">
            <div class="tabs reveal" data-delay="1" role="tablist" aria-label="Kategori layanan" @keydown.left.prevent="selectPrev" @keydown.right.prevent="selectNext">
                <button v-for="(tab, i) in tabs" :id="`layanan-tab-${tab.key}`" :key="tab.key" role="tab" :aria-selected="activeIndex === i" :aria-controls="`layanan-panel-${tab.key}`" :tabindex="activeIndex === i ? 0 : -1" :class="{ 'is-active': activeIndex === i }" @click="selectTab(i)">
                    {{ tab.label }}
                </button>
            </div>

            <div :id="`layanan-panel-${activeTab.key}`" class="practice-grid reveal" data-delay="2" role="tabpanel" :aria-labelledby="`layanan-tab-${activeTab.key}`" style="margin-top: var(--s6)">
                <article v-for="item in practiceAreas[activeTab.key]" :key="item.name" class="practice-card">
                    <div class="practice-card__media">
                        <NuxtImg :src="item.imageUrl" :alt="item.name" width="480" height="360" loading="lazy" />
                    </div>
                    <div class="practice-card__body">
                        <h3 class="practice-card__name">{{ item.name }}</h3>
                        <p class="practice-card__desc">{{ item.desc }}</p>
                    </div>
                </article>
            </div>
        </section>

        <section class="section wrap">
            <SharedCtaBand :eyebrow="''" title="Tidak yakin masuk area mana?" text="Form konsultasi kami merutekan masalah Anda otomatis ke area praktik yang paling sesuai." cta-label="Mulai Konsultasi" />
        </section>
    </div>
</template>

<script setup>
    const { practiceAreas } = useLayanan()
    const { tabs, activeIndex, activeTab, selectTab, selectNext, selectPrev } = useLayananTabs()

    useSeo({
        title: 'Layanan — Ridwan & Co.',
        description: 'Layanan lengkap kami: bidang keahlian hukum, pendampingan litigasi, dan pengurusan perizinan usaha.',
    })
</script>
