<template>
  <div id="user">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <h3>用户管理</h3>
      </div>
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="username" label="用户名"></el-table-column>
        <el-table-column prop="email" label="邮箱"></el-table-column>
        <el-table-column prop="role" label="角色" :formatter="renderRole"></el-table-column>
        <el-table-column prop="inputTime" label="录入时间"></el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import {listUser} from '@/api/apis.js'
export default {
  data() {
    return {
      tableData: [
        {
          username: "张三",
          email: "zs@qq.com",
          role: 1,
          inputTime: "2019-08-15"
        },
        {
          username: "李四",
          email: "zs@qq.com",
          role: 2,
          inputTime: "2019-08-15"
        },
        {
          username: "王五",
          email: "zs@qq.com",
          role: 1,
          inputTime: "2019-08-15"
        }
      ]
    };
  },
  methods: {
    // 列格式化函数
        // row    : 行数据对象
        // column : elementUI列组件对象
        // cellValue : 当前列的值
        // index : 索引
    renderRole(row, column, cellValue) {
        // 判断role的值为1,即管理员
       if(cellValue===1){
           return '超级管理员'
       }else{// 判断role的值为2,即管理员
           return '普通员工'
       }
    }
  },
  mounted(){
    listUser()
      .then((data)=>{
        this.tableData = data
      })
  }
};
</script>

<style lang="less">
#user {
  h3 {
    margin: 0;
  }
}
</style>