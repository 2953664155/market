<template>
  <div id="adduser">
    <el-card class="box-card">
      <!-- 标题 -->
      <div slot="header" class="clearfix">
        <h3>添加用户</h3>
      </div>
      <!-- 添加表单 -->
      <el-form :model="newUser" :rules="rules" ref="addUserForm" label-width="100px">
        <el-form-item label="用户名" prop="username">
          <el-input type="text" v-model="newUser.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="newUser.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="newUser.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="角色" prop="role">
          <el-select v-model="newUser.role" placeholder="请选择用户角色">
            <el-option label="超级管理员" value="1"></el-option>
            <el-option label="普通员工" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="add">添加</el-button>
          <el-button @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
import { addUser } from "@/api/apis.js";
export default {
  data() {
    // 缓存全局this
    const _this = this;

    // 自定义验证函数
    // rule 验证规则对象,可以拿到验证函数
    // value输入框的值(验证的核心数据)
    // callback 结果回调函数
    const validatePass = function(rule, value, callback) {
      // 正则规则
      const reg = /^[a-zA-z0-9]+$/;

      if (value === "") {
        callback(new Error("密码不能为空!"));
      } else if (value && (value.length <= 6 || value.length > 10)) {
        callback(new Error("密码为6~10位的数字或字母"));
      } else if (!reg.test(value)) {
        callback(new Error("密码必须为字母或数字!"));
      } else {
        callback(); // 成功放行
      }
    };

    const validateCheckPass = function(rule, value, callback) {
      if (value === "") {
        callback(new Error("密码不能为空!"));
      } else if (value !== _this.newUser.password) {
        callback(new Error("两次密码不一致!"));
      } else {
        callback(); // 成功放行
      }
    };

    return {
      newUser: {
        username: "",
        password: "",
        checkPass: "",
        role: ""
      },
      rules: {
        // 属性名  :  验证规则集合
        username: [
          { required: true, message: "请输入用户名称", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "用户名长度在 3 到 10 个字符",
            trigger: "blur"
          }
        ],
        password: [
          { required: true, validator: validatePass, trigger: "blur" }
        ],
        checkPass: [
          { required: true, validator: validateCheckPass, trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    add() {
      const _this = this;
      this.$refs.addUserForm.validate(valid => {
        if (valid) {
          // this.$message({
          //   message: "添加成功",
          //   type: "success",
          //   duration: 500,
          //   onClose() {
          //     _this.$router.push('/index/user')
          //   }
          // });
          addUser(this.newUser).then(data => {
            if (data.success) {
              _this.$message({
                message: "添加成功",
                type: "success",
                duration: 500,
                onClose() {
                  _this.$router.push("/index/user");
                }
              });
            } else {
              _this.$message({
                message: "添加失败",
                type: "error",
                duration: 500
              });
              return false;
            }
          });
        } else {
          _this.$message({
            message: "添加失败",
            type: "error",
            duration: 500
          });
          return false;
        }
      });
    },
    resetForm() {
      this.$refs.addUserForm.resetFields();
    }
  }
};
</script>
<style lang="less">
#adduser {
  h3 {
    margin: 0;
  }
  .el-form {
    width: 35%;
    min-width: 400px;
  }
}
</style>