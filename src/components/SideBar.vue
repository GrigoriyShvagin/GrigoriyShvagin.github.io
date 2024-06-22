<template>
  <div class="side_bar_block">
    <div class="links_block">
      <div class="top_items">
        <router-link to="/">
          <div
            class="sidebar_svg"
            ref="home"
            :class="{ active: $route.path == '/' }"
          >
            <Icon icon="uil:copy" />
          </div>
        </router-link>
        <router-link to="/github">
          <div
            class="sidebar_svg"
            ref="github"
            :class="{ active: $route.path == '/github' }"
          >
            <Icon icon="hugeicons:github" />
          </div>
        </router-link>
        <router-link to="/projects">
          <div
            class="sidebar_svg"
            :class="{ active: $route.path == '/projects' }"
          >
            <Icon icon="solar:code-bold" />
          </div>
        </router-link>
        <router-link to="/contacts">
          <div
            class="sidebar_svg"
            :class="{ active: $route.path == '/contacts' }"
          >
            <Icon icon="material-symbols:mail-outline" />
          </div>
        </router-link>
      </div>
      <div class="bottom_items">
        <router-link to="/resume">
          <div
            class="sidebar_svg"
            :class="{ active: $route.path == '/resume' }"
          >
            <Icon icon="material-symbols:account-circle-outline" />
          </div>
        </router-link>
        <router-link to="settings">
          <div
            class="sidebar_svg"
            :class="{ active: $route.path == '/settings' }"
          >
            <Icon icon="material-symbols-light:settings-outline" />
          </div>
        </router-link>
      </div>
    </div>
    <div class="exlorer_block">
      <p class="exlorer_header">Explorer</p>
      <p class="portfolio_header" @click="showPortfolio = !showPortfolio">
        Portfolio
        <Icon
          icon="material-symbols:expand-more"
          :class="{ showPortfolio: showPortfolio }"
        />
      </p>
      <Transition name="showPortfolio"
        ><div class="files_list" v-if="showPortfolio">
          <router-link v-for="item in allFiles" :to="item.link">
            <p :class="{ activeFile: $route.path == item.link }">
              <Icon :icon="item.icon" />{{ item.text }}
            </p>
          </router-link>
        </div></Transition
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Icon } from "@iconify/vue/dist/iconify.js";
import { ref } from "vue";

defineProps({
  allFiles: {
    type: Object,
  },
});

const showPortfolio = ref(true);
</script>

<style lang="scss">
.showPortfolio-enter-active,
.showPortfolio-leave-active {
  transition: opacity 0.2s ease;
}

.showPortfolio-enter-from,
.showPortfolio-leave-to {
  opacity: 0;
}

.files_list {
  display: flex;
  flex-direction: column;
  p {
    padding: 0.25rem 0.5rem;
    cursor: pointer;
    color: #e1e4e8;
    display: flex;
    align-items: center;
    font-size: 14px;
    svg {
      margin: 0 5px;
    }
  }

  .activeFile {
    background: var(--explorer-active-bg);
  }
  p:hover:not(.activeFile) {
    background: var(--explorer-hover-bg);
  }
}
.side_bar_block {
  display: flex;
  width: 20vw;
  justify-content: space-between;
  font-family: sans-serif;
}

.exlorer_block {
  display: flex;
  width: 16vw;
  flex-direction: column;

  justify-content: left;
  background: var(--explorer-bg);
  p:not(.portfolio_header, .files_list p) {
    text-transform: uppercase;
    padding: 10px;
    color: white;
    font-weight: 300;
    font-size: 0.9rem;
    letter-spacing: 1px;
    margin-bottom: 0.75rem;
    text-align: left;
    svg {
      width: 20px;
      height: 20px;
    }
  }
}

.portfolio_header {
  display: flex;
  text-transform: uppercase;
  align-items: center;
  color: white;
  cursor: pointer;
  font-weight: 700;
  letter-spacing: 1px;
  font-size: 0.8rem;
  padding: 0 10px 10px 10px;
  svg {
    transform: rotate(270deg);
    transition: 0.4s;
  }
  .showPortfolio {
    transform: rotate(360deg);
  }
}

.top_items,
.bottom_items {
  width: 100%;
}
.links_block {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  background: var(--sidebar-bg);
  width: 4vw;
  height: calc(100vh - 50px);
  svg {
    width: 35px;
    height: 35px;
    color: rgb(106, 115, 125);
  }
  .sidebar_svg {
    cursor: pointer;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 10px 0;
  }
  .sidebar_svg:hover {
    background: var(--sidebar-hover-bg);
  }
  .active {
    border-left: 2px solid var(--accent-color);
    svg {
      color: white;
    }
  }
}
</style>
