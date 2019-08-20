<template>
  <div id="member">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <h3>会员管理</h3>
      </div>
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item label="搜索">
          <el-input placeholder></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">搜索</el-button>
        </el-form-item>
      </el-form>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="barCode" label="会员卡卡号"></el-table-column>
        <el-table-column prop="name" label="会员姓名"></el-table-column>
        <el-table-column prop="category" label="会员等级"></el-table-column>
        <el-table-column prop="salePrice" label="会员积分"></el-table-column>
        <el-table-column prop="marketPrice" label="折扣"></el-table-column>
        <el-table-column prop="stockPrice" label="手机号"></el-table-column>
        <el-table-column prop="stockCount" label="座机号"></el-table-column>
      </el-table>
      <el-pagination background layout="prev, pager, next" :total="10"></el-pagination>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
        tableData: [
        {
          barCode: "021562",
          name: "张胜男",
          category: "铜牌会员",
          salePrice: "218",
          marketPrice: "80%",
          stockPrice: "13999999011",
          stockCount: "13999999022",
        }
      ]
    };
  }
};
</script>

<style lang="less">
#member {
  h3 {
    margin: 0;
  }
}
</style>