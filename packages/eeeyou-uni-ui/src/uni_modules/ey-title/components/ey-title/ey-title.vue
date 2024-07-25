<template>
  <view @click="click" class="ey-title">
    <view class="ey-title__title" :style="{ borderBottom: borderd ? '1px solid ' + borderColor : '0' }">
      <view class="left">
        <view class="line" v-if="!icon"></view>
        <ey-icon :type="icon" :size="largeFontSize" :color="primaryColor" v-else></ey-icon>
        <text class="text" :style="{ color: color }">{{ title }}</text>
        <view class="bubble" v-if="num > 0">{{ num }}</view>
      </view>
      <view class="right">
        <slot name="extra"></slot>
      </view>
    </view>
  </view>
</template>
<script>
import title from "../title.module.scss";
export default {
  name: "EyTitle",
  emits: ["click"],
  options: {
    virtualHost: true,
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    borderd: {
      type: Boolean,
      default: true
    },
    icon: {
      type: String,
      default: ''
    },
    num: {
      type: Number,
      default: 0
    },
    color: {
      type: String,
      default: title.textColor,
    },
  },
  data() {
    return {
      borderColor: title.borderColor,
      largeFontSize: title.largeFontSize,
      primaryColor: title.primaryColor
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
.ey-title {
  &__title {
    display: flex;
    align-items: center;
    padding: $uni-spacing-col-lg $uni-spacing-row-lg;

    .left {
      flex: 1;
      display: flex;
      align-items: center;

      .line {
        width: 6rpx;
        border-radius: 6rpx;
        height: $uni-font-size-lg;
        background-color: $uni-color-primary;
      }

      .text {
        margin-left: $uni-spacing-row-sm;
        font-size: $uni-font-size-lg;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }

      .bubble {
        height: $uni-font-size-lg;
        margin-left: $uni-spacing-row-sm;
        padding: 0 10rpx;
        font-size: $uni-font-size-sm;
        background: $uni-color-error;
        color: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: $uni-font-size-lg;
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