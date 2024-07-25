<template>
  <view class="ey-row" :style="rowStyle">
    <slot></slot>
  </view>
</template>

<script>
export default {
  name: "EyRow",
  options: {
    virtualHost: true,
  },
  data() {
    return {
    }
  },
  props: {
    gutter: {
      type: Number,
      default: 0
    }
  },
  computed: {
    rowStyle() {
      const style = {}
      if (this.gutter) {
        style.marginLeft = this.gutter / -2 + 'rpx';
        style.marginRight = this.gutter / -2 + 'rpx';
      }
      return style;
    }
  },
}
</script>

<style lang="scss" scoped>
.ey-row {
  display: flex;
}
</style>
