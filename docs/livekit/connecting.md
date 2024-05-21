# 连接到房间

## 1、概述

房间是LiveKit中的主要结构。房间由房间名称标识，房间名称只是一个唯一的字符串。

如果客户端尝试连接到指定名称的房间时该房间不存在，则会创建一个新的房间。

连接到房间的用户由Participant对象表示。

每个Participant（参与者）都有一个唯一的身份（也是一个字符串），可以将音频和视频Tracks发布到房间。

同一会议室中的参与者可以订阅其他参与者发布的Tracks

## 2、连接到房间

要连接到LiveKit，先创建一个Room对象，然后调用Room.connect()：

```javascript
const room = new Room();
await room.connect(wsUrl, token);
```
::: info Room.connect() 需要两个必需的参数

- wsUrl（websocket URL），指向您的LiveKit服务器
- token， 是每个参与者用于连接的访问令牌。每个令牌都对其授权连接的房间名称和参与者的唯一身份进行编码。如果多个参与者使用相同的身份连接，则较早的参与者将断开与房间的连接

:::

完整的应用程序应该在您的后端生成一个令牌

连接成功后，Room对象具有两个关键属性：LocalParticipant对象（表示当前用户）和RemoteParticipants（Room中其他用户的数组）。

Room构造函数采用一个可选的RoomOptions对象，该对象可用于配置媒体的捕获和发布方式。有关详细信息，请参考下文“发布Tracks”

要处理房间的状态更改，例如新参与者加入房间或发布新 Track 时，请参考下文“事件处理”

## 3、离开房间

当你的客户离开房间时，你应该通过调用 room.disconnect() 通知LiveKit离开事件。

如果应用程序在未通知LiveKit的情况下关闭，它将继续显示参与者在房间中，（15秒后过期）

> 注：在某些平台（JavaScript和Swift）上，当应用程序退出时，会自动调用Room.disconnect