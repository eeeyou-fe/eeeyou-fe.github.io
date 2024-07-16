<template>
  <view class="content">
    <image class="logo" src="/static/logo.svg"></image>
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
  onLoad() {},
  methods: {},
}
</script>

<style>
.content {
  display: flex;
  padding: 20rpx;
}

.logo {
  height: 120rpx;
  width: 120rpx;
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
