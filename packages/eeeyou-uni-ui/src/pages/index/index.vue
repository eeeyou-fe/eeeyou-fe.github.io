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
  <ey-title title="基础组件"></ey-title>
  <ey-cell title="Cell 单元格" icon="right" @click="jump('/cell/cell')"></ey-cell>
  <ey-cell title="Icon 图标" icon="right" @click="jump('/icon/icon')"></ey-cell>
  <ey-cell title="Row&Col 布局" icon="right" @click="jump('/layout/layout')"></ey-cell>
  <ey-cell title="Tag 标签" icon="right" @click="jump('/tag/tag')"></ey-cell>
  <ey-title title="表单组件"></ey-title>
  <ey-cell title="Button 按钮" icon="right" @click="jump('/button/button')"></ey-cell>
</template>

<script>
export default {
  data() {
    return {
      title: "EyouUI",
      subTitle: "易油互联移动端跨平台UI框架"
    }
  },
  methods: {
    jump(path) {
      uni.navigateTo({
        url: '/pages/components' + path,
      })
    }
  },
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
