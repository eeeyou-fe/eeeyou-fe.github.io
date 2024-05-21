# 接收Tracks

## 1、概览

在连接到房间时，参与者可以订阅发布到房间的任何Track。启用autoSubscribe（默认）后，服务器会自动为每个可用Track订阅新参与者

## 2、Track订阅

从服务器接收Track开始订阅

正如我们的出版媒体指南中所提到的，LiveKit用两个常量对曲目进行建模：TrackPublication和Track。将TrackPublication视为向服务器注册的曲目的元数据，将track视为原始媒体流。即使未订阅曲目，客户端也始终可以使用曲目发布。

Track订阅回调为您的应用程序提供Track和TrackPublication对象。

```javascript
import {
  connect,
  RoomEvent,
} from 'livekit-client';

room.on(RoomEvent.TrackSubscribed, handleTrackSubscribed)

function handleTrackSubscribed(track: RemoteTrack,publication: RemoteTrackPublication,participant: RemoteParticipant) {
  /* do things with track, publication or participant */
}
```
## 3、媒体播放

订阅音频或视频Track后，即可进行播放

> 在一些平台（Swift、Android和Flutter）上，一旦订阅了音轨，实时播放就会自动开始

```javascript
function handleTrackSubscribed(
  track: RemoteTrack,
  publication: RemoteTrackPublication,
  participant: RemoteParticipant
) {
  // attach track to a new HTMLVideoElement or HTMLAudioElement
  const element = track.attach();
  parentElement.appendChild(element);
  // or attach to existing element
  // track.attach(element)
}
```
## 4、扬声器检测

当音频Track发布时，LiveKit将检测到正在讲话的参与者。向本地和远程参与者发送发言人更新。它们将同时向Room和Participant对象发送信息

```javascript
room.on(RoomEvent.ActiveSpeakersChanged, (speakers: Participant[]) => {
  // speakers contain all of the current active speakers
})

participant.on(ParticipantEvent.IsSpeakingChanged, (speaking: boolean) => {
  console.log(`${participant.identity} is ${speaking ? "now" : "no longer"} speaking. audio level: ${participant.audioLevel}`)
})
```
## 5、选择性订阅

当autoSubscribe被禁用时，LiveKit将依靠客户端来决定它应该订阅哪些Track。这更适合于空间应用程序和/或需要精确控制客户端接收内容的应用程序。

客户端和服务器API都可用于设置选择性订阅的连接，并且一旦配置，只有明确订阅的Track才会发送到客户端。

```javascript
let room = await room.connect(url, token, {
  autoSubscribe: false,
})

room.on(RoomEvent.TrackPublished, (publication, participant) => {
  publication.setSubscribed(true);
})

// also subscribe to tracks published before participant joined
room.remoteParticipants.forEach((participant) => {
  participant.trackPublications.forEach((publication) => {
    publication.setSubscribed(true);
  })
})
```
## 6、自适应流

在应用程序中，渲染轨迹的视频元素的大小可能不同，有时甚至是隐藏的。如果只在150x150的盒子中渲染高分辨率视频，那将是极其浪费的。

自适应流允许开发人员构建动态视频应用程序，而不必担心界面设计或用户交互会如何影响视频质量。它允许我们获取高质量渲染所需的最小比特，并有助于扩展到非常大的会话。

当启用自适应流时，客户端SDK将监控曲目所附加的UI元素的大小和可见性。然后，它将自动与服务器协调，以确保发送回与UI元素匹配的最匹配的联播层。如果元素被隐藏，客户端会通知服务器，服务器会暂停相关的轨迹，直到元素的可见性恢复。

> 对于JS SDK，必须使用Track.attach()才能使自适应流有效

## 7、启用/禁用Track

寻求细粒度控制的客户端实现可以自行启用或禁用Track。这可用于实现用户侧静音。（例如，使房间中的发布者静音，但仅针对当前用户）。

禁用时，客户端将不会接收到该Track的任何新数据。如果随后启用了禁用的Track，则客户端将再次接收新数据。

在优化客户端的带宽消耗时，禁用操作非常有用。例如，如果特定用户的视频Track在屏幕外，禁用此Track将减少LiveKit服务器发送的字节数，直到再次需要该Track的数据为止。（自适应流不需要这样做）

```javascript
import {
  connect,
  RoomEvent,
} from 'livekit-client';

room.on(RoomEvent.TrackSubscribed, handleTrackSubscribed)

function handleTrackSubscribed(
  track: RemoteTrack,
  publication: RemoteTrackPublication,
  participant: RemoteParticipant
) {
  publication.setEnabled(false)
}
```
> 您可能想知道订阅和取消订阅与启用和禁用有何不同。必须订阅并启用轨道，客户端才能接收数据。如果某个曲目尚未订阅（或已取消订阅）或被禁用，则执行这些操作的客户端将不会接收到该曲目的数据。
> 这两种行动的区别在于谈判。订阅需要与LiveKit服务器进行协商握手，而启用/禁用则不需要。根据用户的使用情况，这可以提高启用/禁用的效率，尤其是当轨道可能频繁打开或关闭时。

## 8、Simulcast控件

如果视频轨道已启用联播，则接收客户端可能希望手动指定最大可接收质量。这将导致目标轨道的质量和带宽降低。

例如，当应用程序的用户界面显示特定用户的视频曲目的小缩略图时，这可能会派上用场。

```javascript
import {
  connect,
  RoomEvent,
} from 'livekit-client';

connect('ws://your_host', token, {
  audio: true,
  video: true,
}).then((room) => {
  room
    .on(RoomEvent.TrackSubscribed, handleTrackSubscribed)
});

function handleTrackSubscribed(
  track: RemoteTrack,
  publication: RemoteTrackPublication,
  participant: RemoteParticipant
) {
  if (track.kind === Track.Kind.Video) {
    publication.setVideoQuality(VideoQuality.LOW)
  }
}
```
