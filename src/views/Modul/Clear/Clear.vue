<template>
  <div id="clear">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <h3>销售明细</h3>
      </div>
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item label="开始时间">
          <el-input placeholder></el-input>
        </el-form-item>
        <el-form-item label="结束时间">
          <el-input placeholder></el-input>
        </el-form-item>
        <el-form-item label="关键字">
          <el-input placeholder></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">搜索</el-button>
        </el-form-item>
      </el-form>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="barCode" label="订单号"></el-table-column>
        <el-table-column prop="name" label="名称"></el-table-column>
        <el-table-column prop="category" label="数量"></el-table-column>
        <el-table-column prop="salePrice" label="实际售价"></el-table-column>
        <el-table-column prop="marketPrice" label="优惠(促销/会员)"></el-table-column>
        <el-table-column prop="stockPrice" label="退款"></el-table-column>
        <el-table-column prop="stockCount" label="销售时间"></el-table-column>
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
          barCode: "35444456",
          name: "哇哈哈",
          category: "1",
          salePrice: "998",
          marketPrice: "80%",
          stockPrice: "900",
          stockCount: "2019-04-04",
        }
      ]
    };
  }
};
</script>

<style lang="less">
#clear {
  h3 {
    margin: 0;
  }
}
</style>