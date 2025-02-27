<script setup>
</script>

<template>
   <section class="lg:h-[140vh] lg:mb-20 bg-slate-100 lg:px-0 px-5" id="service">
        <div class="lg:h-[100%] lg:max-w-5xl mx-auto lg:py-4">
            <h2 class="font-bold lg:text-3xl text-lg text-center mb-8 pt-4">{{ $t('homeService.title')}}</h2>
            <div class=" lg:h-full grid lg:grid-cols-3 gap-4 mb-5">
                <div class="border shadow-md w-full lg:h-full h-[340px] bg-white transition-all ease-in-out delay-150 hover:scale-105 duration-300">
                    <img src="../assets/images/1.jpg" alt="" class="lg:h-1/2 h-[50%] object-cover w-full">
                    <div class="lg:p-4 space-y-1 p-3">
                        <div class="flex gap-2 items-center">
                            <img src="../assets/icons/construction.svg" alt="" class="lg:w-14 w-12 h-12 lg:h-14">
                            <h3 class="font-bold py-2 lg:text-base text-sm">{{ $t('homeService.s1.title')}}</h3>
                        </div>
                        <div>
                            <p class=" text-slate-800 lg:text-base text-sm text-justify tracking-tighter ">
                                {{ $t('homeService.s1.description')}}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="border shadow-md lg:w-full lg:h-full h-[340px] bg-white transition-all ease-in-out delay-150 hover:scale-105 duration-300">
                    <img src="../assets/images/estrutura.jpg" alt="" class="h-[50%] object-cover w-full">
                    <div class="lg:p-4 space-y-1  px-2">
                        <div class="flex gap-2 items-center">
                            <img src="../assets/icons/urbanize.svg" alt="" class="lg:w-14 w-12 h-12 lg:h-14">
                            <h3 class="font-bold py-2 lg:text-base text-sm">{{ $t('homeService.s2.title')}}</h3>
                        </div>
                          <p class=" text-slate-800  lg:text-base text-sm text-justify tracking-tighter"> 
                            {{ $t('homeService.s2.description')}}
                          </p>
                    </div>
                    
                </div>
                <div class="border shadow-md lg:w-full lg:h-full h-[340px] bg-white transition-all ease-in-out delay-150 hover:scale-105 duration-300">
                    <img src="../assets/images/4.jpg" alt="" class="h-[50%] object-cover w-full">
                    <div class="lg:p-4 space-y-1 p-3">
                       <div class="flex gap-2 items-center">
                        <img src="../assets/icons/renovation.svg" alt="" class="lg:w-14 w-12 h-12 lg:h-14">
                        <h3 class="font-bold py-2 lg:text-base text-sm">{{ $t('homeService.s3.title')}}</h3>
                       </div>
                        <p class=" text-slate-800 lg:text-base text-sm text-justify tracking-tighter">
                            {{ $t('homeService.s3.description')}}
                        </p>
                    </div>
                </div>
                <div class="border shadow-md lg:w-full lg:h-[60%] h-[340px] bg-white transition-all ease-in-out delay-150 hover:scale-105 duration-300">
                    <img src="../assets/images/about.jpg" alt="" class="h-[50%] object-cover object-center w-full">
                    <div class="lg:p-4 space-y-1 p-3">
                        <div class="flex gap-2 items-center">
                            <img src="../assets/icons/manager.svg" alt="" class="lg:w-12 w-12 h-12 lg:h-12">
                            <h3 class="font-bold py-2 lg:text-base text-sm">{{ $t('homeService.s4.title')}}</h3>
                        </div>
                        <p class=" text-slate-800 lg:text-base text-sm lg:text-wrap text-justify tracking-tighter">
                            {{ $t('homeService.s4.description')}}
                        </p>
                    </div>
                </div>
                <div class="border shadow-md w-full lg:h-[60%] pb-2 h-[340px] flex flex-col bg-white transition-all ease-in-out delay-150 hover:scale-105 duration-300">
                    <img src="../assets/images/consulting.jpg" alt="" class="h-[50%] object-cover">
                    <div class="lg:p-4 space-y-1 p-3">
                        <div class="flex gap-2 items-center">
                            <img src="../assets/icons/consulting.svg" alt="" class="lg:w-12 w-12 h-12 lg:h-12">
                            <h3 class="font-bold py-2 lg:text-base text-sm">{{ $t('homeService.s5.title')}}</h3>
                        </div>
                        <p class=" text-slate-800 lg:text-base text-sm text-justify tracking-tighter">
                            {{ $t('homeService.s5.description')}}
                        </p>
                    </div>
                </div>
            </div>
        </div>
   </section>
</template>