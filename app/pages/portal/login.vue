<template>
    <div class="auth">
        <LoginAside />
        <main class="auth__main">
            <LoginForm />
        </main>
    </div>
</template>

<script setup>
    definePageMeta({ layout: false })

    useHead({
        title: 'Portal Klien — Masuk · Wirasena & Partners',
        meta: [{ name: 'robots', content: 'noindex' }],
    })
</script>
