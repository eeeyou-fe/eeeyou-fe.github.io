<template>
  <ey-title title="基本用法"></ey-title>
  <view style="padding: 20rpx;">
    <ey-row>
      <ey-col :span="3">
        <ey-badge type="primary" :value="8"></ey-badge>
      </ey-col>
      <ey-col :span="3">
        <ey-badge type="success" :value="88"></ey-badge>
      </ey-col>
      <ey-col :span="3">
        <ey-badge type="warning" :value="888"></ey-badge>
      </ey-col>
      <ey-col :span="3">
        <ey-badge type="error" :value="8888" max="9999"></ey-badge>
      </ey-col>
    </ey-row>
  </view>
  <ey-title title="显示圆点"></ey-title>
  <view style="padding: 20rpx;">
    <ey-row>
      <ey-col :span="3">
        <ey-badge type="primary" :value="10" dot></ey-badge>
      </ey-col>
      <ey-col :span="3">
        <ey-badge type="success" :value="10" dot></ey-badge>
      </ey-col>
      <ey-col :span="3">
        <ey-badge type="warning" :value="10" dot></ey-badge>
      </ey-col>
      <ey-col :span="3">
        <ey-badge type="error" :value="10" dot></ey-badge>
      </ey-col>
    </ey-row>
  </view>
  <ey-title title="设置最大值"></ey-title>
  <view style="padding: 20rpx;">
    <ey-row>
      <ey-col :span="3">
        <ey-badge type="primary" :value="10" max="9"></ey-badge>
      </ey-col>
      <ey-col :span="3">
        <ey-badge type="success" :value="100" max="99"></ey-badge>
      </ey-col>
      <ey-col :span="3">
        <ey-badge type="warning" :value="1000" max="999"></ey-badge>
      </ey-col>
      <ey-col :span="3">
        <ey-badge type="error" :value="10000" max="9999"></ey-badge>
      </ey-col>
    </ey-row>
  </view>
</template>