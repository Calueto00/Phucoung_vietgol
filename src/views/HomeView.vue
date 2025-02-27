<script setup>
import Header from '../components/Header.vue';
import Services from '@/components/Services.vue';
import Activities from '@/components/Activities.vue';
import Projects from '@/components/Projects.vue';


</script>

<template>
 
  <main>
    <Header></Header>
    <!--section about -->
    <section id="About" class="lg:h-[100vh] h-[100vh] flex items-center justify-center pt-5 lg:pt-0 lg:max-w-none lg:px-0 px-5">

      <div class="lg:h-[70vh] h-full lg:max-w-5xl mx-auto w-full grid lg:grid-cols-2 grid-cols-1  lg:gap-6 ">
          <div class="relative w-full lg:h-[67%] h-[49vh] border ">
            <img src="../assets/images/about.jpg" class="w-full h-full object-cover object-top border" alt="">
            <div class="absolute inset-0 z-[1] bg-black w-full h-full opacity-[50%]"></div>
          </div>

          <div class="lg:w-full lg:h-full h-full lg:space-y-6 space-y-3">
            <h2 class="lg:text-sm text-xs text-yellow-500">{{ $t('homeAbout.title')}}</h2>

            <h3 class="lg:text-2xl text-md font-bold">{{ $t('homeAbout.title2')}}</h3>
            <p class="lg:text-base text-sm text-gray-900 text-justify tracking-tighter">
              {{ $t('homeAbout.p1')}}
            </p>
            <p class="lg:text-base text-sm text-gray-900 text-justify tracking-tighter">
              {{ $t('homeAbout.p2')}}
            </p>
            
            <br>
            <router-link to="/about">
              <button class="lg:px-6 px-4 lg:py-3 py-2 bg-yellow-400 hover:scale-110 delay-150 duration-200 
              ease-in-out transition-all shadow-md text-sm lg:text-md">{{ $t('homeAbout.btn')}}</button>
            </router-link>
          </div>
        
      </div>
    </section>
    <!--section about ends over here-->

    <!--section services-->
      <Services />
    <!--ends over here-->

    <!--activities-->
    <Activities />
    <!--ends over here-->

    <Projects/>
    
  </main>

</template>
