<script lang="ts">
import { defineComponent } from 'vue';

import NavDestination from './DestinationNav.vue';

export default defineComponent({
    name: 'DestinationInfo',
    components: {
        NavDestination,
    },
    data() {
        return { destinations: [] };
    },
});
</script>

<template>
    <section class="destination__info">
        <NavDestination></NavDestination>
        <main>
            <h2 class="heading2">MOON</h2>
            <p class="body-text">
                See our planet as you’ve never seen it before. A perfect
                relaxing trip away to help regain perspective and come back
                refreshed. While you’re there, take in some history by visiting
                the Luna 2 and Apollo 11 landing sites.
            </p>
        </main>
        <footer>
            <div class="destination__avg-distance">
                <span class="sub-heading2">AVG. DISTANCE</span>
                <span class="sub-heading1">384,400 km</span>
            </div>
            <div class="destination__est-time">
                <span class="sub-heading2">EST. TRAVEL TIME</span>
                <span class="sub-heading1">3 days</span>
            </div>
        </footer>
    </section>
</template>

<style lang="scss" scoped>
.destination__info {
    width: 100%;

    main {
        border-bottom: 1px solid #fff;
        padding: 1.5rem 0px 3rem;
        .heading2 {
            margin-bottom: 0.6rem;
        }
    }

    footer {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin: 1.5rem 0px;
        gap: 0.75rem;
        .destination__avg-distance {
            width: 50%;
            display: flex;
            flex-direction: column;
        }
        .destination__est-time {
            width: 50%;
            display: flex;
            flex-direction: column;
        }

        @include md {
            flex-direction: row;
            justify-content: flex-start;
            align-items: flex-start;
        }
    }

    @include lg {
        text-align: start;
    }
}
</style>
