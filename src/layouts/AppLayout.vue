<template>
  <Header />
  <div class="main_layout">
    <div class="layout_content">
      <SideBar :allFiles="allFiles" />
      <div class="pages_block">
        <PagesBlock :allFiles="allFiles" /><router-view></router-view>
      </div>
    </div>
  </div>
  <footer />
</template>

<script lang="ts" setup>
import SideBar from "../components/SideBar.vue";
import PagesBlock from "../components/PagesBlock.vue";
import Header from "../components/Header.vue";

const allFiles = {
  homeFile: {
    link: "/",
    text: "MainPage.vue",
    icon: "logos:vue",
  },
  resumeFile: {
    link: "/resume",
    text: "resume.html",
    icon: "vscode-icons:file-type-html",
  },
  contactFile: {
    link: "/contacts",
    text: "contacts.ts",
    icon: "vscode-icons:file-type-typescript-official",
  },
  projectsFile: {
    link: "/projects",
    text: "projects.json",
    icon: "vscode-icons:file-type-light-json",
  },
  githubFile: {
    link: "/github",
    text: "github.md",
    icon: "hugeicons:github",
  },
};
</script>

<style lang="scss">
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
