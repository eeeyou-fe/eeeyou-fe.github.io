<template>
  <view class="ey-col" :class="['ey-col-' + span]" :style="colStyle">
    <slot></slot>
  </view>
</template>

<script>
export default {
  name: 'EyCol',
  options: {
    virtualHost: true
  },
  data() {
    return {
    }
  },
  props: {
    span: {
      type: Number,
      default: 12
    }
  },
  computed: {
    colStyle() {
      const style = {}
      let parent = this.$parent;
      console.log(parent)
      if (parent.gutter) {
        style.marginLeft = parent.gutter / 2 + 'rpx';
        style.marginRight = parent.gutter / 2 + 'rpx';
      }
      return style;
    }
  },
}
</script>

<style lang="scss" scoped>
.ey-col {
  padding: 0;
  display: block;
  box-sizing: border-box;
}

$num: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12;

@each $i in $num {
  .ey-col-#{$i} {
    width: calc(100% / 12 * $i);
  }
}
</style>
