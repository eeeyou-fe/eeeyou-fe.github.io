---
outline: deep
---

# Table 表格

## 基础用法

<ey-table :column="column" :data="data"></ey-table>

::: code-group

```js [script]
<script setup>
import { ref } from 'vue';

const data = ref({
  url: "/table.json",
});
const column = ref([
  { prop: 'createTime', label: '操作时间', minWidth: 175 },
  { prop: 'phone', label: '操作人手机号', minWidth: 130 },
  { prop: 'name', label: '接口名称', minWidth: 100, showOverflowTooltip: true },
  { prop: 'url', label: '接口地址', minWidth: 150, showOverflowTooltip: true },
  { prop: 'ip', label: 'IP地址', minWidth: 150 },
  { prop: 'request', label: '请求参数', minWidth: 100, showOverflowTooltip: true },
]);
</script>
```

```vue [template]
<ey-table :column="column" :data="data"></ey-table>
```

:::

## 高级搜索

<ey-table :column="column" :data="data" :search="search"></ey-table>

::: code-group

```js [script]
<script setup>
import { ref } from 'vue';

const data = ref({
  url: "/table.json",
});
const column = ref([
  { prop: 'createTime', label: '操作时间', minWidth: 175 },
  { prop: 'phone', label: '操作人手机号', minWidth: 130 },
  { prop: 'name', label: '接口名称', minWidth: 100, showOverflowTooltip: true },
  { prop: 'url', label: '接口地址', minWidth: 150, showOverflowTooltip: true },
  { prop: 'ip', label: 'IP地址', minWidth: 150 },
  { prop: 'request', label: '请求参数', minWidth: 100, showOverflowTooltip: true },
]);
const setOptions = () => {
  search.value[1].options = [{ label: '手机', value: '155' }]
}
const search = ref([
  { prop: 'phone', label: '操作人手机号', component: 'input', defaultValue: '15533442259', onChange: setOptions },
  { prop: 'name', label: '操作人', component: 'select' },
  { prop: 'startTime', label: '操作起始时间', component: 'date-picker', type: 'datetime', format: 'YYYY-MM-DD HH:mm:ss' },
  { prop: 'endTime', label: '操作结束时间', component: 'date-picker', type: 'datetime', format: 'YYYY-MM-DD HH:mm:ss', gte: 'startTime' },
]);
</script>
```

```vue [template]
<ey-table :column="column" :data="data" :search="search"></ey-table>
```

:::

## 导出数据

<ey-table :column="column" :data="data" export="导出"></ey-table>

::: code-group

```js [script]
<script setup>
import { ref } from 'vue';

const data = ref({
  url: "/table.json",
});
const column = ref([
  { prop: 'createTime', label: '操作时间', minWidth: 175 },
  { prop: 'phone', label: '操作人手机号', minWidth: 130 },
  { prop: 'name', label: '接口名称', minWidth: 100, showOverflowTooltip: true },
  { prop: 'url', label: '接口地址', minWidth: 150, showOverflowTooltip: true },
  { prop: 'ip', label: 'IP地址', minWidth: 150 },
  { prop: 'request', label: '请求参数', minWidth: 100, showOverflowTooltip: true },
]);
</script>
```

```vue [template]
<ey-table :column="column" :data="data" export="导出"></ey-table>
```

:::

<script setup>
import { ref } from 'vue';

const tableRef = ref();
const data = ref({
  url: "/table.json",
});
const column = ref([
  { prop: 'createTime', label: '操作时间', minWidth: 175 },
  { prop: 'phone', label: '操作人手机号', minWidth: 130 },
  { prop: 'name', label: '接口名称', minWidth: 100, showOverflowTooltip: true },
  { prop: 'url', label: '接口地址', minWidth: 150, showOverflowTooltip: true },
  { prop: 'ip', label: 'IP地址', minWidth: 150 },
  { prop: 'request', label: '请求参数', minWidth: 100, showOverflowTooltip: true },
]);
const setOptions = () => {
  search.value[1].options = [{ label: '手机', value: '155' }]
}
const search = ref([
  { prop: 'phone', label: '操作人手机号', component: 'input', defaultValue: '15533442259', onChange: setOptions },
  { prop: 'name', label: '操作人', component: 'select' },
  { prop: 'startTime', label: '操作起始时间', component: 'date-picker', type: 'datetime', format: 'YYYY-MM-DD HH:mm:ss' },
  { prop: 'endTime', label: '操作结束时间', component: 'date-picker', type: 'datetime', format: 'YYYY-MM-DD HH:mm:ss', gte: 'startTime' },
]);
</script>
<style>
  table, li {
    margin: 0 !important;
  }
</style>

## Table API