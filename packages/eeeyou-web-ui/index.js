import 'element-plus/dist/index.css';
import ElementPlus from 'element-plus';
import { createPinia, defineStore } from 'pinia';
import * as ElIcons from '@element-plus/icons-vue';
import zhCn from 'element-plus/es/locale/lang/zh-cn';

import createRouter from './src/router';
import createHttp from './src/axios';

import EyDialog from './src/dialog';
import EyTable from './src/table';
import EyMenuItem from './src/menu-item';

const components = {
  EyDialog,
  EyMenuItem,
  EyTable,
};

let http;

const install = (app, options = {}) => {
  app.use(createPinia());
  app.use(ElementPlus, { locale: zhCn });
  const { base, routes, afterEach, beforeEach } = options;
  app.use(createRouter({ base, routes, afterEach, beforeEach }));
  for (const key in ElIcons) {
    app.component(key, ElIcons[key]);
  }
  for (const key in components) {
    app.component(key, components[key]);
  }
  Object.defineProperties(app._context.components.ElDialog.props, {
    closeOnClickModal: { value: { default: false, type: Boolean } },
    draggable: { value: { default: true, type: Boolean } },
  });
  Object.defineProperties(app._context.components.ElTable.props, {
    border: { value: { default: true, type: Boolean } },
    stripe: { value: { default: true, type: Boolean } },
    headerCellStyle: { value: { default: { background: 'var(--el-fill-color-light)' } } },
  });
  Object.defineProperties(app._context.components.ElTableColumn.props, {
    align: { value: { default: 'center', type: String } },
  });
  Object.defineProperties(app._context.components.ElSelect.props, {
    filterable: { value: { default: true, type: Boolean } },
  });
  const { baseURL, headers, transformRequest, transformResponse } = options;
  http = createHttp({ baseURL, headers, transformRequest, transformResponse });

  app.config.globalProperties.$http = http;
};

export { defineStore, http };

export default {
  install,
};
