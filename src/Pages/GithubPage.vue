<template>
  <div class="projects_content">
    <div class="gh_info">
      <a :href="myProfile?.html_url">
        <div class="gh_content">
          <img :src="myProfile?.avatar_url" alt="" />
          <p class="">{{ myProfile?.login }}</p>
          <p class="">{{ myProfile?.public_repos }} repos</p>
          <p>{{ getCurrentTotal() }} contributions in the last year</p>
        </div>
      </a>
    </div>
    <img
      src="http://ghchart.rshah.org/GrigoriyShvagin"
      class="contributions_img"
    />
    <div class="projects_list"></div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useAllFilesStore } from "../store";

const filesStore = useAllFilesStore();

const myProfile = computed<Profile | null>(() => {
  return filesStore.myProjects;
});

const myContributions = computed<Contributions | null>(() => {
  return filesStore.myContributions;
});

function getCurrentTotal(): number | undefined {
  return myContributions.value?.total.lastYear;
}

onMounted(filesStore.checkGithubInfo);
onMounted(filesStore.getGithubContributions);
</script>

<style lang="scss" scoped>
.projects_content {
  display: flex;
  flex-direction: column;
  color: var(--text-color);
  align-items: center;
  padding: 30px;
  .contributions_img {
    width: 70%;
  }
}
.gh_content {
  display: flex;
  align-items: center;
  p {
    height: 70px;
    display: flex;
    margin: 0 10px;
    align-items: center;
    padding: 0 20px 0 0;
  }
  & *:not(:last-child):not(:first-child) {
    border-right: 2px solid var(--accent-color);
  }
  img {
    max-height: 70px;
  }
}
.gh_info {
  background: var(--article-bg);
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 20px 0;
}

@font-face {
  font-family: "JB MONO";
  src: url("/fonts/jetBrainsMono.woff2");
}

* {
  font-family: "JB MONO";
}
</style>
