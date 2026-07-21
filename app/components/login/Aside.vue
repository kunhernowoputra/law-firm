<template>
    <aside class="auth__aside">
        <div class="facade" aria-hidden="true" />
        <NuxtLink class="brand" to="/" style="color: #fff">
            <svg class="brand__mark" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <rect x="1" y="1" width="30" height="30" rx="2" stroke="currentColor" stroke-width="1.4" />
                <path d="M7 8.5l2.8 15L14 8.5l4.2 15L21 8.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M23.5 8.5v15" stroke="#8fb6e6" stroke-width="1.4" stroke-linecap="round" />
            </svg>
            <span class="brand__name" style="color: #fff">Wirasena<span style="color: #8fb6e6">&nbsp;&amp;</span> Partners</span>
        </NuxtLink>
        <blockquote class="auth__quote">"Visibilitas penuh atas kasus Anda — kapan pun, dengan kerahasiaan yang terjaga."</blockquote>
        <div style="display: flex; align-items: center; gap: var(--s3); color: rgba(255, 255, 255, 0.6); font-size: var(--fs-sm)">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
                <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" />
                <path d="M9 12l2 2 4-4" />
            </svg>
            <span>Koneksi terenkripsi · Akses terbatas per kasus</span>
        </div>
    </aside>
</template>

<script setup></script>
