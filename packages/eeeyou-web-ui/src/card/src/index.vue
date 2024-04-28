<template>
  <div class="ey-card">
    <div class="card-header">
      <p class="card-header-name">{{ props.title }}</p>
      <slot name="extra"></slot>
    </div>
    <div class="card-content">
      <slot></slot>
    </div>
  </div>
</template>
<script setup name="EyCard">
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
});
</script>
<style lang="scss">
.ey-card {
  border: 1px solid var(--el-border-color-lighter);
  border-radius: 8px;
  margin-bottom: 16px;
  .card-header {
    height: 40px;
    background: var(--el-fill-color-lighter);
    border-bottom: 1px solid var(--el-border-color-lighter);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 12px;
    .card-header-name {
      color: var(--el-text-color-regular);
      font-size: 14px;
      line-height: 40px;
    }
  }
  .card-content{
    padding: 16px;
  }

  +.ey-card {
    margin-top: 12px;
  }
}
</style>