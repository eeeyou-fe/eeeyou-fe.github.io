<template>
  <div class="search">
    <el-form :model="form" class="form" label-position="right" label-width="120px">
      <el-row>
        <template v-for="item in props.data">
          <el-col :sm="12" :lg="8" :xl="6" v-if="item.display !== false">
            <el-form-item>
              <template #label><span :title="item.label">{{ item.label }}</span></template>
              <component :is="'el-' + item.component" v-model="form[item.prop]" :value-format="item.format" @change="item.onChange ? item.onChange($event, form) : null" v-bind="item">
                <template v-if="item.component == 'select'">
                  <el-option v-for="obj in item.options" :label="obj.label" :value="obj.value" />
                </template>
                <!--date-picker 打包后没有正常显示数字，所以用了插槽-->
                <template #default="cell" v-if="item.component == 'date-picker'">
                  <div class="el-date-table-cell">
                    <span class="el-date-table-cell__text">{{ cell.text }}</span>
                  </div>
                </template>
              </component>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
      <el-row style="justify-content: end">
        <el-button @click="emit('close')">取消</el-button>
        <el-button @click="form = {}">重置</el-button>
        <el-button type="primary" plain @click="search()">搜索</el-button>
      </el-row>
    </el-form>
  </div>
</template>
<script setup>
import { ref, getCurrentInstance } from 'vue';

const emit = defineEmits(['close', 'search']);
const props = defineProps({
  data: {
    type: Array,
    default: [],
  },
});
const form = ref({});
const { proxy } = getCurrentInstance();
const search = (init) => {
  for (let i = 0; i < props.data.length; i++) {
    const obj = props.data[i];
    if (form.value[obj.prop] && obj.gte && obj.component == 'date-picker' && form.value[obj.gte]) {
      if (Date.parse(form.value[obj.prop]) < Date.parse(form.value[obj.gte])) {
        proxy.$message.error('起始时间不能大于结束时间');
        return;
      }
    }
  }
  emit('search', form.value, init);
};
const init = () => {
  const tmpForm = {};
  props.data?.forEach((v) => {
    tmpForm[v.prop] = form.value[v.prop] || v.defaultValue;
  });
  form.value = tmpForm;
  search(true);
}
init();
</script>
