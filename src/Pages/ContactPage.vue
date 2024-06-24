<template>
  <div class="contact_block">
    <h3 class="header">Find Me On</h3>
    <div class="contact_list">
      <p class="header_list">— socials:</p>
      <p class="contact">
        <span>Telegram:</span>
        <a href="https://t.me/mapActions">@mapActions</a>
      </p>
      <p class="contact">
        <span>Email:</span>
        <a>Shvagin04@mail.ru</a>
      </p>
      <p class="contact">
        <span>Github:</span>
        <a href="https://github.com/GrigoriyShvagin"
          >github.com/GrigoriyShvagin</a
        >
      </p>
      <p class="contact">
        <span>Website:</span>
        <a href="https://grigoriyshvagin.github.io/"
          >grigoriyshvagin.github.io</a
        >
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@font-face {
  font-family: "JB MONO";
  src: url("/fonts/jetBrainsMono.woff2");
}

.contact_block {
  padding: 30px;
  display: flex;
  flex-direction: column;
  font-family: "JB MONO";
  color: var(--text-color);

  h3,
  p {
    margin-bottom: 20px;
  }
  p {
    font-size: 20px;
    display: flex;
    span {
      display: block;
      width: 120px;
    }
  }
  .contact_list p:not(.header_list) {
    margin-left: 30px;
  }
  a {
    color: var(--accent-color);
    border-bottom: 2px solid var(--accent-color);
  }
}
</style>
