<template>
  <view class="ey-divider" :style="dividerStyle"></view>
</template>
<script>
import divider from "../divider.module.scss";
export default {
  name: "EyDivider",
  options: {
    virtualHost: true,
  },
  props: {
    color: {
      type: String,
      default: divider.borderColor,
    },
    vertical: {
      type: Boolean,
      default: false
    },
    margin: {
      type: String,
      default: divider.spacingBase,
    },
    dashed: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    dividerStyle() {
      const style = {};
      if (!this.vertical) {
        style.borderBottomWidth = '1px';
        style.margin = this.margin + ' 0';
        style.borderBottomStyle = this.dashed ? 'dashed' : 'solid';
      } else {
        style.height = '1em';
        style.display = 'inline-block';
        style.borderLeftWidth = '1px';
        style.margin = '0 ' + this.margin;
        style.borderLeftStyle = this.dashed ? 'dashed' : 'solid';
      }
      style.borderColor = this.color;
      return style;
    }
  }
}
</script>
<style lang="scss" scoped>
.ey-divider {
  display: block;
}
</style>