<template>
    <div class="container">
        <ul>
            <li>
                <v-link v-bind:href="CONST.ROUTER_URL.home">{{ $t("common.menu.home") }}</v-link>
                <v-link v-bind:href="CONST.ROUTER_URL.about">{{ $t("common.menu.about") }}</v-link>
            </li>
        </ul>
        <vue-progress-bar></vue-progress-bar>
        <slot></slot>
    </div>
</template>

<script src="./master-layout.controller.js"></script>
<style src="./master-layout.style.css"></style>