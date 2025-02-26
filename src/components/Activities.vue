
<script setup>
  import { ref, onMounted, onUnmounted } from 'vue'

  
</script>
  
<template>
    <div class="lg:h-[60vh] h-[50vh] w-full relative lg:mb-0 mb-10">
      <img src="../assets/images/2.jpg" alt="" class="w-full h-full object-cover">
      <div class="absolute inset-0 z-[1] h-full w-full bg-black opacity-75"></div>
      <div class="absolute z-10 inset-0 w-full h-full grid place-items-center text-center">
        <div class="h-1/2 lg:w-1/2 text-white space-y-3 px-7 lg:px-0">
          <h3 class="font-bold lg:text-3xl text-md"> {{ $t('homeActivity.title') }} <br> {{ $t('homeActivity.title2') }}</h3>
          <p class="mt-4 text-gray-200 lg:text-md text-sm">
            {{ $t('homeActivity.description') }}
          </p>
          <button class="pt-2 hover:scale-110 transition-all ease-in-out duration-200 delay-150">
            <router-link to="/contact" class="lg:px-6 lg:text-md text-sm px-4 py-2 lg:py-3 bg-yellow-400 text-black">{{ $t('btnContact')}}</router-link>
          </button>
        </div>
      </div>
    </div>
  </template>
  
  