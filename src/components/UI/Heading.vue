<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Heading',

})
</script>

<template>
    <div class="heading">
        <slot></slot>
    </div>
</template>

<style  lang="scss">
    @import "@/assets/styles/variables.scss";
    .heading {
        font-size: 100px;
    }
</style>