<template>
  <div id="stock">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <h3>库存管理</h3>
      </div>
      <el-form :inline="true"  class="demo-form-inline">
        <el-form-item label="分类: ">
          <el-select  placeholder="请选择分类">
            <el-option label="分类一" value="shanghai"></el-option>
            <el-option label="分类二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="关键字: ">
          <el-input  placeholder="关键字"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary">搜索</el-button>
        </el-form-item>
      </el-form>
      <el-divider></el-divider>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="barCode" label="商品条形码"></el-table-column>
        <el-table-column prop="name" label="商品名称"></el-table-column>
        <el-table-column prop="category" label="进价(元)"></el-table-column>
        <el-table-column prop="salePrice" label="入库"></el-table-column>
        <el-table-column prop="marketPrice" label="库存"></el-table-column>
        <el-table-column prop="stockPrice" label="已售"></el-table-column>
      </el-table>
      <el-pagination background layout="prev, pager, next" :total="100"></el-pagination>
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
          category: "饮品",
          salePrice: "10.00",
          marketPrice: "8.00",
          stockPrice: "5",
          stockCount: "500.00",
          address: "1.00"
        }
      ]
    };
  }
};
</script>

<style lang="less">
#stock {
  h3 {
    margin: 0;
  }
  .el-divider{
    margin: 0;
  }
}
</style>