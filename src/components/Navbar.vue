<script setup>
import { onMounted, ref } from 'vue';


const list = ref(null);
const menus = ref([]);

function showMenu(e) {
    const icon = e.target;
    if (icon.name === 'menu') {
        icon.name = 'close';
    } else {
        icon.name = 'menu';
    }
    list.value.classList.toggle('hidden');
}

onMounted(() => {
    list.value = document.querySelector('.list');
    menus.value = document.querySelectorAll('li');

    menus.value.forEach((item) => {
        item.addEventListener('mouseover', () => {
            item.classList.add('text-white');
        });

        item.addEventListener('mouseout', () => {
            item.classList.remove('text-white');
        });
    });
});
</script>

<template>
    <div class="w-full fixed z-50 bg-yellow-400">
        <nav class="lg:max-w-5xl lg:mx-auto flex flex-col lg:flex-row items-center justify-between lg:py-5 px-3">
            <div class="w-full flex items-center justify-between py-4 lg:py-0 lg:px-0 px-5">
                <h1 class="font-extrabold lg:text-2xl">Phucoung</h1>
                <ion-icon class="lg:hidden text-3xl border-yellow-400 shadow-lg border-2 rounded-full p-1 hover:scale-110 
                transition delay-150 duration-300 ease-in cursor-pointer" name="menu" @click="showMenu"></ion-icon>
                
            </div>
            <ul ref="list" class="lg:flex lg:flex-row flex-col lg:space-x-6 hidden list lg:text-xl outline-none w-full lg:w-1/2">
                <li class=" lg:shadow-none shadow text-center lg:py-0 py-2"><router-link to="/" class="w-full delay-150 duration-200 transition-all ease-in-out outline-none ">{{ $t('navBar.home') }}</router-link></li>
                <li class=" lg:shadow-none shadow-md text-center lg:py-0 py-2"><router-link to="/about" class="w-full delay-150 duration-200 transition-all ease-in-out outline-none">{{ $t('navBar.about') }}</router-link></li>
                <li class=" lg:shadow-none shadow-md text-center lg:py-0 py-2"><router-link to="/contact" class="w-full delay-150 duration-200 transition-all ease-in-out outline-none">{{ $t('navBar.contact') }}</router-link></li>
                <select v-model="$i18n.locale" class="outline-none ">
                    <option value="en">En</option>
                    <option value="pt">Pt</option>
                </select>
            </ul>
        </nav>
    </div>
</template>