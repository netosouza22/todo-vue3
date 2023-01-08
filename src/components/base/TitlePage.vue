<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'TitlePage',
    props: {
        number: { type: Number, required: true },
        text: { type: String, required: true },
    },
    data() {
        return {};
    },
    methods: {},
});
</script>

<template>
    <section>
        <h2 class="heading5">
            <span class="title__marker">{{ number }}</span
            >{{ text }}
        </h2>
    </section>
</template>

<style lang="scss" scoped>
section {
    width: 100%;
    text-align: center;
    h2 {
        font-weight: 400;
        .title__marker {
            font-weight: bold;
            mix-blend-mode: normal;
            opacity: 0.25;
            margin-right: 1.5rem;
        }
    }

    @include md {
        text-align: start;
    }
}
</style>
