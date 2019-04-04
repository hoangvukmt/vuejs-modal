<template>
    <div>
        <ul>
            <li v-for="item in modalData" v-on:click="choseData(item)">
                {{ item.text }}
            </li>
        </ul>
        <button v-on:click="$emit('close')">Close</button>
    </div>
</template>

<script src="./v-modal.controller.js"></script>
<style src="./v-modal.style.css"></style>