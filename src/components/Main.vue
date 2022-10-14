<script lang="ts">
    import { defineComponent } from 'vue';
import HeadingVue from './UI/Heading.vue';
    import ButtonVue from '/@/components/UI/Button.vue';

    export default defineComponent({
        name: 'Main',
        components: {
            'v-button': ButtonVue,
            'v-heading': HeadingVue,
        }
    })
</script>

<template>
    <main>
        <section>
            <v-heading>
                SO, YOU WANT TO TRAVEL TO
            </v-heading>
            <span>
                SPACE
            </span>
            <p>
                Let’s face it; if you want to go to space, 
                you might as well genuinely go to outer space 
                and not hover kind of on the edge of it. Well sit back, 
                and relax because we’ll give you a truly out of this world experience!
            </p>
        </section>

        <section>
            <v-button></v-button>
        </section>
    </main>
</template>

<style lang="scss">

    main {
        display: flex;
    }
</style>