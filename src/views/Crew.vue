<script lang="ts">
import { collection, getDocs } from 'firebase/firestore';
import { defineComponent } from 'vue';
import Header from '../components/Header.vue';
import CrewInfo from '../components/crew/CrewInfo.vue';

import db from '../firebase/config';
import marsImg from '../assets/crew/image-douglas-hurley.png';
import TitlePage from '../components/base/TitlePage.vue';

export default defineComponent({
    components: {
        Header,
        CrewInfo,
        TitlePage,
    },
    data() {
        return { crews: [], marsImg: marsImg };
    },
    mounted() {
        const readData = async () => {
            const querySnapshot = await getDocs(collection(db, 'destination'));
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data()?.name}`);
            });
        };

        readData();
    },
});
</script>

<template>
    <div class="crew-page">
        <Header></Header>
        <main class="crew__main">
            <TitlePage number="02" text="MEET YOUR CREW"></TitlePage>
            <div class="crew__content">
                <CrewInfo />
                <section class="crew__image">
                    <img :src="marsImg" alt="picture of mars" />
                </section>
            </div>
        </main>
    </div>
</template>

<style lang="scss" scoped>
.crew-page {
    @include xs {
        background-image: url('../assets/crew/background-crew-mobile.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    @include md {
        background-image: url('../assets/crew/background-crew-tablet.jpg');
        /* background-repeat: no-repeat, repeat; */
        /* background-size: cover; */
        background-position: center;
        background-repeat: no-repeat;
        background-size: 100%;
    }
    @include lg {
        background-image: url('../assets/crew/background-crew-desktop.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: 100%;
    }

    width: 100%;
    height: 100vh;
    overflow-y: auto;

    display: flex;
    flex-direction: column;

    background-color: $dark;

    .crew__main {
        width: 93%;
        height: 100%;
        margin: auto;

        margin: auto;
        margin-top: 1rem;

        .crew__content {
            display: flex;
            flex-direction: column;
            width: 100%;
            .crew__image {
                margin: auto;
                margin-top: -40px;

                display: flex;
                align-items: center;
                justify-content: center;
                img {
                    width: 90%;
                    height: 455px;
                }
            }

            @include md {
                flex-direction: column;
            }
            @include lg {
                flex-direction: row;
            }
        }

        @include lg {
            width: 80%;
        }
    }
}
</style>
