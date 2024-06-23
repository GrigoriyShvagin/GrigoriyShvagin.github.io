<template>
  <div class="main_page_block">
    <div class="text_block">
      <div class="text_name">Shvagin Grigoriy</div>
      <div class="text_profession">{{ reactText }}</div>
      <div class="skill_set">
        <div class="header">Skill Set</div>
        <div class="skills_list">
          <div
            class="skill"
            v-for="item in skillSet"
            :style="styleObject(item)"
          >
            {{ item.name }}
          </div>
        </div>
      </div>
    </div>
    <div class="textBg">Frontend Developer</div>
    <div class="img_block"><img src="/me.jpg" alt="" /></div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";

const myInitials = "Frontend Developer".split("");
const skillSet = {
  vue3: { name: "Vue3", borderColor: "#20ff93" },
  compOpt: { name: "Comp + Opt API", borderColor: "#2245d4" },
  Ts: { name: "TypeScript", borderColor: "#e8ff76" },
  Scss: {
    name: "Sass",
    borderColor: "#76b8ff",
  },
  Vite: { name: "Vite", borderColor: "#4aa12a" },
  Webpack: { name: "webpack", borderColor: "#2b71e9" },
  Vuex: { name: "Vuex + Pinia", borderColor: "#ee5903" },
  Tailwind: { name: "Tailwind", borderColor: "#ef7171" },
  Rest: { name: "Rest + WSS", borderColor: "#aaaaf8" },
  Eslint: { name: "Eslint", borderColor: "#ff76d6" },
  Git: { name: "Git", borderColor: "#c2cbff" },
};

let reactText = ref("");

function styleObject(item: { name: string; borderColor: string }): object {
  return {
    border: "2px solid " + item.borderColor,
    "--color-hover": item.borderColor + "25",
  };
}

function initialsText() {
  if (reactText.value.length < myInitials.length) {
    reactText.value += myInitials[reactText.value.length];
    setTimeout(initialsText, 100);
  }
}

onMounted(initialsText);
</script>

<style lang="scss">
@font-face {
  font-family: "JB MONO";
  src: url("/fonts/jetBrainsMono.woff2");
}
@keyframes blink {
  100% {
    background: transparent;
  }
}
.skill_set {
  background: var(--transparent-bg);
  color: var(--text-color);
  margin: 30px 0;
  padding: 20px;
  border-radius: 20px;
  max-width: 370px;
  &:hover {
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
  }
}
.skills_list {
  display: flex;
  margin-top: 20px;
  max-width: 350px;
  flex-wrap: wrap;
}
.skill {
  max-width: max-content;
  padding: 3px 10px;
  font-size: 12px;
  border-radius: 20px;
  margin: 5px 5px 5px 0;
  cursor: pointer;
  &:hover {
    background: var(--color-hover);
  }
}
.main_page_block {
  font-family: "JB MONO";
  padding: 50px;
  justify-content: center;
  flex-direction: row;
  position: relative;
  .text_block {
    padding: 20px;
    width: 60%;
    display: flex;
    flex-direction: column;
  }
  .text_name {
    color: #eee;
    font-size: 48px;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }
  .text_profession {
    width: max-content;
    color: #eee;
    font-size: 1.5rem;
    font-weight: 300;
    margin-bottom: 1rem;
    position: relative;
    &:after {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 100%;
      margin-left: 0.4rem;
      width: 0.125em;
      background: var(--accent-color);
      animation: blink 0.75s steps(24) infinite;
    }
  }
  .img_block {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    border: 10px solid rgba(64, 102, 97, 0.5);
    border-radius: 50%;
    overflow: hidden;
    width: 300px;
    height: 300px;
    position: relative;
  }
}
</style>
