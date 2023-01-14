<script setup lang="ts">
import Header from './components/Header/Header.vue';
import AudioPlayer from './Features/AudioPlayer/AudioPlayer.vue';
import Timeline from './Features/Timeline/Timeline.vue';
import LeftPanel from './Features/LeftPanel/LeftPanel.vue';
import RightPanel from './Features/RightPanel/RightPanel.vue';
import { ref } from 'vue';


let theme = ref('');

const changeTheme = (val: boolean) => {
  theme.value = val ? 'dark' : 'light';
}

</script>

<template>
  <div :class="`w-full h-full flex flex-col ${theme}`">
    <div class="w-full h-full overflow-y-auto dark:bg-dark-800 bg-gray-100 relative">
      <Header @on-change-theme="changeTheme"></Header>
      <div class=" flex w-full h-full">
        <div class=" hidden lg:flex lg:flex-col lg:w-4/12 xl:w-3/12 h-full ">
          <LeftPanel></LeftPanel>
        </div>
        <div class="col-span-12 w-full lg:w-8/12 xl:w-8/12 h-full overflow-y-auto">
          <Timeline></Timeline>
        </div>
        <div class=" hidden xl:flex xl:flex-col xl:w-3/12 h-full ">
          <RightPanel></RightPanel>
        </div>
      </div>
      <AudioPlayer></AudioPlayer>
    </div>
  </div>
</template>

<style scoped>

</style>
