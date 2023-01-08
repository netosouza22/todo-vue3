<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'NavCrew',
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
                <li className="nav__item nav__text nav__item--active"></li>
                <li className="nav__item nav__text"></li>
                <li className="nav__item nav__text"></li>
                <li className="nav__item nav__text"></li>
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

            .nav__item {
                cursor: pointer;
                width: 10px;
                height: 10px;
                background-color: $light;
                border-radius: 50%;
                opacity: 17%;

                position: relative;
                letter-spacing: 2.7px;
            }

            .nav__item:hover {
                opacity: 50%;
            }

            .nav__item--active {
                opacity: 100%;
            }
        }

        @include lg {
            margin: 0;
        }
    }
}
</style>
