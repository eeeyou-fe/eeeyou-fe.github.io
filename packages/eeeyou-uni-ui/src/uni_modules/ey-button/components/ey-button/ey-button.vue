<template>
  <button @click="click" :style="'display: ' + (block ? 'block' : 'inline-block')"
    :class="['ey-button', 'ey-button--' + size, 'ey-button--' + type, plain ? 'plain' : '', disabled ? 'disabled' : '']"
  >
    <ey-icon :type="icon" v-if="icon" :size="iconSize" :color="iconColor" />
    <slot></slot>
  </button>
</template>
<script>
import button from "../button.module.scss";
export default {
  name: "EyButton",
  emits: ["click"],
  options: {
    virtualHost: true,
  },
  props: {
    size: {
      type: String,
      default: "large",
    },
    type: {
      type: String,
      default: "primary",
    },
    icon: {
      type: String,
      default: "",
    },
    plain: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
    };
  },
  computed: {
    iconSize() {
      return button[this.size] + 'FontSize'
    },
    iconColor() {
      return button[this.type] + 'Color'
    }
  },
  methods: {
    click() {
      if (!this.disabled) {
        this.$emit('click');
      }
    }
  },
};
</script>
<style lang="scss" scoped>
.ey-button {
  line-height: unset;
  color: $uni-text-color-inverse;

  &+ .ey-button {
    margin-left: $uni-spacing-row-base;
  }
  
  &.plain {
    background: none;
  }
  &.disabled {
    opacity: .5;
  }

  &--small {
    font-size: $uni-font-size-sm;
    padding: $uni-spacing-col-sm $uni-spacing-row-sm;
  }
  &--base {
    font-size: $uni-font-size-base;
    padding: $uni-spacing-col-base $uni-spacing-row-base;
  }
  &--large {
    font-size: $uni-font-size-lg;
    padding: $uni-spacing-col-lg $uni-spacing-row-lg;
  }
  &--primary {
    background-color: $uni-color-primary;

    &.plain {
      color: $uni-color-primary;
      border: 2rpx solid $uni-color-primary !important;
    }
  }
  &--warning {
    background-color: $uni-color-warning;

    &.plain {
      color: $uni-color-warning;
      border: 2rpx solid $uni-color-warning !important;
    }
  }
  &--success {
    background-color: $uni-color-success;

    &.plain {
      color: $uni-color-success;
      border: 2rpx solid $uni-color-success !important;
    }
  }
  &--error {
    background-color: $uni-color-error;

    &.plain {
      color: $uni-color-error;
      border: 2rpx solid $uni-color-error !important;
    }
  }
}
</style>