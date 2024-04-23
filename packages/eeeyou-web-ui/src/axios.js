import axios from 'axios';
import { ElLoading, ElMessage } from 'element-plus';

export default (options) => {
  let loading;
  let loadingNum = 0;
  const service = axios.create({
    method: 'post',
    timeout: 30000,
    baseURL: options.baseURL || '/api',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
  });

  service.interceptors.request.use(
    (config) => {
      loadingNum = loadingNum + 1;
      loading = ElLoading.service({ fullscreen: true });

      if (config.method.toUpperCase() == 'get') {
        config.params = Object.assign(config.params || {}, { t: +new Date() });
      }
      Object.keys(options.headers || {}).forEach((key) => {
        config.headers[key] = typeof options.headers[key] == 'function' ? options.headers[key]() : options.headers[key];
      });
      if (typeof options.transformRequest == 'function') {
        options.transformRequest(config);
      }
      return config;
    },
    (error) => {
      console.error('接口请求报错：', error);
      return Promise.reject(error);
    },
  );

  service.interceptors.response.use(
    (response) => {
      loadingNum = loadingNum - 1;
      if (loadingNum == 0) {
        loading.close();
      }
      const res = response.data;
      if (typeof options.transformResponse == 'function') {
        return options.transformResponse(res);
      }
      return res;
    },
    (error) => {
      loadingNum = loadingNum - 1;
      if (loadingNum == 0) {
        loading.close();
      }
      if (error.code == 'ECONNABORTED') {
        ElMessage.error('请求超时，请稍后重试');
      } else if (error.code == 'ERR_NETWORK') {
        ElMessage.error('网络异常，请稍后重试');
      }
      console.error('接口返回报错：', error);
      return Promise.reject(error);
    },
  );
  return service;
};

/**
 * 参考：https://axios-http.com/zh/
 * 注意：
 * 在请求配置中:
 * transformRequest: [function (data, headers) {
 *  // 此处的data和headers都是对象格式
 *  headers['xxx'] = 'xxx'; // 直接修改，不用返回
 *  // 对data和headers 修改后，return 必须是转成json字符串
 *  return JSON.stringify(data);
 * }],
 * transformResponse: [function (data) {
 *  // 此处的data是json字符串
 *  // 需要转成对象格式返回
 *  return JSON.parse(data);
 * }],
 *
 * 取消请求
 * const controller = new AbortController(); // 浏览器Api
 * axios.get('xxx', {
 *  signal: controller.signal
 * }).then(function(response) {
 * });
 * controller.abort()
 */
