<template>
    <div class="portal">
        <PortalSidebar />
        <div class="portal__main">
            <PortalTopbar />
            <div class="portal__body">
                <slot />
            </div>
            <PortalTabbar />
        </div>
        <SharedToast />
    </div>
</template>

<script setup></script>
