<script lang="ts" setup></script>
<template >
    <div class="w-full h-full overflow-y-auto px-5 flex flex-col pt-20 text-gray-300">

        <!-- Main Slider -->
        <div class="w-full h-60 bg-dark-500 rounded-lg flex relative mb-10">
            <!-- Content -->
            <div class="flex flex-col justify-between h-full">
                <div class="p-5 uppercase">
                    <p class="text-4xl font-bold">Ivan Torrent</p>
                    <p class="text-4xl font-bold">Music</p>
                    <p class="text-dark-50">Ivan Torrent, Spain</p>
                </div>

                <div class="p-5 flex flex-col">
                    <p class="text-2xl font-light">03/<span class="text-green-500">06</span></p>
                    <div class="w-[80px] h-[2px] bg-white flex">
                        <div class="w-2/4 h-full bg-green-500"></div>
                    </div>
                </div>
            </div>
            <!-- Image -->
            <div></div>

            <!-- Play button -->

            <div
                class=" group p-3 flex flex-col absolute right-10 -bottom-10 w-[100px] h-[100px]  border border-green-500 border-opacity-25 rounded-full ">
                <div
                    class=" transform transition-transform group-hover:scale-95 p-3 flex flex-col   w-full h-full  border border-green-500 border-opacity-25 rounded-full ">
                    <button
                        class="transform transition-transform active:scale-95  group-hover:shadow-md group-hover:shadow-green-800 flex justify-center items-center bg-green-600 w-full h-full rounded-full">
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
        <div class="flex flex-col w-full">
            <p class="font-bold">Your favorite artists</p>

            <div class="flex w-full overflow-x-auto py-5 justify-between">
                <div v-for="(item, index) in [0, 1, 2, 3]" :key="index"
                    class="flex flex-col justify-center items-center mr-8">
                    <!-- Avatar -->
                    <div class="w-18 h-18 bg-dark-400 rounded-full overflow-hidden">
                        <img class="w-full h-full object-cover"
                            src="https://images.pexels.com/photos/7086304/pexels-photo-7086304.jpeg?auto=compress&cs=tinysrgb&w=1600"
                            alt="">
                    </div>
                    <p class="uppercase text-center font-bold mt-2">Sia</p>
                </div>

            </div>
        </div>
        <!-- Suggestions -->
        <div class="flex flex-col w-full py-5">
            <p class="font-bold">Suggestions based what you've liked or played</p>

            <div class="flex justify-between w-full overflow-x-auto py-5">
                <div v-for="(item, index) in [0, 1, 2, 3]" :key="index"
                    class="mr-2 flex flex-col justify-end  w-35 h-45 bg-dark-300 rounded-md relative overflow-hidden ">
                    <img class="w-full h-full absolute object-cover"
                        src="https://images.pexels.com/photos/949274/pexels-photo-949274.jpeg?auto=compress&cs=tinysrgb&w=1600">

                    <div class="w-full flex flex-col z-10 bg-gradient-to-b from-transparent to-black">
                        <p class="p-2 font-bold text-sm">For you</p>
                        <p class="p-2  text-sm">Selena Gomez</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script lang="ts">
export default {

}
</script>
<style lang="">
    
</style>