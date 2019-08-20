<template>
  <div id="clearout">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <h3>销售明细</h3>
      </div>
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item label="条形码">
          <el-input placeholder></el-input>
        </el-form-item>
        <el-form-item label="数量">
          <el-input placeholder></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">加入订单</el-button>
        </el-form-item>
      </el-form>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="barCode" label="名称"></el-table-column>
        <el-table-column prop="name" label="数量"></el-table-column>
        <el-table-column prop="category" label="单价(元)"></el-table-column>
        <el-table-column prop="salePrice" label="总价(元)"></el-table-column>
        <el-table-column prop="marketPrice" label="优惠总价(元)"></el-table-column>
      </el-table>
      <el-form status-icon label-width="100px" class="demo-ruleForm" label-position="top">
        <el-form-item label="会员卡号" prop="pass">
          <el-input type="text" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">提交</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="less">
#clearout {
  h3 {
    margin: 0;
  }
  input.el-input__inner{
    min-width: 300px;
    width: 30%;
  }
}
</style>