<template>
  <div class="header">
    <div class="header-tags">
      <div :class="['header-tags-item', 'active']">{{ menu.meta.title }}</div>
    </div>
  </div>
</template>
<script setup>
import { computed } from 'vue';
import { appStore } from '/@/store/app';

const store = appStore();

const menu = computed(() => {
  return store.getMenu;
});
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  height: 100%;
  display: flex;
  border-bottom: 1px solid #f0f0f0;
  &-tags {
    flex: 1;
    min-width: 0;
    &-item {
      padding: 0 12px;
      color: #333;
      line-height: 40px;
      font-size: 14px;
      cursor: pointer;
      display: inline-block;
      &.active {
        height: 39px;
        background: #fafbfe;
        color: var(--el-color-primary);
        border-bottom: 1px solid var(--el-color-primary);
      }
    }
  }
}
</style>
