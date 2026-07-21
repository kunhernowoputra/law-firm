<template>
    <div style="margin-top: var(--s6); aspect-ratio: 16/10; border-radius: var(--r); border: 1px solid var(--line); overflow: hidden; position: relative; background: linear-gradient(135deg, var(--bg-sunk), var(--bg-alt))">
        <div class="facade" style="opacity: 0.6; mask-image: none" />
        <div style="position: absolute; inset: 0; display: grid; place-items: center; text-align: center">
            <div>
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="1.6" style="margin: 0 auto">
                    <path d="M12 21s-7-6.2-7-11a7 7 0 0114 0c0 4.8-7 11-7 11z" />
                    <circle cx="12" cy="10" r="2.5" />
                </svg>
                <p style="font-family: var(--font-mono); font-size: var(--fs-xs); color: var(--ink-3); letter-spacing: 0.08em; margin-top: var(--s3)">PETA · SCBD, JAKARTA SELATAN</p>
            </div>
        </div>
    </div>
</template>

<script setup></script>
