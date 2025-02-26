<script setup>
import { onMounted, ref } from 'vue';


onMounted(()=>{
        
    let currentView = ref(0)
     const nextButton = ref(document.querySelector('.Next'))
     const imageViews = ref(document.querySelectorAll('.imgView'))

        nextButton.value.onclick = () =>{
            currentView.value = (currentView.value + 1) % imageViews.value.length;

            updateView();
        }

        function updateView(){
            imageViews.value.forEach((view) =>{
                view.classList.remove('z-10')
            });
           imageViews.value[currentView.value].classList.add('z-10')
        }
    })
</script>
<template>
    <div class="max-w-5xl mx-auto lg:h-[80vh] h-[70vh] lg:grid lg:place-items-center relative px-7 lg:px-0">
        <div class=" w-full h-[60vh] grid lg:grid-cols-2 grid-cols-1 lg:h-[60vh] gap-2 ">
            <div class="w-full lg:h-full h-[35vh] relative border">
                <div class="bg-black opacity-30 absolute z-20 inset-0"></div>
                <img class="h-full w-full object-cover absolute z-10 imgView " src="../assets/images/ipotec.jpg" alt="">
                <img class="h-full w-full object-cover absolute imgView" src="../assets/images/ipotec2.jpg" alt="">
                <img class="h-full w-full object-cover absolute imgView" src="../assets/images/esquadra.jpg" alt="">
                <img class="h-full w-full object-cover absolute imgView" src="../assets/images/esquadra2.jpg" alt="">
                <img class="h-full w-full object-cover absolute imgView" src="../assets/images/escola.jpg" alt="">
                <img class="h-full w-full object-cover absolute imgView" src="../assets/images/escola1.jpg" alt="">
                <img class="h-full w-full object-cover absolute imgView" src="../assets/images/salon.jpg" alt="">
                <img class="h-full w-full object-cover absolute imgView" src="../assets/images/salon2.jpg" alt="">
            </div>
            <div class="w-full lg:h-full h-full lg:p-4 space-y-3 flex flex-col justify-center">
                <h3 class="lg:text-2xl text-xl font-bold">{{ $t('homeProject.title')}}</h3>
                <p class="lg:text-lg text-md">
                    {{ $t('homeProject.description')}}
                </p>
            </div>

            
        </div>
        <button class="Next lg:px-7 px-2 lg:py-2 bg-yellow-400 transition-all lg:right-[43%] lg:bottom-16 bottom-[50%] z-30
            duration-200 delay-150 hover:scale-110 absolute text-3xl">></button>
    </div>
</template>