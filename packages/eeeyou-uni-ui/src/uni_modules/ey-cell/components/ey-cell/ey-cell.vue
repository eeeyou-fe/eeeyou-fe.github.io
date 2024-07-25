<template>
  <view @click="click" class="ey-cell">
    <view class="ey-cell__title" :style="{ borderBottom: borderd ? '1px solid ' + borderColor : '0' }">
      <view class="left">
        <view class="text" :style="{ color: color }">{{ title }}</view>
        <view class="desc" v-if="label">{{ label }}</view>
      </view>
      <view class="right">
        <slot></slot>
        <ey-icon :type="icon" v-if="icon" :size="smallFontSize" :color="placeholderTextColor"></ey-icon>
      </view>
    </view>
  </view>
</template>
<script>
import cell from "../cell.module.scss";
export default {
  name: "EyCell",
  emits: ["click"],
  options: {
    virtualHost: true,
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    borderd: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: cell.textColor,
    },
    icon: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      borderColor: cell.borderColor,
      smallFontSize: cell.smallFontSize,
      placeholderTextColor: cell.placeholderTextColor,
    };
  },
  methods: {
    click() {
      this.$emit('click');
    }
  },
}
</script>

<style lang="scss" scoped>
.ey-cell {
  &__title {
    display: flex;
    align-items: center;
    padding: $uni-spacing-col-lg $uni-spacing-row-lg;

    .left {
      flex: 1;

      .desc {
        font-size: $uni-font-size-sm;
        color: $uni-text-color-grey;
      }

      .text {
        font-size: $uni-font-size-base;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
    }

    .right {
      display: flex;
      align-items: center;
      font-size: $uni-font-size-sm;
      color: $uni-text-color-placeholder;
    }
  }
}
</style>