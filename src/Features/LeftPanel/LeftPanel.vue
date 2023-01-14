<script lang="ts" setup>import { slideLeft, slideUp } from '../../animations';


const menus = [
    {
        label: 'Music',
    },
    {
        label: 'Shows',
    },
    {
        label: 'Explore',
    },
    {
        label: 'Favorites',
    },
    {
        label: 'Favorites Tracks',
    },
    {
        label: 'Playlist',
    },
    {
        label: 'Albums',
    },
    {
        label: 'Artists',
    },
];

</script>
<template>
    <div class="w-full h-full pb-30 pt-20 px-5 flex flex-col  overflow-y-auto" id="left-panel">
        <div class=" text-orange-600 dark:text-indigo-600 w-full h-[160px] dark:bg-dark-500 bg-white rounded-lg flex justify-center items-center p-10"
            id="music-logo">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-full h-full">
                <path fill-rule="evenodd"
                    d="M19.952 1.651a.75.75 0 01.298.599V16.303a3 3 0 01-2.176 2.884l-1.32.377a2.553 2.553 0 11-1.403-4.909l2.311-.66a1.5 1.5 0 001.088-1.442V6.994l-9 2.572v9.737a3 3 0 01-2.176 2.884l-1.32.377a2.553 2.553 0 11-1.402-4.909l2.31-.66a1.5 1.5 0 001.088-1.442V9.017 5.25a.75.75 0 01.544-.721l10.5-3a.75.75 0 01.658.122z"
                    clip-rule="evenodd" />
            </svg>
        </div>
        <div class="flex flex-col items-center dark:text-gray-300 text-gray-700">
            <p class="text-2xl font-bold mt-3">RAIGN</p>
            <p class="text-sm text-dark-50 my-3">Los Angeles, United States</p>

            <div class="mt-2 w-full flex justify-between">
                <div class="dark:bg-dark-500 bg-gray-200 w-full p-2 rounded-lg text-center mr-2">
                    <p class="text-xl font-bold">256K</p>
                    <p class="text-dark-50 text-sm">Followers</p>
                </div>
                <div class="dark:bg-dark-500 bg-gray-200 w-full p-2 rounded-lg text-center ml-2">
                    <p class="text-xl font-bold">20</p>
                    <p class="text-dark-50 text-sm">Following</p>
                </div>
            </div>
            <div class="flex flex-col justify-start w-full pt-5">
                <p class="font-bold text-blue-400 dark:text-green-600 mb-2">MENU</p>
                <ul class="text-dark-50">
                    <li v-for="(menu, index) in menus" :key="index" class="my-3 cursor-pointer">{{ menu.label }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
export default {
    mounted() {
        slideLeft([

            { target: '#left-panel', endDelay: 1200, endPosition: -550 },
        ]);
    },
}
</script>
<style >

</style>