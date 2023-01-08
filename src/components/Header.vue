<script lang="ts">
import { defineComponent } from 'vue';
import closeIcon from '../assets/home/icon-close.svg';
import hamburgerIcon from '../assets/home/icon-hamburger.svg';

export default defineComponent({
  name: 'Header',
  data() {
    return {
      closeIcon: closeIcon,
      hamburgerIcon: hamburgerIcon,
      isSideNavActive: false,
    };
  },
  methods: {
    showSideMenu() {
      this.isSideNavActive = true;
    },
    hideSideMenu() {
      this.isSideNavActive = false;
    },
  },
});
</script>

<template>
  <header>
    <div class="nav__logo">
      <img src="../assets/logo.svg" />
    </div>
    <div class="nav__menu">
      <ul>
        <li className="nav__item nav__text">
          <router-link to="/">
            <span class="nav__item__number">00</span> HOME
          </router-link>
        </li>
        <li className="nav__item nav__text">
          <router-link to="/destination">
            <span class="nav__item__number">01</span> DESTINATION
          </router-link>
        </li>
        <li className="nav__item nav__text">
          <span class="nav__item__number">02</span> CREW
        </li>
        <li className="nav__item nav__text">
          <span class="nav__item__number">03</span> TECHNOLOGY
        </li>
      </ul>
    </div>
    <div className="nav__menu--side">
      <div
        class="nav__menu__container"
        :class="{ 'nav__menu__container--show': isSideNavActive }"
      >
        <div class="nav__menu__close-btn">
          <button @click="hideSideMenu"><img :src="closeIcon" /></button>
        </div>
        <ul>
          <router-link to="/">
            <li className="nav__item nav__text">
              <span class="nav__item__number">00</span> HOME
            </li>
          </router-link>
          <router-link to="/destination">
            <li className="nav__item nav__text">
              <span class="nav__item__number">01</span> DESTINATION
            </li>
          </router-link>
          <li className="nav__item nav__text">
            <span class="nav__item__number">02</span> CREW
          </li>
          <li className="nav__item nav__text">
            <span class="nav__item__number">03</span> TECHNOLOGY
          </li>
        </ul>
      </div>
      <div class="nav__menu__btn-hamburger" :class="{ hide: isSideNavActive }">
        <button @click="showSideMenu"><img :src="hamburgerIcon" /></button>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.hide {
  display: none;
}
header {
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;

  .nav__logo {
    width: 40%;
    display: flex;
    justify-content: start;

    position: relative;
    &::after {
      content: '';
      width: 89%;
      height: 0.05rem;
      background: white;

      position: absolute;
      right: -30px;
      bottom: 20px;

      opacity: 0.3;
      z-index: 200;

      @include xs {
        display: none;
      }
      @include lg {
        display: inline;
      }
    }
  }

  .nav__menu {
    width: 59%;
    padding: 10px 5px;
    position: relative;
    right: 0px;

    background-color: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    color: white;

    ul {
      display: flex;
      align-items: center;
      justify-content: space-around;

      .nav__item {
        cursor: pointer;
        padding: 30px 0px;
        position: relative;
        letter-spacing: 2.7px;
      }

      .nav__item span {
        font-weight: bolder;
        margin-right: 5px;

        @include md {
          display: none;
        }

        @include lg {
          display: inline;
        }
      }
      .nav__item:hover::before {
        content: '';
        position: absolute;
        bottom: -10px;
        width: 100%;
        height: 5px;
        background: #fff;
        opacity: 0.5;
        z-index: 999;
      }

      @include md {
        width: 100%;
        padding: 0px 10px;
      }
      @include lg {
        width: 79%;
        padding: 0px 50px;
      }
    }

    @include xs {
      display: none;
    }
    @include md {
      display: flex;
    }
  }

  .nav__menu--side {
    .nav__menu__container {
      position: fixed;
      height: 100vh;
      overflow: hidden;
      transition: 0.5s;

      top: 0px;
      right: -200px;
      width: 0%;

      padding: 30px 20px 10px;

      background-color: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(10px);
      color: white;

      .nav__menu__close-btn {
        display: flex;
        justify-content: end;

        margin-bottom: 50px;

        button {
          background: none;
          border: none;

          &:hover {
            cursor: pointer;
          }
        }
      }
      ul {
        text-align: start;
        li {
          margin-bottom: 3rem;
          .nav__item__number {
            font-weight: bolder;
          }
        }
      }

      @include xs {
        display: block;
      }
      @include md {
        display: none;
      }
    }
    .nav__menu__container--show {
      top: 0px;
      right: 0px;
      width: 60%;
    }
    .nav__menu__btn-hamburger {
      transition: 0.5s;

      button {
        background: none;
        border: none;

        &:hover {
          cursor: pointer;
        }
      }
    }

    @include md {
      display: none;
    }
  }

  @include xs {
    padding: 24px;
  }
  @include md {
    padding: 0px 0px 0px 30px;
  }
  @include lg {
    padding: 30px 0px 30px 50px;
  }
}
</style>
