<template>
  <div class="pages_list">
    <router-link v-for="item in allFiles" :to="item.link">
      <p :class="{ activePage: $route.path == item.link }">
        <Icon :icon="item.icon" />{{ item.text }}
      </p>
    </router-link>
  </div>
</template>

<script lang="ts" setup>
import { Icon } from "@iconify/vue/dist/iconify.js";

defineProps({
  allFiles: {
    type: Object,
  },
});
</script>

<style lang="scss">
.pages_list {
  font-family: sans-serif;
  display: flex;
  width: 100%;
  background: var(--tabs-bg);

  p {
    padding: 7px 20px;
    color: white;
    font-weight: 300;
    font-size: 14px;
    border: 1px solid var(--tab-border);
    border-bottom: none;
    background: var(--tab-bg);
    display: flex;
    align-items: center;
    svg {
      margin-right: 5px;
    }
  }
  .activePage {
    background: var(--tab-active-bg);
    border-top: 1px solid var(--accent-color);
  }
}
</style>
