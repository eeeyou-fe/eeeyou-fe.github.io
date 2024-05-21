# 事件处理

## 1、概述

客户端SDK通过事件与房间正在发生的应用程序更改进行通信。

有两种类型的事件，房间相关事件和参与者相关事件。

房间事件从主房间对象发出，反映房间中的任何更改。

当特定参与者发生变化时，每个参与者都会收到参与者事件。

房间事件通常是参与者事件的超集。

正如您所看到的，有些事件同时在Room和Participant上启动；这是故意的。

## 2、事件

| 事件名 | 描述 | 房间事件 | 参与者事件 |
| --- | --- | --- | --- |
| ParticipantConnected | 远程参与者加入 | √ |  |
| ParticipantDisconnected | 远程参与者离开 | √ |  |
| Reconnecting | 与服务器连接已中断，正尝试重新连接 | √ |  |
| Reconnected | 重新连接成功 | √ |  |
| Disconnected | 与房间断开连接 | √ |  |
| TrackPublished | 本地参与者加入后，将Track发布到房间 | √ | √ |
| TrackUnpublished | 远程参与者取消发布Track | √ | √ |
| TrackSubscribed | 本地参与者订阅Track | √ | √ |
| TrackUnsubscribed | 取消先前订阅的Track | √ | √ |
| TrackMuted | 静音 | √ | √ |
| TrackUnmuted | 取消静音 | √ | √ |
| LocalTrackPublished | 已成功发布本地Track | √ | √ |
| LocalTrackUnpublished | 本地Track未发布 | √ | √ |
| ActiveSpeakersChanged | 当前活动扬声器已更改 | √ |  |
| IsSpeakingChanged | 当前参与者已更改发言状态 |  | √ |
| ConnectionQualityChanged | 参与者的连接质量已更改 | √ | √ |
| ParticipantMetadataChanged | 参与者的元数据已通过服务器API更新 | √ | √ |
| RoomMetadataChanged | 房间关联的元数据已更改 | √ |  |
| DataReceived | 接收到数据 | √ | √ |
| TrackStreamStateChanged | Track流状态已更改 | √ | √ |
| TrackSubscriptionPermissionChanged | Track 订阅权限已更改 | √ | √ |
| ParticipantPermissionsChanged | 参与者的权限更改 | √ | √ |

