<template>
  <el-container>
    <el-aside :width="'200px'">
      <Aside></Aside>
    </el-aside>
    <el-container>
      <el-header height="40px">
        <Header></Header>
      </el-header>
      <el-container style="height: calc(100% - 40px)">
        <el-scrollbar>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-scrollbar>
        <el-footer height="40px">
          <Footer></Footer>
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>
<script>
import Aside from '/@/layouts/aside.vue';
import Header from '/@/layouts/header.vue';
import Footer from '/@/layouts/footer.vue';

export default {
  components: {
    Aside,
    Header,
    Footer,
  },
  setup() {},
};
</script>
<style lang="scss" scoped>
.el-container {
  width: 100%;
  height: 100%;
}
.el-aside {
  height: 100%;
}
</style>
