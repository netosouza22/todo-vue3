<script lang="ts">
import { collection, getDocs } from 'firebase/firestore';
import { defineComponent } from 'vue';
import Header from '../components/Header.vue';
import DestinationInfo from '../components/destination/DestinationInfo.vue';

// import NavDestination from '../components/destination/DestinationNav.vue';
import db from '../firebase/config';
import marsImg from '../assets/destination/image-mars.png';
import TitlePage from '../components/base/TitlePage.vue';

export default defineComponent({
    components: {
        Header,
        // NavDestination,
        DestinationInfo,
        TitlePage,
    },
    data() {
        return { destinations: [], marsImg: marsImg };
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
    <div class="destination-page">
        <Header></Header>
        <main class="destination__main">
            <TitlePage number="01" text="PICK YOUR DESTINATION"></TitlePage>
            <div class="destination__content">
                <section class="destination__image">
                    <img :src="marsImg" alt="picture of mars" />
                </section>
                <DestinationInfo />
            </div>
        </main>
    </div>
</template>

<style lang="scss" scoped>
.destination-page {
    @include xs {
        background-image: url('../assets/destination/background-destination-mobile.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    @include md {
        background-image: url('../assets/destination/background-destination-tablet.jpg');
        /* background-repeat: no-repeat, repeat; */
        /* background-size: cover; */
        background-position: center;
        background-repeat: no-repeat;
        background-size: 100%;
    }
    @include lg {
        background-image: url('../assets/destination/background-destination-desktop.jpg');
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

    .destination__main {
        width: 93%;
        height: 100%;
        margin: auto;

        margin: auto;
        margin-top: 1rem;

        .destination__content {
            display: flex;
            flex-direction: column;
            width: 100%;
            margin-top: 1rem;
            .destination__image {
                width: 54%;
                margin: auto;
                padding: 50px;

                display: flex;
                align-items: center;
                justify-content: center;
                img {
                    width: 300px;
                    height: 300px;
                }
            }
            .destination__info {
                margin: auto;

                @include md {
                    width: 80%;
                }
                @include lg {
                    width: 47%;
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
