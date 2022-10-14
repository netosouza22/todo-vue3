<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Button'
})
</script>

<template>
    <button class="main-btn">
        EXPLORE
    </button>
</template>

<style  lang="scss">

    .main-btn {
        border: 1px solid #000;
        width: 200px;
        height: 200px;
        border-radius: 50%;
        background: white;
        cursor: pointer;

        border: none;
        font-size: 1.5rem;

        letter-spacing: 0.125rem;
        color: #0B0D17;
    }

    .main-btn:hover {
        animation: pulse 1.8s infinite;
        transition: 1s ease;
    }   


    @keyframes pulse {
        0% {
            box-shadow: 0 0 0 0 rgba(151, 151, 151, 0.4);
        }

        100% {
            box-shadow: 0 0 0 50px rgba(151, 151, 151, 0.4);
        }

  }

</style>