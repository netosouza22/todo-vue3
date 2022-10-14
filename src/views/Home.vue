<script lang="ts">
import { defineComponent } from 'vue';
import Header from '../components/Header.vue';
import Main from '../components/Main.vue';

export default defineComponent({
  components: {
    Header,
    Main,
  }
})
</script>

<template>
  <main class="main-page">
    <Header></Header>
    <Main></Main>
  </main>
</template>

<style scoped>
.main-page {
  width: 100%;
  height: 100vh;
  background-image: url("../assets/home/background-home-desktop.jpg");

  display: flex;
  flex-direction: column;
}
</style>