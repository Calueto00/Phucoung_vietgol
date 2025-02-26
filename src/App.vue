<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
</script>

<template>
 
  <main class="relative">
      <Navbar /> 
    <RouterView />
    <Footer />

    <a href="https://wa.me/+244947445789?text" target="_blank" 
    class="fixed top-[66%] z-50 right-[10%] lg:w-[7%] lg:h-[7%] w-16 h-16 hover:scale-110 delay-75 transition-all duration-200">
      <img src="./assets/icons/what_home.svg" alt="" class="">
    </a>
  </main>

</template>


