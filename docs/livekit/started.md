# 快速上手

## 1、安装
```javascript
npm install livekit-client --save
```
## 2、加入房间
```javascript
import { Room } from 'livekit-client';

const wsURL = "<your LiveKit server URL>" // 后端提供的wss地址
const token = "<generate a token>" // 这个需要后端接口处理
const options = { ... }; // 具体配置，请参考下文“配置项”

const room = new Room(options);
await room.connect(wsURL, token);
console.log('connected to room', room.name);

// 发布Track（本地摄像头和麦克风）到房间
await room.localParticipant.enableCameraAndMicrophone();

// 事件处理 （其他事件请参考下文“事件处理”）
room.on('participantConnected', handleParticipantConnected); // 远程参与者加入
room.on('participantDisconnected', handleParticipantDisconnected); // 远程参与者离开
room.on('trackSubscribed', handleTrackSubscribed); // 订阅Track
room.on('trackUnsubscribed', handleTrackUnsubscribed); // 取消订阅Track
room.on('trackMuted', handleTrackMuted); // 关闭 摄像头/麦克风
room.on('trackUnmuted', handleTrackUnmuted); // 开启 摄像头/麦克风
room.on('localTrackPublished', handleLocalTrackPublished); // 发布本地Track
room.on('localTrackUnpublished', handleLocalTrackUnpublished); // 取消本地Track
room.on('participantMetadataChanged', handleParticipantMetadataChanged); // 参与者的元数据已通过服务器API更新
```
