<template>
  <div class="ey-table">
    <div class="header" v-if="visible">
      <div style="display: flex; align-items: center">
        <slot name="left"></slot>
        <check :data="props.column" v-if="props.filter" :id="props.data.url"></check>
        <slot name="mid"></slot>
      </div>
      <div class="right" style="margin-left: 20px">
        <el-button v-if="props.search.length" @click="display  = !display" class="search-btn">
          高级搜索
          <i></i>
        </el-button>
        <slot name="right"></slot>
        <export v-if="props.export" :name="props.export"></export>
      </div>
    </div>
    <slot name="search"></slot>
    <el-table :data="list" style="width: 100%" v-bind="$attrs">
      <template v-for="item in column" :key="item">
        <template v-if="item.check !== false">
          <el-table-column v-if="item.type" width="50" v-bind="item" />
          <el-table-column v-else-if="item.slot" v-bind="item">
            <template #default="scope">
              <slot :name="item.slot" :row="scope.row" :$index="scope.$index" />
            </template>
          </el-table-column>
          <el-table-column v-else v-bind="item">
            <template #default="scope">
              {{ scope.row[item.prop] == undefined || scope.row[item.prop] === '' ? '-' : scope.row[item.prop] }}
            </template>
          </el-table-column>
        </template>
      </template>
    </el-table>
    <el-pagination
      :total="total"
      :page-size="limit"
      :currentPage="page"
      :page-sizes="[10, 15, 20]"
      @size-change="sizeChange"
      @current-change="currentChange"
      layout="total, sizes, prev, pager, next, jumper" />
    <search v-show="display" :data="props.search" @close="display = false" @search="handleSearch"></search>
  </div>
</template>
<script setup name="EyTable">
import Check from './check.vue';
import Search from './search.vue';
import Export from './export.vue';
import lodash from '@eeeyou/utils/lodash';
import { ref, watch, computed, useSlots, provide, getCurrentInstance } from 'vue';
const props = defineProps({
  data: {
    type: Object,
    required: true,
    default: {},
  },
  column: {
    type: Array,
    required: true,
    default: [],
  },
  limit: {
    type: Number,
    default: 10,
  },
  format: {
    type: Object,
    default: {
      list: 'dataList',
      count: 'dataCount',
    },
  },
  filter: {
    type: Boolean,
    default: true,
  },
  search: {
    type: Array,
    default: [],
  },
  export: {
    type: [String, Function],
    default: '',
  },
  paging: {
    type: Boolean,
    default: true,
  },
  automatic: {
    type: Boolean,
    default: true,
  },
  transform: {
    type: Function,
    default: (list) => {
      return list;
    },
  },
});

watch(
  () => props.data,
  () => {
    page.value = 1;
    getList();
  },
);
let searchObj = {};
provide('props', props);
provide('searchObj', searchObj);

const page = ref(1);
const list = ref([]);
const total = ref(0);
const display = ref(false);
const limit = ref(props.limit);
const { proxy } = getCurrentInstance();
const emit = defineEmits(['loaded', 'search']);
const visible = computed(() => {
  return props.filter || props.search.length || !!useSlots().left || !!useSlots().mid || !!useSlots().right || !!props.export;
});

const handleSearch = (obj = {}, init) => {
  searchObj = lodash.cloneDeep(obj);
  emit('search', searchObj);
  currentChange(1, init);
};

const currentChange = (current, init) => {
  page.value = current;
  if (init) {
    props.automatic && getList()
  } else {
    getList();
  }
};

const sizeChange = (v) => {
  limit.value = v;
  currentChange(1);
};

const getList = () => {
  const data = lodash.cloneDeep(props.data);
  const key = data.method == 'get' ? 'params' : 'data';
  data[key] = data[key] || {};
  if (props.paging) {
    data[key].page = page.value;
    data[key].limit = limit.value;
  }
  if (props.search.length) {
    Object.keys(searchObj).forEach((k) => {
      data[key][k] = searchObj[k] || undefined;
    });
  }
  proxy.$http.request(data).then((res) => {
    if (props.paging) {
      const data = res.data[props.format.list];
      const count = res.data[props.format.count];
      list.value = props.transform(data);
      total.value = Number(count);
      emit('loaded', { data: res.data, page: page.value });
    } else {
      const data = props.transform(res.data);
      list.value = data.slice(0, limit.value);
      total.value = list.length;
    }
    emit('loaded', { data: res.data, page: page.value });
    display.value = false;
  });
};

defineExpose({
  getList,
});
</script>
<style lang="scss">
.ey-table {
  position: relative;

  .header {
    position: relative;
    margin-bottom: 16px;

    &,
    .right {
      flex: 1;
      min-width: 0;
      display: flex;
      align-items: center;
      justify-content: end;
    }

    .search-btn {
      i {
        border: 1px solid var(--el-button-text-color);
        display: inline-block;
        position: relative;
        margin: 1px 0 0 6px;
        width: 12px;
        height: 0;

        &::before {
          position: absolute;
          content: ' ';
          width: 6px;
          height: 0;
          top: -5px;
          right: -1px;
          border: 1px solid var(--el-button-text-color);
        }

        &::after {
          position: absolute;
          content: ' ';
          width: 9px;
          height: 0;
          top: 3px;
          right: -1px;
          border: 1px solid var(--el-button-text-color);
        }
      }

      &:hover,
      &:focus {
        i {
          &,
          &::after,
          &::before {
            border: 1px solid var(--el-color-primary);
          }
        }
      }
    }
  }

  .search {
    left: 0;
    right: 0;
    bottom: 0;
    top: 48px;
    z-index: 5;
    position: absolute;
    background: rgba(0, 0, 0, 0.1);

    .el-form {
      background: #fff;
      padding: 20px;
      border-top: 1px solid #f0f0f0;

      .el-form-item__label {
        overflow: hidden;
        text-align: right;
        white-space: nowrap;
        display: inline-block;
        text-overflow: ellipsis;
      }
    }
  }

  .el-pagination {
    position: relative;
    margin: 16px 0 1px;
    justify-content: end;

    .el-pagination__sizes {
      position: absolute;
      left: -16px;
    }
  }
}
</style>
