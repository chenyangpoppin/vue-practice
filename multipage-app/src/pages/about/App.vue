<template>
  <div id="app">
    <img alt="Vue logo" src="../../assets/logo.png">
    <p>About Page</p>
    <LinkGroup></LinkGroup>
  </div>
</template>

<script>
import LinkGroup from '@/components/LinkGroup.vue';
import vhCheck from 'vh-check';

vhCheck('browser-address-bar');

export default {
  name: 'About',
  components: {
    LinkGroup
  }
}
</script>

<style lang="less">
@import (reference) "../../style/reset.less";
body {
  background: @bgColor;
  height: 100vh;
  height: calc(100vh - var(--browser-address-bar, 0px));
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  img {
    width: 120px;
    height: 120px;
  }

  p {
    margin: 10px 0;
  }
}
</style>
