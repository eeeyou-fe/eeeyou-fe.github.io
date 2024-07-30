<template>
  <text v-if="Number(value) > 0 || zero" :class="['ey-badge', 'ey-badge--' + type, dot ? 'dot' : '']">
    {{ dot ? '' : val }}
  </text>
</template>

<script>
export default {
  name: 'EyBadge',
  options: {
    virtualHost: true,
  },
  props: {
    dot: {
      type: Boolean,
      default: false
    },
    value: {
      type: [Number, String],
      default: 0
    },
    max: {
      type: Number,
      default: 999,
    },
    type: {
      type: String,
      default: 'error'
    },
    zero: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    val() {
      return Number(this.value) > Number(this.max) ? this.max + "+" : this.value;
    }
  }
}
</script>

<style lang="scss" scoped>
.ey-badge {
  padding: 0 10rpx;
  font-size: $uni-font-size-sm;
  color: $uni-text-color-inverse;
  border-radius: $uni-font-size-sm;

  &--primary {
    background: $uni-color-primary;
  }

  &--success {
    background: $uni-color-success;
  }

  &--warning {
    background: $uni-color-warning;
  }

  &--error {
    background: $uni-color-error;
  }

  &.dot {
    padding: 0;
    width: 16rpx;
    height: 16rpx;
    display: inline-block;
  }
}
</style>
