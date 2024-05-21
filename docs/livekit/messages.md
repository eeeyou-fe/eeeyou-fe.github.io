# 数据消息

通过LiveKit维护房间状态，您可以使用它来传递自定义应用程序数据。我们有一个灵活的系统，使您能够从后端和参与者之间传递消息。

## 1、参与者元数据

LiveKit参与者具有一个元数据字段，允许您存储特定于应用程序的数据。这可以包括各种与参与者相关的信息。
元数据经过encode放到在参与者用于连接到房间的访问令牌中。

##### 示例：从客户端更新元数据

当授予canUpdateOwnMetadata权限时，参与者还可以从客户端SDK更新自己的名称和元数据

```javascript
const data = JSON.stringify({
  some: "values",
})
room.localParticipant.setMetadata(data)
room.localParticipant.setName('new name')
```

## 2、房间元数据

与参与者元数据类似，Rooms还提供了一个元数据字段，您可以在其中存储特定于应用程序的数据。这可用于存储所有参与者都能看到的有关房间的数据。

您可以使用CreateRoom API设置Room元数据，并使用UpdateRoomMetadata API进行更新。

当房间元数据发生更改时，会触发RoomMetadataChanged事件，通知房间内的所有参与者

## 3、数据消息

LiveKit允许您通过LocalParticipant.publishData API从服务器和客户端向房间中的任何参与者发布任意数据消息。

房间数据通过WebRTC数据通道发布到SFU；并且LiveKit服务器将该数据转发给房间中的一个或多个参与者。

从服务器端来看，此API在RoomService上公开为SendData

由于数据是通过UDP发送的，因此您在传输可靠性方面具有灵活性。我们支持可靠和有损。在可靠模式下，您的数据包将被重新传输，直到收到为止。对于诸如室内聊天之类的用例，这是优选的。

当使用有损传输时，我们建议保持数据包较小（在1.4k的网络MTU下）。如果一条消息被打包成多个数据包，而单个数据包没有到达，则您的客户端根本不会收到该消息。

```javascript
const strData = JSON.stringify({some: "data"})
const encoder = new TextEncoder()
const decoder = new TextDecoder()

// publishData接收一个Uint8Array，所以我们需要转换它
const data = encoder.encode(strData);

// 将有损数据发布到整个房间
room.localParticipant.publishData(data, {reliable: false})

// 向一组参与者发布可靠的数据
room.localParticipant.publishData(data, {reliable: true, destinationIdentities: ['my-participant-identity']})

// 接收来自其他参与者的数据
room.on(RoomEvent.DataReceived, (payload: Uint8Array, participant: Participant, kind: DataPacket_Kind) => {
  const strData = decoder.decode(payload)
  // ...
})
```
