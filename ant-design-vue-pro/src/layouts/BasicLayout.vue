<template>
  <div :class="[`nav-theme-${navTheme}`, `nav-layout-${navLayout}`]">
    <a-layout id="components-layout-demo" style="min-height:100vh;">
      <a-layout-sider
        v-if="navLayout === 'left'"
        :trigger="null"
        :theme="navTheme"
        collapsible
        v-model="collapsed"
        width="256px"
      >
        <SiderMenu :theme="navTheme"></SiderMenu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background:#fff; padding:0;">

          <!-- Note: there is a self-defined v-auth directive here -->
          <!-- Note: the v-auth directive can only be loaded once -->
          <a-icon
            v-auth="['admin']"
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="collapsed = !collapsed"
          ></a-icon>

          <Header></Header>
        </a-layout-header>
        <a-layout-content style="padding:20px 18px;">
          <router-view></router-view>
        </a-layout-content>
        <a-layout-footer style="text-align:center;">
          <Footer></Footer>
        </a-layout-footer>
      </a-layout>
    </a-layout>

    <Authorized :authority="['admin']">
      <SettingDrawer />
    </Authorized>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import SiderMenu from "./SiderMenu.vue";
import SettingDrawer from "@/components/SettingDrawer";

export default {
  name: "BasicLayout",
  data() {
    return {
      collapsed: false
    };
  },
  computed: {
    navTheme() {
      return this.$route.query.navTheme || "dark";
    },
    navLayout() {
      return this.$route.query.navLayout || "left";
    }
  },
  components: {
    Header,
    Footer,
    SiderMenu,
    SettingDrawer
  }
};
</script>

<style scoped>
.trigger {
  height: 64px;
  line-height: 64px;
  vertical-align: bottom;
  padding: 0 0 0 18px;
  cursor: pointer;
  font-size: 18px;
}

.nav-theme-dark >>> .sider-menu {
  color: #fff;
}
</style>