<script lang="ts" setup>import { slideLeft } from '../../animations';


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


const playlist = [
    'Collin McLoughlln',
    'Ivan Torrent - "Crystalline"',
    'Collin McLoughlln',
    'The Rain Must Fall Yanni Cover',
    'Ivan Torrent - "La Danse de..."',
];

</script>
<template>
    <div class="w-full h-full  pb-30 pt-20 px-5 flex flex-col  overflow-y-auto" id="right-panel">
        <div
            class=" dark:text-indigo-600 text-orange-400 w-full  dark:bg-dark-500 bg-blue-400 rounded-lg flex flex-col justify-center items-center p-12">
            <div class="w-10 h-10 dark:bg-dark-800 bg-gray-100 flex justify-center items-center rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path fill-rule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clip-rule="evenodd" />
                </svg>
            </div>
            <p class="text-center dark:text-gray-300 text-white dark:text-gray-400">Get 6 Months of premium for</p>
            <p class="dark:text-gray-300 text-white dark:text-gray-400 text-6xl font-black my-2">$10</p>
            <p class="text-center text-white dark:text-gray-400 text-sm">Get 6 Months of premium for</p>
        </div>
        <div class="flex flex-col items-center dark:text-gray-300 text-white dark:text-gray-400">


            <div class=" w-full flex justify-between my-10 rounded-lg dark:bg-dark-500 bg-white">
                <div
                    class="bg-yellow-500 dark:bg-indigo-600 w-full p-2 rounded-lg text-center mr-2 flex items-center justify-center">
                    <p class="text-sm font-bold text-white">Listening History</p>
                </div>
                <div class="dark:bg-dark-500 bg-white text-dark-50 w-full p-2 rounded-lg text-center ml-2">
                    <p class="text-sm  text-sm">Popular Tracks</p>
                </div>
            </div>
            <div class="flex flex-col justify-start w-full p-4 dark:bg-dark-500 bg-white rounded-lg">
                <ul class="flex flex-col">
                    <li v-for="(item, index) in playlist" :key="index"
                        class=" mb-5 flex text-gray-800 dark:text-dark-50">
                        <div class="w-[50px] h-[40px] dark:bg-dark-800 bg-gray-100 mr-2">

                        </div>
                        <div class="w-full flex flex-col">
                            <p class="w-full text-sm">{{ item }}</p>
                            <div class="flex justify-between items-center">
                                <div class="flex justify-center items-center text-gray-400 dark:text-dark-50">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                        class="w-4 h-4">
                                        <path fill-rule="evenodd"
                                            d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    <p class="text-sm">157K</p>
                                </div>
                                <div class="flex justify-center items-center text-gray-400 dark:text-dark-50">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                        class="w-4 h-4">
                                        <path
                                            d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                                    </svg>

                                    <p class="text-sm">2,985</p>
                                </div>
                                <div class="flex justify-center items-center text-gray-400 dark:text-dark-50">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                        class="w-4 h-4">
                                        <path fill-rule="evenodd"
                                            d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z"
                                            clip-rule="evenodd" />
                                    </svg>

                                    <p class="text-sm">1,259</p>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
export default {
    mounted() {
        slideLeft([

            { target: '#right-panel', endDelay: 1600, endPosition: 550 },
        ]);
    },
}
</script>
<style >

</style>