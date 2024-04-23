<template>
  <template v-for="(item, index) in menuData" :key="index">
    <template v-if="!item.hidden" :key="item.meta.title">
      <el-sub-menu v-if="item && item.children && item.children.length > 1" :index="item.path">
        <template #title>
          <span :class="item.meta.icon" style="margin-right: 8px; font-size: 14px" v-if="item.meta.icon"></span>
          <span v-if="!isCollapse">{{ item.meta.title }}</span>
        </template>
        <menu-item :menuData="item.children"></menu-item>
      </el-sub-menu>
      <el-menu-item v-else-if="item && item.children && item.children.length == 1" :index="item.children[0].path">
        <span :class="item.meta.icon" style="margin-right: 8px; font-size: 14px" v-if="item.meta.icon"></span>
        <template #title>{{ item.children[0].meta.title }}</template>
      </el-menu-item>
      <el-menu-item v-else-if="item" :index="item.path">
        <template #title v-if="item.meta">
          {{ item.meta.title }}
        </template>
      </el-menu-item>
    </template>
  </template>
</template>
<script setup>
import MenuItem from './index.vue';

const props = defineProps({
  menuData: {
    type: Array,
    required: true,
  },
  isCollapse: {
    type: Boolean,
    default: false,
  },
});
</script>
