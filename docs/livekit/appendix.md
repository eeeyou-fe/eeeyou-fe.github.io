# 附录

## 1、常用属性

> const room = new Room(options);

room 对象两个关键属性：

1. LocalParticipant对象（表示当前用户）
2. RemoteParticipants（Room中其他用户的数组）

## 2、常用方法

#### 1、getParticipantByIdentity （room对象下的方法）

根据identity获取Participant对象

#### 2、getTrackPublication （Participant对象下的方法）

获取Participant对象的具体发布的track信息

需要1个参数，常用值："camera", "microphone"