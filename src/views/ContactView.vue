<script setup>
    import Navbar from '@/components/Navbar.vue';
</script>
<template>
    <div>
        <header class=" relative lg:h-[70vh] h-[70vh]">
            <img src="../assets/images/3.jpg" alt="" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-black w-full h-full opacity-[70%]"></div>
            <div class="absolute z-[1] inset-0">
                <div class="lg:max-w-5xl mx-auto h-full space-y-4">


                    <div class="grid place-items-center lg:h-full h-full">
                        <h1 class="lg:text-4xl text-xl font-bold text-yellow-400">{{ $t('header.contact')}}</h1>
                    </div>

                </div>
            </div>
        </header> 
        <section class="lg:h-[60vh] h-[80vh] lg:px-0 px-5">
            <div class="max-w-5xl mx-auto h-full lg:grid lg:place-items-center lg:pt-0 pt-8">
                <div class="lg:border-t grid lg:grid-cols-3 grid-cols-1 space-y-4 lg:space-y-0 gap-2 w-full lg:h-1/2">
                    <div class=" w-full h-full rounded-md flex flex-col items-center justify-center space-y-2">
                        <img src="../assets/icons/call.svg" alt="" class="lg:w-12 lg:h-12 w-10">
                        <h3 class="font-bold lg:text-md text-sm">{{ $t('contact.phone.call.title')}}</h3>
                        <p class="text-slate-800 text-center lg:text-lg text-md">{{ $t('contact.phone.call.description')}}</p>
                        <span class="">(+244) 947445789</span>
                    </div>
                    <div class=" w-full border-x h-full rounded-md flex flex-col items-center justify-center space-y-2">
                        <img src="../assets/icons/email.svg" alt="" class="lg:w-12 lg:h-12 w-10">
                        <h3 class="font-bold lg:text-md text-sm">{{ $t('contact.phone.email.title')}}</h3>
                        <p class="text-slate-800 lg:text-lg text-md">{{ $t('contact.phone.email.description')}}</p>
                        <a href="phucuongvietgol@gmail.com" class="text-blue-800">phucuongvietgol@gmail.com</a>
                    </div>
                    <div class=" w-full h-full rounded-md flex flex-col items-center justify-center">
                        <img src="../assets/icons/whatsap.svg" alt="" class="lg:w-12 lg:h-12 w-10">
                        <h3 class="font-bold lg:text-lg text-md">WhatsApp</h3>
                        <p class="text-slate-800 w-full text-center lg:text-md text-sm">{{ $t('contact.phone.whatsap.description')}}</p>
                        <span>(+244) 943278888</span>
                    </div>
                </div>
            </div>
        </section>

        <section class="lg:h-[80vh] h-[66vh]  relative">
            <div class="grid lg:grid-cols-2 grid-cols-2 h-full">
                <img src="../assets/images/4.jpg" class="w-full h-full object-cover" alt="">
                <div class=" w-full h-full bg-zinc-800"></div>
            </div>
            <form action="https://formsubmit.co/phucuongvietgol@gmail.com" method="post" class=" 
            lg:h-[80%] lg:w-1/2 w-[80%] space-y-2 shadow p-4 bg-white absolute z-[1] lg:top-14 top-14 lg:right-[25%] right-12 outline-none">
            <h3 class="text-xl font-bold">Contact Us</h3>
                <div class=" w-full">
                    <label for="name">{{ $t('contact.form.name') }}:</label>
                    <input type="text" name="name" placeholder="name..." class=" p-2 w-full border outline-none shadow ">
                </div>
                <div class=" w-full">
                    <label for="email">{{ $t('contact.form.email') }}:</label>
                    <input type="email" name="email" placeholder="email..." class=" p-2  w-full border outline-none shadow">
                </div>
                <div class=" w-full">
                    <label for="mensagem">{{ $t('contact.form.message') }}:</label>
                   <textarea class="p-2 w-full border lg:h-[100px] h-1/2 outline-none shadow"  name="mensagem" id="mensagem" placeholder="Message..."></textarea>
                </div>
                <button type="submit" class="bg-yellow-400 px-7 py-3 text-start transition delay-150 duration-300 hover:scale-110 ease-in-out">{{ $t('contact.form.btn') }}</button>
            </form>
        </section>
        
    </div>
</template>