<script lang="ts" setup>
import { slideUp } from '../../animations';
import singer from '../../assets/singer.png'

const favSingers = [
    {
        picture: 'https://images.sk-static.com/images/media/profile_images/artists/556955/large_avatar',
        name: 'Drake'
    },
    {
        picture: 'https://images.sk-static.com/images/media/profile_images/artists/139648/large_avatar',
        name: 'Rihanna'
    },
    {
        picture: 'https://images.sk-static.com/images/media/profile_images/artists/197928/large_avatar',
        name: 'Coldplay'
    },
    {
        picture: 'https://images.sk-static.com/images/media/profile_images/artists/182968/large_avatar',
        name: 'Eminem'
    },
    {
        picture: 'https://images.sk-static.com/images/media/profile_images/artists/181875/large_avatar',
        name: 'Marron 5'
    },
    {
        picture: 'https://images.sk-static.com/images/media/profile_images/artists/2083334/large_avatar',
        name: 'Ed Sheeran'
    },
    {
        picture: 'https://images.sk-static.com/images/media/profile_images/artists/941964/large_avatar',
        name: 'Bruno Mars'
    },

];

const sugestions = [
    {
        picture: 'https://images.sk-static.com/images/media/profile_images/artists/4363463/large_avatar',
        name: 'The Weeknd'
    },
    {
        picture: 'https://images.sk-static.com/images/media/profile_images/artists/537914/large_avatar',
        name: '	Adele'
    },
    {
        picture: 'https://images.sk-static.com/images/media/profile_images/artists/553938/large_avatar',
        name: 'Beyoncé'
    },
    {
        picture: 'https://images.sk-static.com/images/media/profile_images/artists/2596951/large_avatar',
        name: 'Justin Bieber'
    },
    {
        picture: 'https://images.sk-static.com/images/media/profile_images/artists/217815/large_avatar',
        name: 'Taylor Swift'
    },



];



</script>
<template >
    <div class="w-full h-full overflow-y-auto px-5 flex flex-col py-20 dark:text-gray-300 text-gray-700">

        <!-- Main Slider -->
        <div class="w-full h-60 lg:h-90 dark:bg-dark-500 bg-white rounded-lg flex relative mb-10" id="main-slider">
            <!-- Content -->
            <div class="flex flex-col justify-between h-full w-full">
                <div class="p-5 uppercase" id="main-slider-tittle">
                    <p class="text-4xl lg:text-6xl font-bold">Ivan Torrent</p>
                    <p class="text-4xl lg:text-6xl font-bold">Music</p>
                    <p class="text-dark-50">Ivan Torrent, Spain</p>
                </div>

                <div class="p-5 flex flex-col" id="main-slider-progress">
                    <p class="text-2xl font-light">03/<span class="text-blue-400 dark:text-green-500">06</span></p>
                    <div class="w-[80px] h-[2px] bg-gray-300 dark:bg-white flex">
                        <div class="w-2/4 h-full bg-blue-400 dark:bg-green-500"></div>
                    </div>
                </div>
            </div>
            <!-- Image -->
            <div class="w-full flex justify-end relative">
                <img :src="singer" alt=""
                    class="h-[340px]  object-contain object-bottom hidden md:flex bottom-0 absolute">
            </div>

            <!-- Play button -->

            <div class=" group p-3 flex flex-col absolute right-10 -bottom-10 w-[100px] h-[100px]  border border-orange-500 dark:border-green-500 border-opacity-25 rounded-full "
                id="main-slider-play-button">
                <div
                    class=" transform transition-transform group-hover:scale-95 p-3 flex flex-col   w-full h-full  border border-orange-500 dark:border-green-500 border-opacity-25 rounded-full ">
                    <button
                        class="transform transition-transform active:scale-95  group-hover:shadow-md group-hover:shadow-orange-800 dark:group-hover:shadow-green-800 flex justify-center items-center bg-orange-600 dark:bg-green-600 text-white dark:text-gray-800 w-full h-full rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            class="w-6 h-6 group-hover:scale-125 transform transition-transform ">
                            <path fill-rule="evenodd"
                                d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                                clip-rule="evenodd" />
                        </svg>

                    </button>
                </div>
            </div>
        </div>

        <!-- Favorite Artists -->
        <div class="flex flex-col w-full" id="favorite-artists">
            <p class="font-bold">Your favorite artists</p>

            <div class="flex w-full overflow-x-auto py-5 justify-between overflow-y-hidden">
                <div v-for="(item, index) in favSingers" :key="index"
                    class="flex flex-col justify-center items-center mr-8 " :id="'fav_artist_' + index">
                    <!-- Avatar -->
                    <div class="w-18 h-18 bg-dark-400 rounded-full overflow-hidden">
                        <img class="w-full h-full object-cover" :src="item.picture" alt="">
                    </div>
                    <p class="uppercase text-center font-bold mt-2">{{ item.name }}</p>
                </div>

            </div>
        </div>
        <!-- Suggestions -->
        <div class="flex flex-col w-full py-5 ">
            <p class="font-bold" id="suggestions-text">Suggestions based what you've liked or played</p>

            <div class="flex w-full overflow-x-auto py-5 justify-between overflow-y-hidden">
                <div v-for="(item, index) in sugestions" :key="index"
                    class="mr-2 flex flex-col justify-end  min-w-35 h-45 bg-dark-300 rounded-md relative overflow-hidden "
                    :id="'artist_' + index">
                    <img class="w-full h-full absolute object-cover" :src="item.picture">

                    <div class=" text-white w-full flex flex-col z-10 bg-gradient-to-b from-transparent to-black">
                        <p class="p-2 font-bold text-sm">Music name {{ index }}</p>
                        <p class="p-2  text-sm">{{ item.name }}</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script lang="ts">
export default {

    mounted() {
        slideUp([
            { target: '#main-slider' },
            { target: '#main-slider-tittle', endDelay: 200, endPosition: 250 },
            { target: '#main-slider-progress', endDelay: 300, endPosition: 250 },
            { target: '#main-slider-play-button', endDelay: 400, endPosition: 250 },
            { target: '#favorite-artists', endDelay: 500, endPosition: 250 },
            { target: '#fav_artist_0', endDelay: 600, endPosition: 250 },
            { target: '#fav_artist_1', endDelay: 700, endPosition: 250 },
            { target: '#fav_artist_2', endDelay: 800, endPosition: 250 },
            { target: '#fav_artist_3', endDelay: 900, endPosition: 250 },
            { target: '#fav_artist_4', endDelay: 1000, endPosition: 250 },
            { target: '#fav_artist_5', endDelay: 1100, endPosition: 250 },
            { target: '#fav_artist_6', endDelay: 1200, endPosition: 250 },
            { target: '#fav_artist_7', endDelay: 1300, endPosition: 250 },
            { target: '#suggestions-text', endDelay: 1000, endPosition: 250 },
            { target: '#artist_0', endDelay: 1100, endPosition: 350 },
            { target: '#artist_1', endDelay: 1200, endPosition: 350 },
            { target: '#artist_2', endDelay: 1300, endPosition: 350 },
            { target: '#artist_3', endDelay: 1400, endPosition: 350 },
            { target: '#artist_4', endDelay: 1500, endPosition: 350 },
            { target: '#artist_5', endDelay: 1600, endPosition: 350 },
            { target: '#artist_6', endDelay: 1700, endPosition: 350 },
            { target: '#artist_7', endDelay: 1800, endPosition: 350 },
        ]);
    },

}
</script>
<style lang="">
    
</style>