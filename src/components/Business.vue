<script setup>
import { onMounted, ref } from 'vue';

onMounted(()=>{
    const views = ref(document.querySelectorAll('.itemView'))
    const activeView = ref(0)
    const countView = ref(views.value.length)
    const nextView = ref(document.querySelector('.nextView'))

        nextView.value.onclick = ()=>{
            activeView.value += 1;
            if(activeView.value >= countView.value){
                activeView.value = 0;
            } 
            console.log(activeView.value)
            showView();
        }

       function showView(){
        let oldView = ref(document.querySelector('.z-20'))
            oldView.value.classList.remove('z-20')
            views.value[activeView.value].classList.add('z-20')
       }
})
</script>

<template>
   <section class="lg:h-[70vh]  lg:py-8 lg:mt-0 mt-4 px-5 lg:px-0">
        <div class="max-w-5xl mx-auto lg:h-full h-[79vh] lg:grid lg:place-items-center relative">
           
                    <div class="h-full w-full flex absolute lg:flex-row flex-col items-center justify-center z-20 itemView pb-6">
                        <img src="../assets/images/business3.jpg" class="lg:w-1/2 w-full lg:h-full h-1/2 object-cover" alt="">
                        <div class="lg:space-y-4 lg:h-full lg:w-1/2 h-1/2 lg:px-2 px-0 lg:pt-0 space-y-2 pt-3 bg-white lg:text-justify flex flex-col lg:items-center lg:justify-center">
                            <h3 class="lg:text-2xl text-lg font-bold">
                                {{ $t('business.b1.title') }}
                            </h3>
                            <p class="lg:text-base lg:p-2 text-sm text-justify">
                                {{ $t('business.b1.description') }}
                            </p>
                            <br class="hidden lg:block">

                            <router-link to="/contact" class="text-center">
                               <button class="bg-yellow-400 lg:px-8 px-4 py-2 lg:py-4 shadow-md hover:scale-110 delay-150 transition-all duration-300 ease-in-out"> {{ $t('business.b1.btn') }}</button>
                            </router-link>
                        </div>
                    </div>
                    <div class="h-full w-full flex absolute lg:flex-row flex-col lg:items-center lg:justify-center itemView">
                        <img src="../assets/images/about1.jpg" class="lg:w-1/2 w-full lg:h-full h-1/2 object-cover object-center" alt="">
                        <div class="lg:space-y-4 lg:w-1/2 lg:h-full h-1/2 lg:pt-0 space-y-2 pt-3 bg-white lg:text-center flex flex-col lg:items-center lg:justify-center">
                            <h3 class=" font-bold lg:text-center lg:text-lg text-base">{{ $t('business.b2.title') }}</h3>
                            <p class="lg:text-lg lg:p-2 text-sm text-justify show">
                                {{ $t('business.b2.description') }}
                            </p>
                        </div>
                    </div>
                    <div class="h-full w-full flex absolute lg:flex-row flex-col lg:inset-0 lg:items-center lg:justify-center itemView">
                        <img src="../assets/images/teamconsulting.jpg" class="lg:w-1/2 w-full lg:h-full h-1/2 object-cover object-center" alt="">
                        <div class="lg:space-y-4 lg:w-1/2 lg:h-full h-1/2 lg:px-2 px-0 lg:pt-0 space-y-2 pt-3 bg-white lg:text-center flex flex-col lg:items-center lg:justify-center">
                            <h3 class=" font-bold lg:text-center lg:text-lg text-base">{{ $t('business.b3.title') }}</h3>
                            <p class="lg:text-lg lg:p-2 text-sm text-justify  show">
                                {{ $t('business.b3.description') }}
                            </p>
                        </div>
                    </div>
                    <div class="h-full w-full flex absolute lg:flex-row flex-col lg:inset-0 lg:items-center lg:justify-center itemView">
                        <img src="../assets/images/operation.jpg" alt="" class="lg:w-1/2 w-full lg:h-full h-1/2 object-cover object-center">
                        <div class="lg:space-y-4 lg:w-1/2 lg:h-full h-1/2 lg:px-2 px-0 lg:pt-0 space-y-2 pt-3 bg-white lg:text-center flex flex-col lg:items-center lg:justify-center">
                            <h3 class=" font-bold lg:text-center lg:text-lg text-base">{{ $t('business.b4.title') }}</h3>
                            <p class="lg:text-lg lg:p-2 text-sm text-justify  show">
                                {{ $t('business.b4.description') }}
                            </p>
                        </div>
                    </div>
                    <div class="h-full w-full flex absolute lg:flex-row flex-col lg:inset-0 lg:items-center lg:justify-center itemView">
                        <img src="../assets/images/4.jpg" alt="" class="lg:w-1/2 w-full lg:h-full h-1/2 object-cover object-center">
                        <div class="lg:space-y-4 lg:w-1/2 lg:h-full h-1/2 lg:px-2 px-0 lg:pt-0 space-y-2 pt-3 bg-white lg:text-center flex flex-col lg:items-center lg:justify-center">
                            <h3 class=" font-bold lg:text-center lg:text-lg text-base">{{ $t('business.b5.title') }}</h3>
                            <p class="lg:text-lg lg:p-2 text-sm text-justify">
                                {{ $t('business.b5.description') }}
                            </p>
                        </div>
                    </div>

                    <button class="nextView absolute z-30 bg-black text-white lg:text-5xl lg:px-6 px-5 lg:bottom-0 lg:left-[50%] 
                    transition-all ease-in-out delay-150 duration-200 hover:scale-105 bottom-[12%] left-[89%]">
                        >
                    </button>
               
        </div>
   </section>
</template>