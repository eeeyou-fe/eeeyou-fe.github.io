<template>
  <ey-title title="基本用法"></ey-title>
  <view style="padding: 20rpx;">
    <ey-button type="primary">主要按钮</ey-button>
    <ey-button type="success">成功按钮</ey-button>
    <ey-button type="warning">警告按钮</ey-button>
    <ey-button type="error">错误按钮</ey-button>
  </view>
  <ey-title title="镂空状态"></ey-title>
  <view style="padding: 20rpx;">
    <ey-button type="primary" plain>主要按钮</ey-button>
    <ey-button type="success" plain>成功按钮</ey-button>
    <ey-button type="warning" plain>警告按钮</ey-button>
    <ey-button type="error" plain>错误按钮</ey-button>
  </view>
  <ey-title title="禁用状态"></ey-title>
  <view style="padding: 20rpx;">
    <ey-button type="primary" disabled>主要按钮</ey-button>
    <ey-button type="success" disabled>成功按钮</ey-button>
    <ey-button type="warning" disabled>警告按钮</ey-button>
    <ey-button type="error" disabled plain>错误按钮</ey-button>
  </view>
  <ey-title title="按钮图标"></ey-title>
  <view style="padding: 20rpx;">
    <ey-button type="primary" icon="left">返回按钮</ey-button>
    <ey-button type="error" plain icon="add">添加按钮</ey-button>
  </view>
  <ey-title title="块级按钮"></ey-title>
  <view style="padding: 20rpx;">
    <ey-button type="primary" block>提交按钮</ey-button>
  </view>
  <ey-title title="尺寸"></ey-title>
  <view style="padding: 20rpx;">
    <ey-button type="primary" size="large">大按钮</ey-button>
    <ey-button type="primary" size="base">中按钮</ey-button>
    <ey-button type="primary" size="small">小按钮</ey-button>
  </view>
</template>