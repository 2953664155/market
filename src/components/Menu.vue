<template>
  <div id="menu">
    <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
    <h3>欢迎admin登录</h3>
    <!-- 
        default-active:   当前激活菜单的 index
        unique-opened:    是否只保持一个子菜单的展开
    -->
    <el-menu
      :default-active="$route.fullPath" 
      class="el-menu-vertical-demo"
      unique-opened
      router
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-submenu :index="menu.index" v-for="menu in treelist" :key="menu.index">
        <template slot="title">
          <i :class="menu.cls"></i>
          <span>{{menu.title}}</span>
        </template>

        <el-menu-item :index="item.index" v-for="item in menu.children" :key="item.index">
          <span slot="title">{{item.name}}</span>
        </el-menu-item>
      </el-submenu>
     
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 动态菜单创建
      treelist: [
        {
          index: "1",
          cls: "el-icon-s-goods",
          title: "商品管理",
          children: [
            { index: "/index/product", name: "商品管理" },
            { index: "/index/addProduct", name: "添加管理" }
          ]
        },
        {
          index: "2",
          cls: "el-icon-s-help",
          title: "账号管理",
          children: [
            { index: "/index/user", name: "账号管理" },
            { index: "/index/changePassword", name: "修改密码" },
            { index: "/index/addUser", name: "增加账号" }
          ]
        },
        {
          index: "3",
          cls: "el-icon-s-claim",
          title: "进货管理",
          children: [
            { index: "/index/stock", name: "库存管理" },
            { index: "/index/addStock", name: "添加库存" }
          ]
        },
        {
          index: "4",
          cls: "el-icon-s-order",
          title: "出货管理",
          children: [
            { index: "/index/clear", name: "销售列表" },
            { index: "/index/clearout", name: "商品出库" },
            { index: "/index/clearback", name: "商品退货" }
          ]
        },
        {
          index: "5",
          cls: "el-icon-s-data",
          title: "统计管理",
          children: [
            { index: "/index/sta", name: "销售统计" },
            { index: "/index/stocksta", name: "进货统计" }
          ]
        },
        {
          index: "6",
          cls: "el-icon-s-custom",
          title: "会员管理",
          children: [
            { index: "/index/xxxx", name: "账号管理" },
            { index: "/index/yyyyy", name: "添加账号" }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="less">
  #menu{
    height: 100%;
    .el-menu{
      height: 86%;
    }
  }
</style>