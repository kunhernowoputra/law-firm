<template>
    <div>
        <header class="site-header" :class="{ 'is-stuck': isStuck }">
            <div class="wrap site-header__inner">
                <SharedBrand show-sub />
                <nav class="nav" aria-label="Navigasi utama">
                    <NuxtLink v-for="link in navLinks" :key="link.to" :to="link.to">{{ link.label }}</NuxtLink>
                </nav>
                <div class="header-actions">
                    <SharedThemeToggle />
                    <NuxtLink class="btn btn--ghost btn--sm" to="/portal/login">Portal Klien</NuxtLink>
                    <NuxtLink class="btn btn--primary btn--sm" to="/konsultasi">Konsultasi</NuxtLink>
                    <button class="nav-toggle" aria-label="Buka menu" :aria-expanded="String(isDrawerOpen)" aria-controls="mnav" @click="toggleDrawer">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 6h18M3 12h18M3 18h18" /></svg>
                    </button>
                </div>
            </div>
        </header>
        <div id="mnav" class="mobile-nav" :class="{ 'is-open': isDrawerOpen }">
            <NuxtLink v-for="link in navLinks" :key="link.to" :to="link.to" @click="closeDrawer">{{ link.label }}</NuxtLink>
            <NuxtLink to="/konsultasi" @click="closeDrawer">Konsultasi</NuxtLink>
            <NuxtLink to="/portal/login" @click="closeDrawer">Portal Klien</NuxtLink>
            <NuxtLink class="btn btn--primary" to="/konsultasi" @click="closeDrawer">Konsultasi Sekarang</NuxtLink>
        </div>
    </div>
</template>

<script setup>
    const { isDrawerOpen, isStuck, navLinks, toggleDrawer, closeDrawer } = useSiteHeader()
</script>
