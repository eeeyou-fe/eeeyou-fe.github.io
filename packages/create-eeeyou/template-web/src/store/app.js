import { ref, computed } from 'vue';
import { defineStore } from '@eeeyou/web-ui';

export const appStore = defineStore('app', () => {
  const menu = ref({});
  const getMenu = computed(() => {
    return menu.value;
  });
  const setMenu = (obj) => {
    menu.value = obj;
  };
  return { getMenu, setMenu };
});
