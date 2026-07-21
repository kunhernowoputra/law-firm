<template>
    <div>
        <a class="skip" href="#main">Lewati ke konten</a>
        <SharedHeader />
        <main id="main">
            <slot />
        </main>
        <SharedFooter />
        <SharedToast />
    </div>
</template>

<script setup></script>
