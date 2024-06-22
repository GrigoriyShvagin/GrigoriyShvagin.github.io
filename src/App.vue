<template><component :is="layout"></component></template>

<script setup lang="ts">
import { defineComponent } from "vue";
import { computed } from "vue";
import AppLayout from "./layouts/AppLayout.vue";

const layout = computed(() => AppLayout);

defineComponent({ name: "App" });
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
:root {
  --main-bg: #282a36;
  --bg-text: #313340;
  --text-color: #efefef;
  --accent-color: #bd93f9;
  --titlebar-bg: #1e1f29;
  --sidebar-bg: #343746;
  --sidebar-hover-bg: #3c3d51;
  --explorer-bg: #21222c;
  --explorer-hover-bg: #3132419b;
  --explorer-active-bg: #313241;
  --explorer-border: #161a1d;
  --tabs-bg: #191a21;
  --tab-bg: #21222c;
  --transparent-bg: rgba(33, 34, 44, 0.2);
  --tab-active-bg: #282a36;
  --tab-border: #191a21;
  --bottombar-bg: #191a21;
  --bottombar-border: #191a21;
  --button-bg: #44475a;
  --button-text: #f8f8f2;
  --bottombar-hover-bg: #4f4f52;
  --scrollbar-track-bg: #282a36;
  --scrollbar-thumb-bg: #454647;
  --article-bg: #21222c;
}
[site-theme="github-dark"] {
  --main-bg: #24292e;
  --bg-text: rgba(56, 58, 61, 0.35);
  --text-color: #efefef;
  --accent-color: #f9826c;
  --titlebar-bg: #1f2428;
  --sidebar-bg: #24292e;
  --sidebar-hover-bg: #1f2428;
  --explorer-bg: #1f2428;
  --explorer-hover-bg: #24292e;
  --explorer-border: #161a1d;
  --tabs-bg: #1f2428;
  --transparent-bg: rgba(31, 36, 40, 0.2);
  --tab-bg: #1f2428;
  --tab-active-bg: #24292e;
  --tab-border: #24292e;
  --bottombar-bg: #24292e;
  --bottombar-border: #1b1f23;
  --button-bg: #176f2c;
  --button-text: #dcffe4;
  --bottombar-hover-bg: #4f4f52;
  --scrollbar-track-bg: #24292e;
  --scrollbar-thumb-bg: #333536;
  --article-bg: #1f2428;
}
</style>
