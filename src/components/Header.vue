<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Header'
})
</script>

<template>
    <header >
        <div class="nav-logo">
            <img src='../assets/logo.svg' />
        </div>
        <div class="nav-menu"> 
            <ul>
                <li><span>00</span> HOME</li>
                <li><span>01</span> DESTINATION</li>
                <li><span>02</span> CREW</li>
                <li><span>03</span> TECHNOLOGY</li>
            </ul>
        </div>
    </header>
</template>

<style scoped>
header{
    width: 100%;
    padding: 30px 0px;
    display: flex;
    align-items: center;
}
.nav-logo {
    width: 45%;
    display: flex;
    justify-content: start;
    padding: 0px 0px 0px 3%;

    position: relative;
}
.nav-logo::after {
    content: '';
    width: 70%;
    height: 0.0356rem;
    background: white;

    position: absolute;
    right: -20px;
    bottom: 20px;

    opacity: 0.3;
    z-index: 200;
}
.nav-menu {
    width: 55%;
    padding: 10px 5px;
    display: flex;
    position: relative;

    background-color: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    color: white;
}

.nav-menu ul {
    padding: 0px 50px;
    font-size: 0.9rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
}

li {
    cursor: pointer;
    padding: 30px 0px;
    position: relative;
}

li span {
    font-weight: bolder;
}
li:hover::before{
    content: '';
    position: absolute;
    bottom: -10px;
    width: 100%;
    height: 5px;
    background: #FFF;
    opacity: 0.5;
    z-index: 999;
}

</style>