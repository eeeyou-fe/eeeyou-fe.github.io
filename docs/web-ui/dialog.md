# Dialog 对话框

## 基础用法
<client-only>
    <el-button type="primary" @click="visible = true">打开对话框</el-button>
    <ey-dialog v-model:visible="visible" title="对话框" width="400px">
        我是一个基础对话框
        <template #footer>
            <el-button type="primary" @click="visible = false">确认</el-button>
            <el-button @click="visible = false">取消</el-button>
        </template>
    </ey-dialog>
</client-only>

::: code-group

```js [script]
<script setup>
import {ref} from 'vue';
const visible = ref(false);
</script>
```

```vue [template]
<el-button type="primary" @click="visible = true">打开对话框</el-button>
<ey-dialog v-model:visible="visible" title="对话框" width="400px">
    我是一个基础对话框
    <template #footer>
        <el-button type="primary" @click="visible = false">确认</el-button>
        <el-button @click="visible = false">取消</el-button>
    </template>
</ey-dialog>
```

:::

## 左侧标签

<client-only>
    <el-button type="primary" @click="visible1 = true">打开对话框</el-button>
    <ey-dialog v-model:visible="visible1" title="对话框" width="600px" :leftMenu="leftMenu" v-model:tabIdx="tabIdx">
        <div v-if="tabIdx == 0">基本信息在这儿</div>
        <div v-else-if="tabIdx == 1">关联附件在这儿</div>
        <div v-else-if="tabIdx == 3">操作日志在这儿</div>
        <template #footer v-if="tabIdx == 3">
            <el-button type="primary" @click="visible1 = false">确认</el-button>
            <el-button @click="visible1 = false">取消</el-button>
        </template>
    </ey-dialog>
</client-only>


<script setup>
import { ref } from 'vue';
const tabIdx = ref(0);
const visible = ref(false);
const visible1 = ref(false);
const leftMenu = ref(['基本信息', '关联附件', '', '操作日志']);
</script>