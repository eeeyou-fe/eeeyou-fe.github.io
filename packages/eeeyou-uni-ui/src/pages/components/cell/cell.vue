<template>
  <ey-title title="基本用法"></ey-title>
  <ey-cell title="单元格"></ey-cell>
  <ey-title title="包含详细信息"></ey-title>
  <ey-cell title="单元格" label="详细信息"></ey-cell>
  <ey-title title="右侧内容"></ey-title>
  <ey-cell title="单元格">
    我是右侧内容
  </ey-cell>
  <ey-title title="可以跳转"></ey-title>
  <ey-cell title="单元格" icon="right" @click="back">返回</ey-cell>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    back() {
      uni.navigateBack();
    }
  },
}
</script>
