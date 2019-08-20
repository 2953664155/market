<template>
  <div id="clearback">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <h3>商品退货</h3>
      </div>
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item label="订单号">
          <el-input placeholder=""></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary">查询</el-button>
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
#clearback {
  h3 {
    margin: 0;
  }
}
</style>