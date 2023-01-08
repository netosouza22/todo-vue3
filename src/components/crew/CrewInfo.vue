<script lang="ts">
import { defineComponent } from 'vue';

import NavCrew from './NavCrew.vue';

export default defineComponent({
    name: 'CrewInfo',
    components: {
        NavCrew,
    },
    data() {
        return { crews: [] };
    },
});
</script>

<template>
    <section class="crew__info">
        <main>
            <h4 class="heading4">COMMANDER</h4>
            <h3 class="heading3">DOUGLAS HURLEY</h3>
            <p class="body-text">
                Douglas Gerald Hurley is an American engineer, former Marine
                Corps pilot and former NASA astronaut. He launched into space
                for the third time as commander of Crew Dragon Demo-2.
            </p>
        </main>
        <footer>
            <NavCrew></NavCrew>
        </footer>
    </section>
</template>

<style lang="scss" scoped>
.crew__info {
    width: 55%;

    main {
        margin: 50px 0px;
        align-items: flex-start;

        h4 {
            margin-bottom: 1.2rem;
        }
        h3 {
            margin-bottom: 1.8rem;
        }

        p {
            width: 80%;
        }
    }

    footer {
        align-items: flex-end;
    }

    @include lg {
        text-align: start;
    }
}
</style>
