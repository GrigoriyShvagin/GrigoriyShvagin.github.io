<template>
  <div class="resume_block">
    <h3>Resume <a href="/resume.pdf" download="download">(Download)</a></h3>
    <div class="">
      <img src="/resume.svg" alt="" srcset="" />
      <img src="/resume2.svg" alt="" srcset="" />
      <img src="/resume3.svg" alt="" srcset="" />
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@font-face {
  font-family: "JB MONO";
  src: url("/fonts/jetBrainsMono.woff2");
}
h3 {
  color: var(--text-color);
  font-family: "JB MONO", monospace;
  margin-bottom: 30px;
  font-weight: 700;
  a {
    border-bottom: 3px solid var(--accent-color);
    transition: 0.5s;
    &:hover {
      background: var(--accent-color);
      border-color: var(--text-color);
    }
  }
}
.resume_block {
  padding: 20px 70px 0 70px;
  display: flex;
  align-items: center;
  img {
    width: 100%;
  }
  div {
    background: #fff;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 80%;
  }
}
</style>
