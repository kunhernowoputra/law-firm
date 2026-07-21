<template>
    <footer class="site-footer">
        <div class="wrap">
            <div v-if="!isSlim" class="footer-grid">
                <div class="footer-col footer-about">
                    <SharedBrand plain />
                    <p>Menara Sudirman Lt. 21, Jl. Jend. Sudirman Kav. 60, Jakarta Selatan 12190, Indonesia.</p>
                    <p style="margin-top: var(--s3)">
                        <a href="tel:+62212505050">+62 21 250 5050</a> ·
                        <a href="mailto:halo@wirasena.co.id">halo@wirasena.co.id</a>
                    </p>
                </div>
                <div v-for="col in footerCols" :key="col.title" class="footer-col">
                    <h4>{{ col.title }}</h4>
                    <NuxtLink v-for="item in col.links" :key="item.label" :to="item.to">{{ item.label }}</NuxtLink>
                </div>
            </div>

            <SharedConfidential :style="isSlim ? 'margin-top:0' : undefined" />

            <div class="footer-legal">
                <span>© 2026 Ridwan & Co.. Terdaftar pada PERADI.</span>
                <span>Dirancang dengan restraint · Jakarta</span>
            </div>
        </div>
    </footer>
</template>

<script setup>
    const { footerCols, isSlim } = useSiteFooter()
</script>
