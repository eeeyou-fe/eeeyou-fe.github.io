import { http } from '@eeeyou/web-ui';

const loginUrl = '/MsCommon/login'; // 登录
const logUrl = '/MsCommon/getOperateLogList'; // 日志

const login = (data = {}) => {
  const params = {
    data,
    url: loginUrl,
    transformRequest: [
      (data, headers) => {
        headers['token'] = undefined;
        return JSON.stringify(data);
      },
    ],
    transformResponse: [(data) => JSON.parse(data)],
  };
  return http.request(params);
};

export default {
  login,
  logUrl,
};
