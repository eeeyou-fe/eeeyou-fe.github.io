<template>
  <div class="login-container">
    <div class="login-wrap">
      <div class="login-logo">
        <img src="/favicon.ico" alt="" width="40" style="display: inline-block; vertical-align: -10px" />
        易油互联
      </div>
      <el-card>
        <template #header>
          <div class="login-header">
            <el-button link size="large">账号密码登录</el-button>
          </div>
        </template>
        <div class="login-info">
          <el-form :model="loginInfo" :rules="loginInfoRules" ref="loginFormRef">
            <el-form-item prop="userName">
              <el-input v-model="loginInfo.userName" placeholder="请填写您的手机号" @keyup.enter.native="login"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input v-model="loginInfo.password" type="password" placeholder="请填写您的密码" @keyup.enter.native="login"></el-input>
              <div class="login-operate">
                <el-checkbox label="记住密码" v-model="remeberPassword"></el-checkbox>
              </div>
            </el-form-item>
            <el-form-item>
              <div class="login-btn">
                <el-button type="primary" @click="login">登录</el-button>
              </div>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </div>
    <div class="login-copyright">2024 © 北京易油互联科技有限公司</div>
  </div>
</template>
<script setup>
import { ref, getCurrentInstance } from 'vue';
import md5 from '@eeeyou/utils/md5';
import rsa from '@eeeyou/utils/rsa';
import commonApi from '/@/api/common';

const { proxy } = getCurrentInstance();
const remeberPassword = ref(true); // 记住密码状态
const loginFormRef = ref(); // 登录form
const loginInfo = ref({
  userName: '',
  password: '',
});
const loginInfoRules = {
  userName: {
    required: true,
    message: '请输入手机号',
  },
  password: {
    required: true,
    message: '请输入密码',
  },
};
const publicKey = `
-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCvMboyz0TuPM60Qbmpu4XfDmly
aRtHNXm8/GExF2Z4uY5q/e54gN1TltRC8lPhd0Iin0yU6rMJZwuwKtCdj5uhBtOq
JdFnEyQFfwc+tgL/KyZHvIbZI78JE4rTMRY4iQjABttcFdjl1tXtgSXj8t3tlocb
ZGoeL4AEX79gDn8zrwIDAQAB
-----END PUBLIC KEY-----
`;
const login = async () => {
  await loginFormRef.value.validate();

  const data = {
    phone: loginInfo.value.userName,
    password: rsa(md5(loginInfo.value.password), publicKey),
  };

  const res = await commonApi.login(data);

  localStorage.setItem('userInfo', JSON.stringify(res.data));
  localStorage.setItem('token', res.data.token);

  if (remeberPassword.value) {
    localStorage.setItem('login_info', JSON.stringify(loginInfo.value));
  } else if (!remeberPassword.value) {
    localStorage.removeItem('login_info');
  }
  proxy.$router.push('/');
};
const info = localStorage.getItem('login_info');
if (info) {
  loginInfo.value = JSON.parse(info);
}
</script>
<style lang="scss" scoped>
.login-container {
  width: 100%;
  height: 100%;
  background: rgb(35, 46, 76);

  .login-wrap {
    width: 360px;
    height: auto;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .login-logo {
      width: 360px;
      margin: 0 auto;
      margin-bottom: 20px;
      font-size: 30px;
      font-weight: bold;
      color: #fff;
      text-align: center;
    }

    .login-header {
      text-align: center;
      color: #409eff;

      button {
        font-weight: bold;
      }
    }

    .login-info {
      width: 100%;
      height: auto;
    }

    .login-operate {
      display: flex;
      justify-content: space-between;
      font-weight: normal;
      color: #98a6ad;
      width: 100%;
    }

    .login-btn {
      text-align: center;
      width: 100%;
    }

    .login-btn .el-button {
      width: 100%;
    }
  }

  .login-copyright {
    font-size: 14px;
    height: 30px;
    position: fixed;
    left: 0;
    bottom: 0;
    text-align: center;
    right: 0;
    color: #98a6ad;

    a {
      color: #409eff;
    }
  }
}
</style>
