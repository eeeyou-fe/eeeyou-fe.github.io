# 发布Tracks

## 1、摄像头和麦克风

将本地参与者的摄像头 和/或 麦克风 流 发布到房间。我们提供了一种跨平台的一致方法：

```javascript
// 打开摄像头
room.localParticipant.setCameraEnabled(true)

// 打开麦克风
room.localParticipant.setMicrophoneEnabled(true)
```

要将其静音，您可以执行以下操作：

```javascript
room.localParticipant.setCameraEnabled(false)
room.localParticipant.setMicrophoneEnabled(false)
```

禁用摄像头或麦克风将关闭各自的录音指示灯。其他参与者将收到 TrackMuted 事件

## 2、屏幕共享

LiveKit还支持跨所有平台的屏幕共享

```javascript
// 这将触发浏览器提示共享屏幕，必须允许
await currentRoom.localParticipant.setScreenShareEnabled(true);
```

## 3、高级Track管理
setCameraEnabled、setMicrophoneEnabled和setScreenShareEnabled是我们Track API的便利包装器，您可以手动创建Track并随时发布或取消发布。参与者可以发布的Track数量没有限制。

LiveKit为其发布的Track使用了合理的默认值，但为您的应用程序提供了微调旋钮。这些设置分为两类：

捕获设置（Capture settings）：如何捕获媒体，包括设备选择和功能。

发布设置（Publish settings）：编码方式，包括比特率和帧速率。

```javascript
// option 1, set room defaults
const room = new Room({
  audioCaptureDefaults: {
    autoGainControl: true,
    deviceId: '',
    echoCancellation: true,
    noiseSuppression: true,
  },
  videoCaptureDefaults: {
    deviceId: '',
    facingMode: 'user',
    resolution: {
      width: 1280,
      height: 720,
      frameRate: 30,
    },
  },
  publishDefaults: {
    videoEncoding: {
      maxBitrate: 1_500_000,
      maxFramerate: 30,
    },
    screenShareEncoding: {
      maxBitrate: 1_500_000,
      maxFramerate: 30,
    },
    audioBitrate: 20_000,
    dtx: true,
    // only needed if overriding defaults
    videoSimulcastLayers: [
      {
        width: 640,
        height: 360,
        encoding: {
          maxBitrate: 500_000,
          maxFramerate: 20,
        }
      },
      {
        width: 320,
        height: 180,
        encoding: {
          maxBitrate: 150_000,
          maxFramerate: 15,
        }
      }
    ]
  },
})

// option 2, settings for individual tracks
async function publishTracks() {
  const videoTrack = await createLocalVideoTrack({
    facingMode: "user",
    // preset resolutions
    resolution: VideoPresets.h720
  })
  const audioTrack = await createLocalAudioTrack({
    echoCancellation: true,
    noiseSuppression: true,
  })

  const videoPublication = await room.localParticipant.publishTrack(videoTrack)
  const audioPublication = await room.localParticipant.publishTrack(audioTrack)
}
```

## 4、静音和取消静音

您可以将任何Track静音以阻止其向服务器发送数据。当Track静音时，LiveKit将在房间中的所有参与者上触发TrackMuted事件。

您可以使用此事件更新应用程序的UI，并将正确的状态反映给房间中的所有用户。

使用相应的LocalTrackPublication对象对轨迹进行静音/取消静音

## 5、视频联播

Simulcast使客户端能够发布同一视频轨道的多个版本，每个版本都有不同的比特率配置文件。此功能允许LiveKit根据每个收件人的可用带宽和首选分辨率动态转发最合适的流。

当服务器识别具有带宽约束的参与者时，在选择性转发单元（SFU）内发生自动自适应层选择。随着参与者带宽的提高，服务器将相应地将订阅的流升级到更高的分辨率。

有关联播的更多信息，请参阅 [WebRTC联播简介](https://blog.livekit.io/an-introduction-to-webrtc-simulcast-6c5f1f6402eb/)

所有LiveKit的客户端SDK都支持Simulcast。它在默认情况下处于启用状态，并且可以在发布设置中禁用。

## 6、动态广播

LiveKit采用端到端优化设计，可最大限度地减少带宽消耗。动态广播（Dynacast），当订阅者不使用视频层时，会自动暂停发布视频层。此功能也扩展到同步播放的视频：如果订阅者只使用中分辨率和低分辨率层，则高分辨率发布将暂停。

若要激活此功能，请在 Room 选项中设置dynacast: true。

使用SVC编解码器（VP9或AV1）时，Dynacast只能暂停整个流，而不能暂停单个层。这种限制是由于SVC编解码器的编码特性造成的。

## 7、订阅权限

默认情况下，所有参与者都可以订阅发布到房间的任何Track。

在某些情况下，发布者可能希望限制谁可以订阅他们正在发布的Track。

例如，当两个人希望在房间里进行私人对话时。对于这些用例，Track订阅权限 为发布者提供了指定允许谁订阅其Track的方法。

```javascript
localParticipant.setTrackSubscriptionPermissions(false, [
  {
    participantIdentity: "allowed-identity",
    allowAll: true,
  }
])
```
