<template>
  <div id="addMember">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <h3>添加编辑张号</h3>
      </div>
      <el-form
        :model="product"
        status-icon
        :rules="rules"
        label-position="left"
        label-width="80px"
        ref="productFrom"
      >
        <el-form-item label="真实姓名" prop="name">
          <el-input type="text" v-model="product.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="会员卡号" prop="name">
          <el-input type="text" v-model="product.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="用户组" prop="category">
          <el-select v-model="product.category" placeholder="请选择分类">
            <el-option label="海鲜" value="1"></el-option>
            <el-option label="家具" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="身份证号" prop="name">
          <el-input type="text" v-model="product.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="用户状态" prop="vipDiscount">
          <el-radio v-model="product.vipDiscount" label="1">启用</el-radio>
          <el-radio v-model="product.vipDiscount" label="2">禁用</el-radio>
        </el-form-item>
        <el-form-item label="手机号" prop="salePrice">
          <el-input type="text" v-model="product.salePrice" autocomplete="off">
          </el-input>
        </el-form-item>
        <el-form-item label="座机号" prop="marketPrice">
          <el-input type="text" v-model="product.marketPrice" autocomplete="off">
          </el-input>
        </el-form-item>
        <el-form-item label="邮箱地址" prop="stockPrice">
          <el-input type="text" v-model="product.stockPrice" autocomplete="off">
          </el-input>
        </el-form-item>
        <el-form-item label="详细地址" prop="stockCount">
          <el-input type="text" v-model="product.stockCount" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮政编码" prop="commodityWeight">
          <el-input type="text" v-model="product.commodityWeight" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm">添加</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {
        category: "",
        name: "",
        salePrice: "",
        marketPrice: "",
        price: "",
        stockPrice: "",
        weight: "",
        univalence: "",
        vip: "1",
        state: "1",
        content: ""
      },
    };
  }
};
</script>

<style lang="less">
#addMember {
  h3 {
    margin: 0;
  }
  .el-form {
    width: 35%;
    min-width: 300px;
    span.describe {
      color: #606266;
    }
  }
}
</style>