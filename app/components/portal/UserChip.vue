<template>
    <div class="userchip">
        <span class="userchip__av">{{ client.initials }}</span>
        <span style="min-width: 0"
            ><b>{{ client.name }}</b
            ><small>{{ client.company }}</small></span
        >
    </div>
</template>

<script setup>
    const { client } = useClientSession()
</script>
