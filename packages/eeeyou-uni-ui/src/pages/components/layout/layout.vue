<template>
  <ey-title title="基本用法"></ey-title>
  <view style="padding: 20rpx;">
    <ey-row>
      <ey-col :span="6">
        <view class="col1"></view>
      </ey-col>
      <ey-col :span="6">
        <view class="col2"></view>
      </ey-col>
    </ey-row>
  </view>
  <ey-title title="设置间隔"></ey-title>
  <view style="padding: 20rpx;">
    <ey-row :gutter="16">
      <ey-col :span="4">
        <view class="col1"></view>
      </ey-col>
      <ey-col :span="4">
        <view class="col2"></view>
      </ey-col>
      <ey-col :span="4">
        <view class="col1"></view>
      </ey-col>
    </ey-row>
  </view>
</template>
<script>
export default {
  data() {
    return {
    }
  }
}
</script>
<style lang="scss" scoped>
.col1 {
  width: 100%;
  height: 60rpx;
  border-radius: 8rpx;
  background: rgba($color: $uni-color-primary, $alpha: .2);
}

.col2 {
  width: 100%;
  height: 60rpx;
  border-radius: 8rpx;
  background: rgba($color: $uni-color-primary, $alpha: .4);
}
</style>