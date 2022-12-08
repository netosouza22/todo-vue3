<script lang="ts">
import { defineComponent } from 'vue';
import Header from '../components/Header.vue';
import Main from '../components/Main.vue';

export default defineComponent({
  components: {
    Header,
    Main,
  },
});
</script>

<template>
  <main class="main-page">
    <Header></Header>
    <Main></Main>
  </main>
</template>

<style lang="scss" scoped>
.main-page {
  width: 100%;
  height: 100vh;
  overflow-y: auto;

  @include xs {
    background-image: url('../assets/home/background-home-mobile.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  @include md {
    background-image: url('../assets/home/background-home-tablet.jpg');
    /* background-repeat: no-repeat, repeat; */
    /* background-size: cover; */
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
  }
  @include lg {
    background-image: url('../assets/home/background-home-desktop.jpg');
  }

  display: flex;
  flex-direction: column;
}
</style>
