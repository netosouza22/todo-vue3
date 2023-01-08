<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'NavDestination',
    data() {
        return {};
    },
    methods: {},
});
</script>

<template>
    <header>
        <div class="nav__menu">
            <ul>
                <li className="nav__item nav__text">MOON</li>
                <li className="nav__item nav__text">MARS</li>
                <li className="nav__item nav__text">EUROPA</li>
                <li className="nav__item nav__text">TITAN</li>
            </ul>
        </div>
    </header>
</template>

<style lang="scss" scoped>
.hide {
    display: none;
}
header {
    width: 100%;
    position: relative;

    .nav__menu {
        width: 80%;
        margin: auto;
        position: relative;

        ul {
            display: flex;
            margin: auto;
            gap: 1.6rem;
            width: 285px;

            .nav__item {
                cursor: pointer;
                padding: 15px 0px;
                position: relative;
                letter-spacing: 2.7px;
            }

            .nav__item:hover::before {
                content: '';
                position: absolute;
                bottom: 0px;
                width: 100%;
                height: 5px;
                background: #fff;
                opacity: 0.5;
                z-index: 999;
            }
        }

        @include lg {
            margin: 0;
        }
    }
}
</style>
