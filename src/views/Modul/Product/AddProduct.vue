<template>
  <div id="addProduct">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <h3>添加商品</h3>
      </div>
      <el-form
        :model="product"
        status-icon
        :rules="rules"
        label-position="left"
        label-width="80px"
        ref="productFrom"
      >
        <el-form-item label="所属分类" prop="category">
          <el-select v-model="product.category" placeholder="请选择分类">
            <el-option label="海鲜" value="1"></el-option>
            <el-option label="家具" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="商品名称" prop="name">
          <el-input type="text" v-model="product.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="商品售价" prop="salePrice">
          <el-input type="text" v-model="product.salePrice" autocomplete="off">
              <template slot="append">元</template>
          </el-input>
        </el-form-item>
        <el-form-item label=" 市场价" prop="marketPrice">
          <el-input type="text" v-model="product.marketPrice" autocomplete="off">
              <template slot="append">元</template>
          </el-input>
          <span class="describe">默认市场价是销售价的1.2倍</span>
        </el-form-item>
        <el-form-item label="商品进价" prop="price">
          <el-input type="text" v-model="product.price" autocomplete="off">
              <template slot="append">元</template>
          </el-input>
        </el-form-item>
        <el-form-item label="入库数量" prop="stockPrice">
          <el-input type="text" v-model="product.stockPrice" autocomplete="off"></el-input>
          <span class="describe">记重商品单位为千克</span>
        </el-form-item>
        <el-form-item label="商品重量" prop="weight">
          <el-input type="text" v-model="product.weight" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="商品单价" prop="univalence">
          <el-input type="text" v-model="product.univalence" autocomplete="off">
              <template slot="append">元</template>
          </el-input>
        </el-form-item>
        <el-form-item label="会员优惠" prop="vip">
          <el-radio v-model="product.vip" label="1">享受</el-radio>
          <el-radio v-model="product.vip" label="2">不享受</el-radio>
        </el-form-item>
        <el-form-item label="是否促销" prop="state">
          <el-radio v-model="product.state" label="1">启用</el-radio>
          <el-radio v-model="product.state" label="2">禁用</el-radio>
        </el-form-item>
        <el-form-item label="简介" prop="content">
          <el-input type="textarea" v-model="product.content"></el-input>
          <span class="describe">不超过200个汉字</span>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm">提交</el-button>
          <el-button @click="resetForm">重置</el-button>
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
      rules: {
        name: [{ required: true, message: "请输入商品名称", trigger: "blur" }],
        salePrice: [{ required: true, message: "商品售价", trigger: "blur" }],
        marketPrice: [{ required: true, message: "市场价", trigger: "blur" }],
        price: [{ required: true, message: "商品进价", trigger: "blur" }],
        stockPrice: [{ required: true, message: "入库数量", trigger: "blur" }],
        weight: [{ required: true, message: "商品重量", trigger: "blur" }],
        univalence: [{ required: true, message: "商品单价", trigger: "blur" }],
        content: [{ required: true, message: "简介", trigger: "blur" }]
      }
    };
  }
};
</script>

<style lang="less">
#addProduct {
  h3 {
    margin: 0;
  }
  .el-form {
    width: 35%;
    min-width: 300px;
    span.describe{
        color: #606266;
    }
  }
}
</style>