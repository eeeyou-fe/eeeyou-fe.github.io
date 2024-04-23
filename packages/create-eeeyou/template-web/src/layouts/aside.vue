<template>
  <div :class="['aside-container']" :style="{ background: bgColor }">
    <div class="logo">
      <img src="/favicon.ico" alt="" width="24" style="vertical-align: -4px" />
      易油互联脚手架
    </div>
    <el-menu :default-active="defaultActive" :backgroundColor="bgColor" text-color="rgba(255,255,255,0.7)" active-text-color="#fff" :collapse-transition="false" @select="handleSelect" unique-opened>
      <el-scrollbar height="100%">
        <ey-menu-item :menuData="menuData"></ey-menu-item>
      </el-scrollbar>
    </el-menu>
  </div>
</template>
<script setup>
import { appStore } from '/@/store/app';
import menuRoutes from '/@/router/routes';
import { ref, computed, getCurrentInstance } from 'vue';

const store = appStore();
const bgColor = '#081330';
const menuData = ref(menuRoutes);
const { proxy } = getCurrentInstance();

const defaultActive = computed(() => {
  getMenuItem(proxy.$route.fullPath);
  return proxy.$route.fullPath;
});

const handleSelect = (key) => {
  proxy.$router.push(key);
};

const getMenuItem = (path, menuList = menuData.value) => {
  if (!menuList || !menuList.length) return;
  for (let menuObj of menuList) {
    if (menuObj.path === path) {
      store.setMenu(menuObj);
    } else if (menuObj.hasOwnProperty('children')) {
      getMenuItem(path, menuObj.children);
    }
  }
};
</script>
<style lang="scss" scoped>
.aside-container {
  background: #3f4964;
  height: 100%;
  box-sizing: border-box;
  padding-top: 20px;
}

.logo {
  margin: 12px 0;
  font-size: 18px;
  color: #fff;
  text-align: center;
}

.el-menu {
  height: calc(100% - 50px);
  border-right: none;
}
</style>
