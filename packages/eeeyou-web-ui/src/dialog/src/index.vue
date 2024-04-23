<template>
  <el-dialog :model-value="props.visible" :title="props.title" @close="close" destroy-on-close class="ey-dialog">
    <div class="ey-dialog-left" v-if="leftMenu.length">
      <p v-for="(item, index) in leftMenu" :class="props.tabIdx == index ? 'active' : ''" @click="tab(index)" :key="index" :style="{ display: item ? 'block' : 'none' }">
        {{ item }}
      </p>
    </div>
    <div class="ey-dialog-right">
      <el-scrollbar>
        <div style="padding: 0 20px">
          <slot></slot>
        </div>
      </el-scrollbar>
    </div>
    <template #footer v-if="leftMenu.length > 0 || !!useSlots().footer">
      <el-button @click="step('prev')" v-if="leftMenu.length > 0 && props.tabIdx !== start"> 上一步 </el-button>
      <el-button type="primary" @click="step('next')" v-if="leftMenu.length > 0 && props.tabIdx !== end"> 下一步 </el-button>
      <slot name="footer"></slot>
    </template>
  </el-dialog>
</template>
<script setup name="EyDialog">
import { ref, watch, useSlots } from 'vue';

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  visible: {
    type: Boolean,
    required: true,
    default: false,
  },
  tabIdx: {
    type: Number,
    default: 0,
  },
  leftMenu: {
    type: Array,
    default: [],
  },
  beforeClick: Function,
});

let idx = 0;
const end = ref(-1);
const start = ref(-1);
const emit = defineEmits(['close', 'update:tabIdx', 'update:visible']);

watch(
  () => props.leftMenu,
  (v) => {
    v.forEach((item, i) => {
      if (item) {
        if (start.value == -1) start.value = i;
        end.value = i;
      }
    });
  },
  { deep: true, immediate: true },
);
/**
 * 关闭弹窗
 */
const close = () => {
  emit('update:visible', false);
  emit('update:tabIdx', 0);
  emit('close');
};
/**
 * 切换左侧菜单
 * @param {number} i 下标
 */
const tab = (i) => {
  if (!props.beforeClick || props.beforeClick()) {
    emit('update:tabIdx', i);
  }
};
/**
 * 上/下 一步
 * @param {string} t 类型 next： 下一步 prev：上一步
 */
const step = (t) => {
  if (!props.beforeClick || props.beforeClick()) {
    idx = props.tabIdx;
    t == 'next' ? recursion(1) : recursion(-1);
  }
};

const recursion = (v) => {
  idx = idx + v;
  if (!props.leftMenu[idx]) {
    recursion(v);
  } else {
    emit('update:tabIdx', idx);
  }
};
</script>
<style lang="scss">
.ey-dialog {
  &-left {
    margin-left: 20px;
    border-right: 1px solid var(--el-border-color-lighter);

    p {
      width: 98px;
      padding: 0 12px;
      color: #6c757d;
      font-size: 14px;
      line-height: 28px;
      margin: 0 12px 4px 0;
      cursor: pointer;

      &.active {
        background: var(--el-color-primary);
        color: #fff;
        border-radius: 4px;
      }
    }
  }

  &-right {
    flex: 1;
    min-width: 0;
    max-height: calc(100vh - 180px);
  }
}
</style>
