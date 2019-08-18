<template>
  <div id="index">
    <el-container>
      <el-aside width="200px">
         <is-menu></is-menu>
      </el-aside>
      <el-container>
        <el-header>
          <h2 class="el-icon-user-solid">&nbsp;好又多超市管理系统</h2>
        </el-header>
        <el-main>
            <router-view></router-view>
        </el-main>
        <el-footer style="height: 30px;">
          <p>版权所有 © 1996-2019，亚马逊公司或其关联公司</p>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue'
export default {
  data() {
    return {
      labelPosition: "top",
    };
  },
  methods: {
    handleOpen() {
    },
    handleClose() {
    }
  },
  components: {
    'is-menu': Menu
  }
};
</script>

<style lang="less">
#index {
  height: 100%;
  .el-container {
    height: 100%;
  }
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
  h2,
  p {
    margin: 0;
  }
}
.el-footer{
  line-height: 30px;
  font-size: 14px;
}
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
}
body > .el-container {
  margin-bottom: 40px;
}
</style>