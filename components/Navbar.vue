<template>
    <nav class="max-w-70 mx-auto py-3.5 px-2 font-Archivo-Regular">

        <div class="flex justify-between items-center lg:hidden">
            <img src="/icons/hambuger-menu.svg" alt="Hambuger open icon" v-if="!open" @click="menuOpen">
            <img src="/icons/hambuger-menu-close.svg" alt="Hambuger close icon" v-else @click="menuOpen">
            <NuxtLink to="/">
                <img src="/icons/logo.svg" alt="Company logo">
            </NuxtLink>
            <div class="flex gap-4 items-center">
                <img src="/icons/search-icon.svg" alt="Search icon">
                <img src="/icons/basket-icon.svg" alt="Basket icon">
            </div>
        </div>



        <div class="lg:flex lg:justify-between lg:items-center lg:px-0 px-3 lg:pb-0 pb-8 left-0 lg:w-auto w-full lg:static absolute h-full bg-white
            duration-500 lg:duration-0 ease-in" :class="[open ? 'top-16' : 'top-[-100%]']">

            <ul class="lg:flex text-center">
                <li class="lg:mx-4 lg:my-0 my-6" v-for="(link, index) in navigationLeft" :key="index">
                    <NuxtLink :to="link.link">
                        {{ link.name }}
                    </NuxtLink>
                </li>
            </ul>

            <NuxtLink to="/">
                <img src="/icons/logo.svg" alt="Company logo" class="hidden lg:block">
            </NuxtLink>

            <ul class="lg:flex">
                <li class="flex justify-center gap-2 items-center lg:mx-4 lg:my-0 my-6"
                    v-for="(link, index) in navigationRigth" :key="index">
                    <img :src="link.icon" alt="">
                    <NuxtLink :to="link.link">
                        {{ link.name }}
                    </NuxtLink>
                </li>
            </ul>
        </div>
        <hr class="mt-3">

    </nav>
</template>

<script>
import { ref } from 'vue';
export default {

    setup() {

        let open = ref(false)

        let navigationLeft = [
            { name: 'Men', link: '/men' },
            { name: 'Women', link: '/women' },
            { name: 'Kids', link: '/kids' },
            { name: 'Collection', link: '/collection' },
        ];

        let navigationRigth = [
            { name: 'Shop', link: '/shop' },
            { name: 'About Us', link: '/about' },
            { name: 'Account', icon: '/icons/person-icon.svg', link: '/account' },
            { name: 'Cart', link: '/cart' },
            { name: '', icon: '/icons/search-icon.svg' },
        ];


        function menuOpen() {
            open.value = !open.value
        }

        return { navigationLeft, navigationRigth, open, menuOpen }
    }

}
</script>

<style></style>