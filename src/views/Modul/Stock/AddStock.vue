<template>
  <div id="addStock">
    <el-card class="box-card">
      <!-- 标题 -->
      <div slot="header" class="clearfix">
        <h3>添加库存</h3>
      </div>
      <!-- 添加表单 -->
      <el-form :model="updatePwd" :rules="rules" ref="updatePwd" label-width="100px">
        <el-form-item label="商品条形码" prop="oldpwd">
          <el-input type="text" v-model="updatePwd.oldpwd" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="数量" prop="newPwd">
          <el-input type="password" v-model="updatePwd.newPwd" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="进价" prop="checkPwd">
          <el-input type="password" v-model="updatePwd.checkPwd" autocomplete="off">
              <template slot="append">元</template>
          </el-input>
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
export default {
  data() {
    // 缓存全局this
    const _this = this;
    //自定义验证函数
    const validateNew = function(rule, value, callback) {
      // 正则规则
      
      const reg = /^[a-zA-z0-9]+$/;
      if (value === "") {
        callback(new Error("新密码不能为空!"));
      } else if (value && (value.length <= 6 || value.length > 10)) {
        callback(new Error("密码为6~10位的数字或字母"));
      } else if (!reg.test(value)) {
        callback(new Error("密码必须为字母或数字!"));
      } else if (value === _this.updatePwd.oldpwd) {
        callback(new Error("新密码不能与旧密码一致"));
      } else {
        callback();
      }
    };
    const validateCheck = function(rule, value, callback) {
      // 正则规则
      if (value === "") {
        callback(new Error("确认密码不能为空!"));
      } else if (value !== _this.updatePwd.newPwd) {
        callback(new Error("两次密码不一致!"));
      } else {
        callback(); // 成功放行
      }
    };
    return {
      updatePwd: {
        oldpwd: "",
        newPwd: "",
        checkPwd: ""
      },
      rules: {
        newPwd: [
          { required: true, validator: validateNew, trigger: "blur" }
        ],
        checkPwd: [
          { required: true, validator: validateCheck, trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    add() {
    //   const _this = this;
      this.$refs.updatePwd.validate(valid => {
        if (valid) {
          this.$message({
            message: "修改成功",
            type: "success",
            duration: 500
          });
        } else {
          this.$message.error("修改失败");
          return false;
        }
      });
    },
    resetForm() {
      this.$refs.updatePwd.resetFields();
    }
  }
};
</script>
<style lang="less">
#addStock {
  h3 {
    margin: 0;
  }
  .el-form {
    width: 35%;
    min-width: 400px;
  }
}
</style>