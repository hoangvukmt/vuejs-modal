<template>
    <a
        v-bind:href="href"
        v-bind:class="{ active: isActive }"
    >
        <slot></slot>
    </a>
</template>

<script src="./v-link.controller.js"></script>
<style src="./v-link.style.css"></style>