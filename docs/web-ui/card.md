# Card 卡片

## 基础用法

<ey-card title="卡片标题">
  这里是内容区域
</ey-card>

::: code-group

```vue [template]
<ey-card title="卡片标题">
  这里是内容区域
</ey-card>
```

:::

## 扩展设置

<ey-card title="卡片标题">
  <template #extra>
    <el-button type="primary" link>扩展设置在右侧</el-button>
  </template>
  这里是内容区域
</ey-card>

::: code-group

```vue [template]
<ey-card title="卡片标题">
  <template #extra>
    <el-button type="primary" link>扩展设置在右侧</el-button>
  </template>
  这里是内容区域
</ey-card>
```

:::