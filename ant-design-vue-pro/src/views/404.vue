<template>
  <div class="wrapper-404">
    <!-- Three solutions to load svg images to the website -->
    <!-- Solution1: import icon font logo -->
    <IconFont class="icon-404" type="icon-404"></IconFont>

    <!-- Note: solution 2 and solution 3 cannot coexist due to webpack configuration clear all existing loaders -->
    <!-- Therefore, I commented out its usage -->
    <!-- Solution2: import svg logo from local resources -->
    <!-- img :src="NotFoundImage" alt="NotFountImage" / -->

    <!-- Solution3: use vue cli svg loader  -->
    <Google />
  </div>
</template>

<script>
import NotFoundImage from "@/assets/NotFound.svg";
import Google from "@/assets/google.svg";

// Use the following line of command to generate current application configuration
// vue inspect > output.js

export default {
  data() {
    return {
      NotFoundImage
    };
  },
  components: {
    Google
  }
};
</script>

<style scoped lang="less">
.wrapper-404 {
  text-align: center;

  .icon-404 {
    font-size: 100px;
  }
}
</style>