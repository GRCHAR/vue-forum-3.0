<template>
  <el-button type="text" @click="openLoginDiaLog = true">登录</el-button>
  <el-dialog
    v-model="openLoginDiaLog"
    title="登录账号"
    width="30%"
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
  <div class="registerButton">
    <el-button >登录</el-button>
  </div>
    </el-dialog>
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
    name: "login_dialog",
    setup() {
        const userName = ref("")
        const password = ref("")
        const verificationPassword = ref("")
        const openLoginDiaLog = ref(false)
        return {
            userName,
            password,
            openLoginDiaLog,
            verificationPassword
        }
    }
}
</script>

<style>

</style>