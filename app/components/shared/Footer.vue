<template>
    <footer class="site-footer">
        <div class="wrap">
            <div v-if="!isSlim" class="footer-grid">
                <div class="footer-col footer-about">
                    <SharedBrand plain />
                    <p>Puri Beta 1, Town Center, Lot 7 No. 10, RT 004 / RW 012, Kel. Larangan Utara, Kec. Larangan, Kota Tangerang, Banten 15154.</p>
                    <p style="margin-top: var(--s3)">
                        <a href="https://wa.me/6285691248221">+62 856-9124-8221</a> ·
                        <a href="https://wa.me/6288212219215">+62 882-1221-9215</a>
                    </p>
                    <p style="margin-top: var(--s2)">
                        <a href="mailto:rncolawoffice@gmail.com">rncolawoffice@gmail.com</a>
                    </p>
                </div>
                <div v-for="col in footerCols" :key="col.title" class="footer-col">
                    <h4>{{ col.title }}</h4>
                    <NuxtLink v-for="item in col.links" :key="item.label" :to="item.to">{{ item.label }}</NuxtLink>
                </div>
            </div>

            <SharedConfidential :style="isSlim ? 'margin-top:0' : undefined" />

            <div class="footer-legal">
                <span>© 2026 Ridwan & Co.</span>
            </div>
        </div>
    </footer>
</template>

<script setup>
    const { footerCols, isSlim } = useSiteFooter()
</script>
