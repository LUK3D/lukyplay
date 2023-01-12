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

</script>

<template>

  <div class=" text-gray-400 fixed w-full right-0 top-0 h-14 bg-dark-600 p-2 flex items-center justify-between">
    <div class="flex items-center">
      <Button @on-click="test" class="lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
        </svg>
      </Button>
      <p class="text-2xl ml-2 font-black">Luky<span class="text-indigo-600 font-bold">Play</span></p>

      <ul class="flex mx-10">
        <li @click="activeMenu = menu.link" v-for="(menu, index) in menus" :key="index"
          class=" relative mx-2 px-1 flex flex-col justify-center items-center cursor-pointer transform transition-transform active:scale-125">
          <!-- <a :href="menu.link" :class="menu.link == activeMenu ? ' text-white font-bold' : ''">{{ menu.label }}</a> -->
          <p :class="menu.link == activeMenu ? ' text-white font-bold' : ''">{{ menu.label }}</p>
          <div v-if="menu.link == activeMenu" class=" absolute top-6 w-2 h-2 bg-gray-600 rounded-full"></div>
        </li>
      </ul>
    </div>
  </div>

</template>

<style scoped>

</style>
