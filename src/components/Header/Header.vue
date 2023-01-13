<script setup lang="ts">
import { reactive, ref } from 'vue';
import Button from '../Buttons/Button.vue';

const test = () => {
  alert('Simple test');
}

const menus = reactive([
  {
    label: 'All',
    link: './',
    active: true
  },
  {
    label: 'Popular Tracks',
    link: './popular-tracks'
  },
  {
    label: 'Albums',
    link: './albums'
  },
  {
    label: 'Playlist',
    link: './playlist'
  },
  {
    label: 'Reports',
    link: './reports'
  },
]);

let activeMenu = ref('./');
let active = ref(false);

</script>

<template>

  <div
    class=" z-10 text-gray-400 fixed w-full right-0 top-0 h-14 dark:bg-dark-600 bg-white p-2 flex items-center justify-between">
    <div class="flex items-center ">
      <Button @on-click="test" class="lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
        </svg>
      </Button>
      <p class="text-2xl ml-2 font-black">Luky<span class="text-blue-400 dark:text-indigo-600 font-bold">Play</span></p>

      <ul class=" hidden lg:flex mx-10 ">
        <li @click="activeMenu = menu.link" v-for="(menu, index) in menus" :key="index"
          class=" relative mx-2 px-1 flex flex-col justify-center items-center cursor-pointer transform transition-transform active:scale-125">
          <!-- <a :href="menu.link" :class="menu.link == activeMenu ? ' text-white font-bold' : ''">{{ menu.label }}</a> -->
          <p :class="menu.link == activeMenu ? ' text-gray-700 dark:text-white font-bold' : ''">{{ menu.label }}</p>
          <div v-if="menu.link == activeMenu"
            class=" absolute top-6 w-2 h-2 bg-orange-500 dark:bg-gray-600 rounded-full"></div>
        </li>
      </ul>

    </div>
    <ul class=" hidden lg:flex mx-10 ">
      <li
        class=" text-sm relative mx-2 px-1 flex justify-center items-center cursor-pointer transform transition-transform active:scale-125">
        Search Music
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-6 h-6 ml-2">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      </li>
      <li @click="active = !active; $.emit('on-change-theme', active)"
        class=" cursor-pointer mx-2 w-15 h-6 dark:bg-dark-900 bg-gray-300 relative rounded-full p-1">
        <div
          :class="`transform transition-all w-4 h-4 rounded-full absolute  ${active ? 'bg-indigo-600 left-8.5' : 'dark:bg-dark-500 bg-white left-1.5'}`">
        </div>

      </li>
      <li class="text-sm font-bold">
        <p>{{ active?'Light': 'Dark' }} Theme</p>
      </li>
    </ul>

  </div>

</template>

<style scoped>

</style>
