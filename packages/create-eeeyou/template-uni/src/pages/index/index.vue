<template>
  <view class="content">
    <view class="logo">
      <image src="/static/logo.png"></image>
    </view>
    <view class="text-area">
      <text class="title">{{ title }}</text>
      <text class="sub-title">{{ subTitle }}</text>
    </view>
  </view>
  <view style="padding: 0 20rpx; color: #666;">
    EyouUI, 基于uni-app开发生态的UI框架，致力打造移动全平台可用的企业级解决方案
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: "EyouUI",
      subTitle: "易油互联移动端跨平台UI框架"
    }
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  padding: 20rpx;
}

.logo {
  height: 60rpx;
  width: 60rpx;
  padding: 30rpx;
  border-radius: 60rpx;
  background: $uni-color-primary;

  image {
    width: 100%;
    height: 100%;
  }
}

.text-area {
  display: flex;
  flex-direction: column;
  padding-left: 24rpx;
  justify-content: center;
}

.title {
  font-size: 40rpx;
}

.sub-title {
  font-size: 32rpx;
  color: #999;
}
</style>
