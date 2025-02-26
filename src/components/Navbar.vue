<script setup>
import { onMounted, ref } from 'vue';
const list = document.querySelector('.list')
function showMenu(){
            list.classList.contains('hidden') ? list.classList.remove('hidden') : list.classList.add('hidden')
        }
    onMounted(()=>{
        const menus = ref(document.querySelectorAll('li'))
            menus.value.forEach((item)=>{
                item.addEventListener('mouseover',()=>{
                    item.classList.add('text-white')
                })

                item.addEventListener('mouseout',()=>{
                    item.classList.remove('text-white')
                })
            })
        
    })
</script>
<template>
    <div class="w-full fixed z-50 bg-yellow-400">
        
        <nav class=" lg:max-w-5xl lg:mx-auto flex flex-col lg:flex-row items-center justify-between lg:py-5 px-3">
            
            <div class=" w-full flex items-center justify-between py-4 lg:py-0 lg:px-0 px-7">
                <h1 class="font-extrabold lg:text-2xl ">Phucoung</h1>
                <button @click="showMenu" class="lg:hidden block">menu</button>
            </div>
    
            <ul class="lg:flex lg:flex-row flex-col lg:space-x-6 hidden list lg:text-xl outline-none">
                <li><router-link to="/" class=" delay-150 duration-200 transition-all ease-in-out outline-none">{{ $t('navBar.home')}}</router-link></li>
                <li><router-link to="/about" class=" delay-150 duration-200 transition-all ease-in-out outline-none">{{ $t('navBar.about')}}</router-link></li>
                <li><router-link to="/contact" class=" delay-150 duration-200 transition-all ease-in-out outline-none">{{ $t('navBar.contact')}}</router-link></li>

                <select v-model="$i18n.locale" class="outline-none p-1">
                    <option value="en">En</option>
                    <option value="pt">Pt</option>
                  </select>
            </ul>
    
           
        </nav>
    </div>
</template>