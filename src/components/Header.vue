<template>
  <div class="title_bar_sec">
    <router-link to="/" class="link">
      <Icon icon="vscode-icons:file-type-vscode" class="vscode_svg" />
    </router-link>
    <div class="items_list">
      <span v-for="item in listOfItems" :key="item">{{ item }}</span>
    </div>
    <div class="file_name">
      <span class="name">Grigoriy Shvagin - Portfolio</span>
    </div>
    <div class="buttons_list">
      <span class="yellow_bttn"></span><span class="green_bttn"></span
      ><span class="red_bttn"></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";

const listOfItems = ["File", "Edit", "View", "Go", "Run", "Terminal", "Help"];
</script>

<style>
.title_bar_sec {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
  height: 30px;
  color: white;
  background: var(--titlebar-bg);
  font-size: 0.85rem;
}
.link {
  display: flex;
  align-items: center;
}
.buttons_list {
  display: flex;
  flex: 1 1;
  align-items: center;
  justify-content: right;
  span {
    cursor: pointer;
    height: 13px;
    width: 13px;
    border-radius: 50%;
    margin-left: 10px;
    &:last-of-type {
      margin-right: 10px;
    }
  }
  .yellow_bttn {
    background: #f1fa8c;
  }
  .green_bttn {
    background: #50fa7b;
  }
  .red_bttn {
    background: #f55;
  }
}
.vscode_svg {
  margin: 0 8px 0 8px;
  width: 16px;
  height: 16px;
}
.items_list {
  flex: 1 1;
  span {
    cursor: pointer;
  }
}
.items_list span,
.file_name span {
  padding: 2px 8px 2px 8px;
  border-radius: 6px;
}
.items_list span:hover {
  background-color: var(--tab-active-bg);
}
.file_name {
  display: flex;
  justify-content: center;
  flex: 1 1;
}
</style>
