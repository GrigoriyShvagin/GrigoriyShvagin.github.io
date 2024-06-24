<template>
  <Header />
  <div class="main_layout">
    <div class="layout_content">
      <SideBar :allFiles="allFiles" />
      <div class="pages_block">
        <PagesBlock :allFiles="allFiles" /><router-view
          class="content_page"
        ></router-view>
      </div>
    </div>
  </div>
  <footer />
</template>

<script lang="ts" setup>
import SideBar from "../components/SideBar.vue";
import PagesBlock from "../components/PagesBlock.vue";
import Header from "../components/Header.vue";
import { useAllFilesStore } from "../store";

const allFiles = useAllFilesStore().allFiles;
</script>

<style lang="scss">
.content_page {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.main_layout {
  background: var(--main-bg);
}
.layout_content {
  display: flex;
  .pages_block {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
}
</style>
