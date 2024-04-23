<template>
  <el-dropdown trigger="click" :hide-on-click="false" @command="changeFilter">
    <el-button type="primary" plain>
      筛选列
      <el-icon class="el-icon--right">
        <CaretBottom />
      </el-icon>
    </el-button>
    <template #dropdown>
      <el-dropdown-menu>
        <el-scrollbar max-height="300px">
          <template v-for="item in props.data">
            <el-dropdown-item v-if="item.filter !== false" :command="item.prop">
              <el-icon :style="{ visibility: item.check === false ? 'hidden' : 'visible' }">
                <Check />
              </el-icon>
              <span>{{ item.label }}</span>
            </el-dropdown-item>
          </template>
        </el-scrollbar>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script setup>
const props = defineProps({
  id: String,
  data: {
    type: Array,
    required: true,
    default: [],
  },
});
let cols = localStorage.getItem(window.location.pathname + props.id);
if (cols) {
  cols = JSON.parse(cols);
  props.data.forEach((obj) => {
    obj.check = cols[obj.prop] !== undefined ? cols[obj.prop] : obj.check;
  });
} else {
  cols = {};
  props.data.forEach((obj) => {
    cols[obj.prop] = obj.check === false ? false : true;
  });
}
const changeFilter = (key) => {
  props.data.forEach((obj) => {
    if (obj.prop == key) {
      obj.check = obj.check !== false ? false : true;
    }
    cols[obj.prop] = obj.check === false ? false : true;
  });
  localStorage.setItem(window.location.pathname + props.id, JSON.stringify(cols));
};
</script>
