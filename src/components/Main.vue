<script lang="ts">
import { defineComponent } from 'vue';
import ButtonVue from '/@/components/base/Button.vue';

export default defineComponent({
  name: 'Main',
  components: {
    'v-button': ButtonVue,
  },
});
</script>

<template>
  <main>
    <section class="main__introduction-text">
      <h5 class="heading5">SO, YOU WANT TO TRAVEL TO</h5>
      <h1 class="heading1">SPACE</h1>
      <p class="body-text">
        Let’s face it; if you want to go to space, you might as well<br />
        genuinely go to outer space and not hover kind of on the edge of it.
        Well sit back, and relax because we’ll give you a truly out of this
        world experience!
      </p>
    </section>

    <section className="main__btn">
      <v-button></v-button>
    </section>
  </main>
</template>

<style lang="scss" scoped>
main {
  max-width: 100%;
  display: flex;
  align-items: center;
  padding: 5% 10%;

  color: white;

  .main__introduction-text {
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

  .body-text {
    @include xs {
      display: none;
    }
    @include md {
      display: block;
    }
  }

  .main__btn {
    margin-top: 12rem;
    @include md {
      margin-top: 0;
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
