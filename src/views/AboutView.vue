<script setup>
    import Business from '@/components/Business.vue';
import { ref } from 'vue';
    const showText = ref(false)
    const btnText = ref('>')
    function textp(){
       if(showText.value == false){
        showText.value = true
        btnText.value = '<'
       }else{
        showText.value = false
        btnText.value = '>'
       }
    }
    
</script>
<template>
    <div>
        <header class="bg-black relative lg:h-[75vh] h-[70vh]">
            <img src="../assets/images/about3.jpg" alt="" class="w-full h-full object-cover object-top">
            <div class="absolute inset-0 bg-black w-full h-full opacity-[70%]"></div>
            <div class="absolute z-[2] inset-0">
                <div class="lg:max-w-5xl mx-auto h-full space-y-4 grid place-items-center">

                    <div class="grid place-items-center lg:h-[50vh]">
                        <h1 class="lg:text-4xl text-xl font-bold text-yellow-500">{{ $t('header.about')}}</h1>
                    </div>

                </div>
            </div>
        </header>

        <div class="lg:h-[70vh] h-full bg-slate-100 lg:pt-10 pt-3 px-7 lg:px-0 mb-7">
            <div class="max-w-5xl mx-auto h-full grid place-items-center">
                <div class="grid lg:grid-cols-2 gap-6">
                    <img src="../assets/images/team.jpg" alt="" class="w-full lg:h-[56%] h-[50vh] object-cover object-center">
                    <div class="lg:space-y-4 space-y-2">
                        <h2 class=" font-bold lg:text-xl text-lg">Phucuong Vietgol Lda</h2>
                        <p class="lg:text-base text-sm text-justify tracking-tighter">
                            {{ $t('about.description.p1') }}
                        </p>

                        <p class="lg:text-base text-sm text-justify tracking-tighter" v-if="showText">
                            {{ $t('about.description.p2') }}
                        </p>

                        <button class="bg-yellow-400 px-6 py-2 delay-150 duration-200 hover:scale-110 transition-all ease-in-out" @click="textp">{{ btnText}}</button>
                    </div>
                    
                    
                </div>
                
            </div>
        </div>

        <!--activities of operactions-->
            <section class="relative lg:h-[60vh] h-[50vh]">
                <img src="../assets/images/according.jpg" class="w-full h-full object-cover" alt="">
                <div class="absolute inset-0 z-[1] bg-black w-full h-full opacity-70"></div>
                <div class="z-10 absolute inset-0 grid place-items-center px-5">
                    <h3 class="text-white font-bold lg:text-3xl text-xl text-center">{{ $t('about.banner') }}</h3>
                </div>
            </section>
        <!--ends over here-->
        <Business/>
        <!--section team-->
        <section class="lg:h-screen bg-slate-100">
            <div class="lg:max-w-5xl mx-auto h-full grid place-items-center lg:px-0 px-7 lg:mb-0 mb-7">
                <div class="lg:h-[85vh] w-full flex flex-col items-center space-y-3">
                    <h2 class="lg:text-3xl text-lg font-bold mb-2">{{ $t('about.team.title')}}</h2>
                   <!--
                    <p class="text-center">
                        Our team's experience spans all aspects of construction, 
                        from residential and commercial projects to large-scale public insfrastructure.
                    </p>
                   --> 
                    <div class=" h-full w-full grid lg:grid-cols-3 grid-cols-2 gap-3">
                        <div class="border h-[230px] w-full relative rounded-md bg-[url(../assets/images/chef1.jpg)] bg-cover bg-no-repeat bg-center">
                            <img src="../assets/images/chef2.jpg" alt="" class="w-full h-full object-fit">
                            <div class="absolute bottom-0 w-full text-center bg-zinc-900">
                                <h3 class="text-white">Đào Quốc Cường</h3>
                                <span class="text-yellow-400 font-bold text-lg">{{ $t('about.team.general')}}</span>
                            </div>
                        </div>
                        <div class="border h-[230px] w-full relative rounded-md">
                            <img src="../assets/images/chef5.jpg" alt="" class="w-full h-full object-fit">
                            <div class="absolute bottom-0 w-full text-center bg-zinc-900">
                                <h3 class="text-white">Benoni</h3>
                                <span class="text-yellow-400 font-bold text-lg">{{ $t('about.team.architect')}}</span>
                            </div>
                        </div>
                        <div class="border h-[230px] w-full relative rounded-md">
                            <img src="../assets/images/gestor.jpg" alt="" class="w-full h-full object-fit">
                            <div class="absolute bottom-0 w-full text-center bg-zinc-900">
                                <h3 class="text-white">NGUYEN HỎNG LINH</h3>
                                <span class="text-yellow-400 font-bold text-lg">{{ $t('about.team.manager')}}</span>
                            </div>
                        </div>
                        <div class="border h-[230px] w-full relative rounded-md ">
                            <img src="../assets/images/chef6.jpg" alt="" class="w-full h-full object-fit">
                            <div class="absolute bottom-0 w-full text-center bg-zinc-900">
                                <h3 class="text-white">Trần Tiến Dũng</h3>
                                <span class="text-yellow-400 font-bold text-lg">{{ $t('about.team.technician')}}</span>
                            </div>
                        </div>
                        <div class="border h-[230px] w-full relative rounded-md ">
                            <img src="../assets/images/chef4.jpg" alt="" class="w-full h-full object-fit">
                            <div class="absolute bottom-0 w-full text-center bg-zinc-900">
                                <h3 class="text-white">Phạm Xuân Cần</h3>
                                <span class="text-yellow-400 font-bold lg:text-lg text-base">{{ $t('about.team.engineer')}}</span>
                            </div>
                        </div>
                        <div class="border h-[230px] w-full relative rounded-md">
                            <img src="../assets/images/chef1.jpg" alt="" class="w-full h-full object-fit">
                            <div class="absolute bottom-0 w-full text-center bg-zinc-900">
                                <h3 class="text-white ">Silva Fernando</h3>
                                <span class="text-yellow-400 font-bold lg:text-lg text-base">{{ $t('about.team.accountant')}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

       
    </div>
</template>