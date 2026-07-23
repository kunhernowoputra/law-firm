<template>
    <aside class="side">
        <NuxtLink class="side__brand" to="/">
            <NuxtImg class="brand__mark" src="/assets/logo.webp" alt="" aria-hidden="true" width="30" height="30" />
            <span class="brand__name" style="font-size: 1rem">Ridwan<span>&nbsp;&amp;</span> Co.</span>
        </NuxtLink>
        <nav class="side__nav" aria-label="Navigasi portal">
            <p class="side__label">Menu</p>
            <NuxtLink to="/portal">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7">
                    <rect x="3" y="3" width="7" height="9" />
                    <rect x="14" y="3" width="7" height="5" />
                    <rect x="14" y="12" width="7" height="9" />
                    <rect x="3" y="16" width="7" height="5" />
                </svg>
                Dashboard
            </NuxtLink>
            <NuxtLink to="/portal/dokumen">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7">
                    <path d="M14 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V9z" />
                    <path d="M14 3v6h6" />
                </svg>
                Dokumen
            </NuxtLink>
            <NuxtLink to="/portal/invoice">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7">
                    <path d="M6 2h9l5 5v13a1 1 0 01-1 1H6a1 1 0 01-1-1V3a1 1 0 011-1z" />
                    <path d="M9 13h6M9 17h6M9 9h2" />
                </svg>
                Invoice
            </NuxtLink>
            <NuxtLink to="/konsultasi">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg>
                Konsultasi
            </NuxtLink>
        </nav>
        <div class="side__foot">
            <PortalUserChip />
            <nav class="side__nav" style="margin-top: var(--s3)">
                <NuxtLink to="/portal/login" style="color: var(--ink-3)">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7">
                        <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" />
                        <path d="M16 17l5-5-5-5M21 12H9" />
                    </svg>
                    Keluar
                </NuxtLink>
            </nav>
        </div>
    </aside>
</template>

<script setup></script>
