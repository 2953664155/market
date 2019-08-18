<template>
  <div id="product">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <h3>商品列表</h3>
      </div>
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item>
          <el-select placeholder="活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="关键字">
          <el-input placeholder="审批人"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary">搜索</el-button>
        </el-form-item>
      </el-form>
      <el-divider></el-divider>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="barCode" label="商品条形码"></el-table-column>
        <el-table-column prop="name" label="商品名称"></el-table-column>
        <el-table-column prop="category" label="所属分类"></el-table-column>
        <el-table-column prop="salePrice" label="售价(元)"></el-table-column>
        <el-table-column prop="marketPrice" label="促销价(元)"></el-table-column>
        <el-table-column prop="stockPrice" label="库存"></el-table-column>
        <el-table-column prop="stockCount" label="库存总额(元)"></el-table-column>
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="10"
      ></el-pagination>
    </el-card>
  </div>
</template>

<script>
import { product } from "@/api/apis.js";

export default {
  data() {
    return {
      pageSize: 2,
      total: 10,
      currentPage: 1,
      productList: {
        fl: ""
      },
      tableData: [
        {
          barCode: "35444456",
          name: "哇哈哈",
          category: "饮品",
          salePrice: "10.00",
          marketPrice: "8.00",
          stockPrice: "5",
          stockCount: "500.00",
          address: "1.00"
        }
      ]
    };
  },
  mounted() {
    product(this.pageSize, this.currentPage).then(data => {
      this.tableData = data.data;
      this.total = data.total;
    });
  }
};
</script>

<style lang="less">
#product {
  h3 {
    margin: 0;
  }
  .el-divider {
    margin: 0;
  }
}
</style>