<script lang="ts">
import { defineComponent } from 'vue';
import ButtonVue from '/@/components/UI/Button.vue';

export default defineComponent({
  name: 'Main',
  components: {
    'v-button': ButtonVue,
  },
});
</script>

<template>
  <main>
    <section class="main-text-group">
      <span class="heading5" role="h5"> SO, YOU WANT TO TRAVEL TO </span>
      <span class="heading1" role="h1"> SPACE </span>
      <span class="main-description body-text" role="p">
        Let’s face it; if you want to go to space, you might as well<br />
        genuinely go to outer space and not hover kind of on the edge of it.
        Well sit back, and relax because we’ll give you a truly out of this
        world experience!
      </span>
    </section>

    <section class="main-btn-section">
      <v-button></v-button>
    </section>
  </main>
</template>

<style lang="scss" scoped>
main {
  max-width: 100%;
  display: flex;
  padding: 5% 10%;

  color: white;

  .main-text-group {
    display: flex;
    flex-direction: column;

    @include xs {
      & > span:nth-child(2) {
        margin-top: -30px;
        margin-bottom: 300px;
      }
    }

    @include md {
      max-width: 100%;
      padding: 3% 17% 15%;

      & > span:nth-child(2) {
        margin-top: 0px;
        margin-bottom: 0px;
      }
    }

    @include lg {
      width: 40%;
      text-align: start;
      padding: 0px;
    }
  }

  .main-description {
    @include xs {
      display: none;
    }
    @include md {
      display: block;
    }
  }

  @include xs {
    flex-direction: column;
  }

  @include lg {
    justify-content: space-between;
    flex-direction: row;
    align-items: flex-end;
  }
}
</style>
