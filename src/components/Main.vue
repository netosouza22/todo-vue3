<script lang="ts">
    import { defineComponent } from 'vue';
    import ButtonVue from '/@/components/UI/Button.vue';

    export default defineComponent({
        name: 'Main',
        components: {
            'v-button': ButtonVue,
        }
    })
</script>

<template>
    <main>
        <section class="main-text-group">
            <span class="heading5" role="h5">
                SO, YOU WANT TO TRAVEL TO
            </span>
            <span class="heading1" role="h1">
                SPACE 
            </span>
            <span class="body-text" role="p">
                Let’s face it; if you want to go to space, 
                you might as well genuinely go to outer space 
                and not hover kind of on the edge of it. Well sit back, 
                and relax because we’ll give you a truly out of this world experience!
            </span>
        </section>

        <section class="main-btn-section">
            <v-button></v-button>
        </section>
    </main>
</template>

<style lang="scss" scoped>

    main {
        width: 80%;
        margin: auto;

        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        
        color: white;
        
        .main-text-group {
            width: 40%;
            display: flex;
            flex-direction: column;
            text-align: start;

            &:first-child(){
                margin-bottom: 24px;
            }
            &:child(2n){
                margin-bottom: 24px;
            }
        }
    }
</style>