<template>
  <Header />
  <div class="main_layout">
    <SideBar /><PagesBlock /><router-view></router-view>
  </div>
  <footer />
</template>

<script lang="ts" setup>
import SideBar from "../components/SideBar.vue";
import PagesBlock from "../components/PagesBlock.vue";
import Header from "../components/Header.vue";
</script>

<style lang="scss">
.main_layout {
  background: var(--main-bg);
}
</style>
