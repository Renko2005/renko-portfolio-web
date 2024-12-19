<script setup>
  import { RouterView } from 'vue-router';
  import Navbar from '@/components/NavBar.vue';
</script>

<template>
  <Navbar />
  <div class="routerView-Container">
    <RouterView />
  </div>
</template>

<style scoped>
  .routerView-Container {
    padding-top: 102px;
    background-color: var(--background-color);
    min-height: calc(100vh - 102px);
  }
</style>
