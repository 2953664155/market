<template>
  <div id="login" @keyup.enter="login">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <i class="el-icon-goods"></i>
        <span>超市管理系统</span>
      </div>
      <el-form
        :model="users"
        status-icon
        :rules="rules"
        ref="loginForm"
        label-width="80px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="username">
          <el-input type="text" v-model="users.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="users.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login">登录</el-button>
          <el-button @click="resetForm('loginForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
// import { log } from 'util'
// import { close } from 'fs';
export default {
  data() {
    return {
      users: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 10, message: "长度在 3 到 10 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, max: 6, message: "长度在 3 到 6 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    //登录
    login() {
      const _this = this;
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.$message({
            message: "登录成功",
            type: "success",
            duration: 500,
            onClose() {
              // _this.$router.push('/index')
              _this.$router.replace("/index/product");
            }
          });
        } else {
          this.$message.error("登录失败");
          return false;
        }
      });
    },
    resetForm() {
      // 调用form组件的resetFields方法
      this.$refs.loginForm.resetFields();
    }
  }
};
</script>

<style lang="less">
#login {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .el-card {
    width: 500px;
  }
  .el-card__header {
    text-align: center;
    font-size: 20px;
  }
}
</style>