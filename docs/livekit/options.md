# 配置项

```javascript
const room = new Room({
  adaptiveStream: true,
  dynacast: true,
  audioCaptureDefaults: {},
  videoCaptureDefaults: {},
  publishDefaults: {},
  // ... 其他配置
})
```

::: details adaptiveStream 允许LiveKit自动管理订阅的质量 ( bool 类型或者 object 类型 )对象类型包含属性

- pixelDensity  自定义像素密度 （类似window.devicePixelRatio）
- pauseVideoInBackground 切换到另一个选项时视频将暂停，默认为true
> 一般  adaptiveStream  设置为  true 即可

:::

::: details dynacast 动态广播（bool 类型），建议 true
:::

::: details audioCaptureDefaults 用户音频 默认选项（object类型）

- autoGainControl 自动获得控制（bool）
- channelCount 通道计数范围 （number）
- deviceId 设备Id （string）
- echoCancellation 回声消除 （bool）
- latency 延迟范围 （number）
- noiseSuppression 噪声抑制 （bool）
- sampleRate 声音比率 （number）
- sampleSize 声音大小 （number）

:::

::: details videoCaptureDefaults 用户视频 默认选项（object类型）

- deviceId  设备Id
- facingMode 镜像模式， 可选项有（'user' | 'environment' | 'left' | 'right'）
- resolution 分辨率 （object）
  - width 宽 （number）
  - height 高（number）
  - frameRate 帧速率（number）
  - aspectRatio 纵横比（number）

::: 

::: details publishDefaults 发布 默认选项（object类型）
- videoEncoding 相机编码（object）
  - maxBitrate 最大比特率（number）
  - maxFramerate 最大帧速率（number）
  - priority 优先
- backupCodec 多编解码器（bool 或者 object）
  - 是 object对象 时，有 code（'vp8' 或 'h264'） 和 encoding 两个属性
- screenShareEncoding 屏幕共享编码参数（同上 videoEncoding ）
- videoCodec 编解码器 ，默认‘vp8’ 可选 ['vp8', 'h264', 'vp9', 'av1']
- audioPreset 音频预设 （object）
  - maxBitrate 最大比特率 （number）
  - priority 优先
- dtx （Discontinuous Transmission of audio）音频的不连续传输，设置为true
- red （Redundant Audio Data）裁剪音频数据，设置为true
- forceStereo 立体声模式（bool）
- simulcast 联播 （bool）
- scalabilityMode svc编解码器的可伸缩性模式，默认为“L3T3”
- videoSimulcastLayers 
- screenShareSimulcastLayers 
- stopMicTrackOnMute 在静音时停止麦克风Track（bool）默认false
:::

::: details audioOutput 音频输出选项（object）

- deviceId 设备id

:::

::: details stopLocalTrackOnUnpublish 本地Track未发布时是否应停止（bool），默认为true
:::

::: details reconnectPolicy 尝试重新连接时要使用的策略（object）

- retryCount 重连次数（number）
- elapsedMs 断开连接后多长时间重连（以毫秒为单位）
- retryReason 重试的原因
- serverUrl 重连的url

:::

::: details disconnectOnPageLeave 在“pagehide”和“beforeunload”事件上，是否应自动断开连接
:::

::: details expSignalLatency 延迟发送信令消息（number），实验属性
:::

::: details webAudioMix 混合网络音频（bool | AudioContext实例）
:::

::: details e2ee 实验属性
:::

::: details loggerName 实验属性
:::