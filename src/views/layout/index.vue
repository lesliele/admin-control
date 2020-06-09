<template>
  <div class="app-wrapper">
    <side-bar class="sidebar-container"></side-bar>
    <div class="main-container">
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
import AppMain from '@/views/layout/components/AppMain.vue';
import SideBar from '@/views/layout/components/sidebar';

export default {
  name: 'layout',
  components: {
    AppMain,
    SideBar
  }
}
</script>

<style scoped>
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
