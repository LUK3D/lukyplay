<script lang="ts" setup>

</script>
<template >
    <div
        class=" flex-col lg:flex-row flex lg:items-center justify-around lg:justify-between  z-10 dark:bg-dark-800 bg-gray-100 border-t dark:text-gray-300 text-gray-700 dark:border-dark-300 border-gray-300 px-5 fixed bottom-0 right-0 w-full h-25 ">


        <div class=" flex items-center justify-between  ">
            <div class="flex items-center">
                <div class="w-12 h-12 dark:bg-dark-500 bg-white rounded-lg overflow-hidden">
                    <img class="w-full h-full object-cover"
                        src="https://images.pexels.com/photos/7086304/pexels-photo-7086304.jpeg?auto=compress&cs=tinysrgb&w=1600"
                        alt="">
                </div>
                <div class="flex flex-col pl-3 lg:w-40 ">
                    <p class="font-bold">Lover</p>
                    <p class="text-sm text-dark-50">Taylor Swift</p>
                </div>
            </div>
            <div class=" flex items-center  lg:w-3/4">
                <Button class="text-indigo-900 dark:text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path
                            d="M9.195 18.44c1.25.713 2.805-.19 2.805-1.629v-2.34l6.945 3.968c1.25.714 2.805-.188 2.805-1.628V8.688c0-1.44-1.555-2.342-2.805-1.628L12 11.03v-2.34c0-1.44-1.555-2.343-2.805-1.629l-7.108 4.062c-1.26.72-1.26 2.536 0 3.256l7.108 4.061z" />
                    </svg>
                </Button>
                <Button
                    class="text-indigo-900 dark:text-gray-600 w-10 h-10 flex justify-center items-center bg-white rounded-full mx-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path fill-rule="evenodd"
                            d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                            clip-rule="evenodd" />
                    </svg>
                </Button>
                <Button class="text-indigo-900 dark:text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path
                            d="M5.055 7.06c-1.25-.714-2.805.189-2.805 1.628v8.123c0 1.44 1.555 2.342 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.342 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256L14.805 7.06C13.555 6.346 12 7.25 12 8.688v2.34L5.055 7.06z" />
                    </svg>

                </Button>

                <p class="mx-2 text-sm text-gray-500">00:00</p>

            </div>
        </div>
        <!-- Progressbar -->
        <div class="w-full h-2 dark:bg-gray-500 bg-gray-300 rounded-lg  relative flex items-center ">
            <div class="w-2/4 h-full bg-green-600  rounded-lg"></div>
            <div
                class="absolute right-2/4 w-4.5 h-4.5 bg-white rounded-full border-2 border-green-600 hover:scale-125 transform transition-transform">
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="">
    
</style>