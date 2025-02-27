<script setup>
import { onMounted, ref } from 'vue';


onMounted(()=>{
    const items = ref(document.querySelectorAll('.item'))
    const activeItem = ref(0)
    let countItem = ref(items.value.length)

    const next = ref(document.querySelector('.next'))
    const preview = ref(document.querySelector('.preview'))

   
   next.value.onclick = ()=>{
        activeItem.value += 1;
        if(activeItem.value >= countItem.value){
            activeItem.value = 0;
        }
        showSlider();
    }

    preview.value.onclick = () =>{
        activeItem.value -= 1;
        if(activeItem.value < 0){
            activeItem.value = countItem.value -1;
        }
        showSlider();
    }

    function showSlider(){
            let oldActiveItem = ref(document.querySelector('.z-10'))
            oldActiveItem.value.classList.remove('z-10')
            items.value[activeItem.value].classList.add('z-10')
    }

   
})

</script>
<template>
    <div class="lg:h-screen relative w-full h-[80vh]">
        
        <img class="lg:h-full lg:w-full h-full object-fit absolute z-10 item" src="../assets/images/2.jpg" alt="">
        <img class="lg:h-full lg:w-full h-full object-fit absolute item" src="../assets/images/3.jpg" alt="">
        <img class="lg:h-full lg:w-full h-full object-fit absolute item" src="../assets/images/4.jpg" alt="">
        <div class="bg-black absolute inset-0 opacity-[80%]  z-20 h-full"></div>
        <div class=" absolute z-30 inset-0">
            <div class=" lg:h-full max-w-5xl mx-auto space-y-6 lg:flex flex-col justify-between h-full">
                

                <div class="w-full text-center h-full space-y-4 flex flex-col items-center justify-center">
                
                        <h1 class="lg:text-3xl text-2xl font-extrabold text-white">
                            {{ $t('header.title') }} <br class="lg:hidden">
                            <span class="text-yellow-400">
                                {{ $t('header.title2') }}
                            </span>
                        </h1>
                        <p class="lg:text-xl text-sm px-5 lg:px-0 text-zinc-300">
                            {{ $t('header.description') }}
                        </p>

                        <div>
                            <button class="bg-yellow-400 lg:px-6 px-4 py-2 lg:py-3 transition-all ease-in-out delay-150 hover:scale-105 duration-300">
                                <a href="#service" class="lg:text-base text-sm">{{ $t('header.btnService')}}</a>
                            </button>
                            
                        <button class="transition-all ease-in-out delay-150 hover:scale-110 duration-300  lg:px-6 lg:py-3 px-4 py-2 mx-3 bg-white">
                            <router-link to="/contact" class=" lg:text-base text-sm">{{ $t('btnContact')}}</router-link>
                        </button>
                            
                        </div>
                   
                </div>
                <div class="text-white my-6 absolute space-x-6 lg:space-x-0 lg:top-[40%] top-[75%] max-w-5xl w-full flex justify-center lg:justify-between z-40">
                    <button class="preview text-5xl font-bold hover:scale-125 hover:text-yellow-400 delay-150 duration-200 transition-all ease-in-out">
                        <
                    </button>
                    <button class="next text-5xl font-bold hover:scale-125 hover:text-yellow-400 delay-150 duration-200 transition-all ease-in-out">
                            >
                    </button>
                </div>
                
            </div>
        </div>
    </div>
</template>