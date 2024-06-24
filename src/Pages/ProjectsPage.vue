<template>
  <div class="projects_content">
    <div class="gh_block" v-for="item in useFilesStore.myProjects">
      {{ item }}
    </div>
    <div class="header">My most valuable projects:</div>
    <div class="projects_list">
      <div class="project" v-for="item in myProjects"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useAllFilesStore } from "../store";

const myProjects = {
  chemBase: {
    data: "Jan24-May24",
    link: "https://github.com/GrigoriyShvagin/chem-base",
  },
};

const useFilesStore = useAllFilesStore();

onMounted(useFilesStore.checkGithubInfo);
</script>

<style lang="scss" scoped>
.projects_content {
  display: flex;
  flex-direction: column;
  color: var(--text-color);
  padding: 30px;
}

@font-face {
  font-family: "JB MONO";
  src: url("/fonts/jetBrainsMono.woff2");
}

* {
  font-family: "JB MONO";
}
</style>
