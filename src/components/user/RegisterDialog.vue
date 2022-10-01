<template>
   <el-button type="text" @click="openRegisterDiaLog = true">注册</el-button>
   <el-dialog
    v-model="openRegisterDiaLog"
    title="注册账号"
    width="50%"
    height="50%"
    :before-close="handleClose"
  >
  <div class="userNameInput"><el-input v-model="userName" placeholder="用户名" clearable /></div>
  <div class="passwordInput">
    <el-input
    v-model="password"
    type="password"
    placeholder="密码"
    show-password
  />
  </div>
  <div class="passwordInput">
    <el-input
    v-model="verificationPassword"
    type="password"
    placeholder="确认密码"
    show-password
  />
  </div>
  <div class="registerButton">
    <el-button >注册</el-button>
  </div>
  
</el-dialog>
</template>

<script lang="ts">
import { ref } from '@vue/reactivity'
export default {
    name: "register_dialog",
    setup() {
        const userName = ref("")
        const password = ref("")
        const verificationPassword = ref("")
        const openRegisterDiaLog = ref(false)
        return {
            userName,
            password,
            openRegisterDiaLog,
            verificationPassword
        }
    }
}
</script>

<style>
    .userNameInput {
        width: 60%;
        margin-left: 20%;

    }
    .passwordInput {
        width: 60%;
        margin-top: 5%;
        margin-left: 20%;
    }
    .registerButton {
        margin-top: 5%;
        text-align: center;
    }

</style>