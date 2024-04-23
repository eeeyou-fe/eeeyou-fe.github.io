<template>
  <el-button type="primary" plain style="margin-left: 10px" @click="handleExport">导出数据</el-button>
</template>
<script setup>
import xlsx from '@eeeyou/utils/xlsx';
import lodash from '@eeeyou/utils/lodash';
import { inject, getCurrentInstance } from 'vue';

const props = inject('props');
const searchObj = inject('searchObj');
const { proxy } = getCurrentInstance();

const exportFun = (list = []) => {
  let arr = [];
  const excelList = [];
  const columnList = props.column.filter(v => v.filter !== false && v.export !== false);
  columnList.forEach((item) => {
    arr.push(item.label);
  });
  excelList.push(arr);
  list.forEach((obj) => {
    arr = [];
    columnList.forEach((item) => {
      if (item.export) {
        arr.push(item.export(obj));
      } else {
        arr.push(obj[item.prop] != undefined ? obj[item.prop] : '');
      }
    });
    excelList.push(arr);
  });
  const name = typeof props.export == 'string' ? props.export : props.export();
  const data = xlsx.utils.aoa_to_sheet(excelList);
  const wb = xlsx.utils.book_new();
  xlsx.utils.book_append_sheet(wb, data, name);
  xlsx.writeFile(wb, name + '.xlsx');
}

const handleExport = () => {
  const data = lodash.cloneDeep(props.data);
  const key = data.method == 'get' ? 'params' : 'data';
  data[key] = data[key] || {};
  if (props.paging) {
    data[key].page = 1;
    data[key].limit = 500;
  }
  if (props.search.length) {
    Object.keys(searchObj).forEach((k) => {
      data[key][k] = searchObj[k] || undefined;
    });
  }
  let exportArr = [];
  proxy.$http.request(data).then(async (res) => {
    exportArr = exportArr.concat((res.data || {})[props.format.list] || res.data);
    const count = (res.data || {})[props.format.count];
    if (count > 500) {
      const len = Math.ceil((count - 500) / 500);
      for (let i = 0; i < len; i++) {
        data[key].page = i + 2;
        const obj = await proxy.$http.request(data);
        exportArr = exportArr.concat((obj.data || {})[props.format.list] || obj.data);
      }
      exportFun(props.transform(exportArr));
    } else {
      exportFun(props.transform(exportArr));
    }
  })
};
</script>
