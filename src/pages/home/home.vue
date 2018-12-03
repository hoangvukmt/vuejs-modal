<template>
    <master-layout>
        <p>{{ messageFromBase }}</p>
        <p>{{ message }}</p>
        <button v-on:click="methodFromBase()">{{ $t("common.btnBase") }}</button>
        <button v-on:click="methodFromComponent()">{{ $t("common.btnComponent") }}</button>
        <button v-on:click="callPostApi()">{{ $t("common.btnCallPostApi") }}</button>
    </master-layout>
</template>

<script src="./home.controller.js"></script>
<style src="./home.style.css"></style>