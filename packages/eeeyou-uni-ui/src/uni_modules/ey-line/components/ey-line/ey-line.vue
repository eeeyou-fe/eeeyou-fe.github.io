<template>
  <view class="ey-line" :style="lineStyle"></view>
</template>
<script>
import line from "../line.module.scss";
export default {
  name: "EyLine",
  options: {
    virtualHost: true,
  },
  props: {
    color: {
      type: String,
      default: line.borderColor,
    },
    vertical: {
      type: Boolean,
      default: false
    },
    margin: {
      type: String,
      default: line.spacingBase + ' 0',
    },
    dashed: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    lineStyle() {
      const style = {};
      if (!this.vertical) {
        style.margin = this.margin;
        style.borderBottomWidth = '1px';
        style.borderBottomStyle = this.dashed ? 'dashed' : 'solid';
      } else {
        style.height = '1em';
        style.borderLeftWidth = '1px';
        style.borderLeftStyle = this.dashed ? 'dashed' : 'solid';
      }
      style.borderColor = this.color;
      return style;
    }
  }
}
</script>