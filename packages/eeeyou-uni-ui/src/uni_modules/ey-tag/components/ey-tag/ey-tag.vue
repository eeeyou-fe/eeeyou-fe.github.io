<template>
  <view :style="{ background: fill ? hexToRGBA : undefined, borderColor: fill ? hexToRGBA : undefined }"
    :class="['ey-tag', type ? ('ey-tag__' + type) : '', plain ? 'plain' : '', fill ? 'fill' : '']">
    <ey-icon :type="icon" v-if="icon" :size="textSize" :color="textColor" />
    <text>{{ text }}</text>
  </view>
</template>
<script>
import tag from "../tag.module.scss";
export default {
  name: "EyTag",
  options: {
    virtualHost: true,
  },
  props: {
    text: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
    // 是否镂空
    plain: {
      type: Boolean,
      default: false
    },
    // 带背景色
    fill: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      textSize: tag.textSize
    }
  },
  computed: {
    hexToRGBA() {
      const hex = tag[this.type + 'Color'].replace('#', '');
      const r = parseInt(hex.substring(0, 2), 16);
      const g = parseInt(hex.substring(2, 4), 16);
      const b = parseInt(hex.substring(4, 6), 16);
      const rgba = `rgba(${r}, ${g}, ${b}, .1)`;
      return rgba;
    },
    textColor() {
      if (this.plain) {
        return tag[this.type + 'Color'];
      } else {
        return tag.inverseColor;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.ey-tag {
  display: inline-block;
  padding: $uni-spacing-col-sm $uni-spacing-row-sm;
  border: 2rpx solid $uni-border-color;
  color: $uni-text-color;
  font-size: $uni-font-size-sm;
  border-radius: $uni-border-radius-sm;

  &+.ey-tag {
    margin-left: $uni-spacing-row-sm;
  }

  &.plain {
    background: none;
  }

  &__primary {
    color: $uni-text-color-inverse;
    border: 2rpx solid $uni-color-primary;
    background: $uni-color-primary;

    &.plain,
    &.fill {
      color: $uni-color-primary;
    }

    &.plain {
      border: 2rpx solid $uni-color-primary !important;
    }
  }

  &__success {
    color: $uni-text-color-inverse;
    border: 2rpx solid $uni-color-success;
    background: $uni-color-success;

    &.plain,
    &.fill {
      color: $uni-color-success;
    }

    &.plain {
      border: 2rpx solid $uni-color-success !important;
    }
  }

  &__warning {
    color: $uni-text-color-inverse;
    border: 2rpx solid $uni-color-warning;
    background: $uni-color-warning;

    &.plain,
    &.fill {
      color: $uni-color-warning;
    }

    &.plain {
      border: 2rpx solid $uni-color-warning !important;
    }
  }

  &__error {
    color: $uni-text-color-inverse;
    border: 2rpx solid $uni-color-error;
    background: $uni-color-error;

    &.plain,
    &.fill {
      color: $uni-color-error;
    }

    &.plain {
      border: 2rpx solid $uni-color-error !important;
    }
  }
}
</style>
