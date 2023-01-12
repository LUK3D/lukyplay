<script lang="ts" setup>
</script>
<template >
    <button @click="$.emit('on-click')"
        class="active:scale-95 transition-transform transform hover:bg-dark-400 p-1 rounded-md hover:shadow-lg">
        <slot></slot>
    </button>
</template>
<script lang="ts">
export default {

}
</script>
<style l>

</style>