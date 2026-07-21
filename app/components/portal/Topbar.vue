<template>
    <header class="topbar">
        <h1 class="topbar__title">{{ title }}</h1>
        <div class="topbar__actions">
            <SharedThemeToggle />
        </div>
    </header>
</template>

<script setup>
    const { title } = usePortalChrome()
</script>
