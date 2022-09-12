<template>
<div>
    <div class='title'>
      <el-breadcrumb separator="/">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item :to="{ path: '/goods' }">商品管理</el-breadcrumb-item>
  <el-breadcrumb-item :to="{ path: '/add-goods' }">添加商品</el-breadcrumb-item>
</el-breadcrumb>
    </div>

<div class='myform'>
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label="规格类目" prop="good_category">
    <el-button type="primary">类目选择</el-button>
  </el-form-item>
  <el-form-item label="商品名称" prop="good_name">
    <el-input v-model="ruleForm.good_name"></el-input>
  </el-form-item>
  <el-form-item label="商品价格" prop="good_price">
    <el-input v-model="ruleForm.good_price"></el-input>
  </el-form-item>
   <el-form-item label="商品数量" prop="good_num">
    <el-input v-model="ruleForm.good_num"></el-input>
  </el-form-item>
  <el-form-item label="商品卖点" prop="good_sell">
    <el-input v-model="ruleForm.good_sell"></el-input>
  </el-form-item>
  <el-form-item label="商品图片" prop="good_image">
    <el-button type="primary">图片上传</el-button>
  </el-form-item>
<el-form-item label="商品描述" prop="good_desc">
    <el-input v-model="ruleForm.good_desc"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">确定</el-button>
    <el-button @click="resetForm('ruleForm')">取消</el-button>
  </el-form-item>
</el-form>
</div>
</div>
</template>
<script>
export default {
    data() {
      return {
        ruleForm: {
          good_category:'',
          good_name: '',
          good_price: '',
          good_num: '',
          good_sell: '',
          good_image: '',
          good_desc:''
        },
        rules: {
          good_name: [
            { required: true, message: '请输入商品名称', trigger: 'blur' },
            { min: 2, max: 15, message: '长度在 2 到 15 个字符', trigger: 'blur' }
          ],
          good_price: [
            { required: true, message: '请输入商品价格', trigger: 'blur' },
            { min: 1, max: 3, message: '长度在 1 到 3 个字符', trigger: 'blur' }
          ],
           good_num: [
            { required: true, message: '请输入商品数量', trigger: 'blur' },
            { min: 1, max: 5, message: '长度在 1 到 5 个字符', trigger: 'blur' }
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            formName = this.ruleForm
            console.log('表单是：', formName)
            this.$api.addGoods(formName)
            alert('已提交');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style>
.myform{
      padding-top: 50px;
      padding-left: 30px;
      padding-right: 50px;
      background: #fff;
}

</style>
