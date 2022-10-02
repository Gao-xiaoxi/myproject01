<!--组件刚开始写尽可能别拆，写熟再拆，而且这个GoodsDialog.vue最好放在Goods下，因为不是公用的-->
<template>
    <div>
      <el-dialog
  title="添加商品"
  :visible.sync="resetdialogVisible"
  width="65%">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label="规格类目" prop="good_category">
    <el-button type="primary" @click="innerVisible=true">类目选择</el-button>
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
</el-form>

  <span slot="footer" class="dialog-footer">
    <el-button @click="close">取 消</el-button>
    <el-button type="primary" @click="close">确 定</el-button>
  </span>

  <!--类目选择的内弹框-->
  <el-dialog
      width="40%"
      title="类目选择"
      :visible.sync="innerVisible"
      append-to-body>
      <TreeGoods />
    </el-dialog>
</el-dialog>
    </div>
</template>
<script>
import TreeGoods from './TreeGoods.vue'
export default {
   components:{
    TreeGoods
  },
   props: ["dialogVisible"],
   data() {
      return {
          innerVisible:false,
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
      }
   },
   created(){
   },
   computed:{
      //https://blog.csdn.net/Web_monkey888/article/details/121119338?spm=1001.2101.3001.6650.2&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-2-121119338-blog-117638913.pc_relevant_multi_platform_whitelistv4&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-2-121119338-blog-117638913.pc_relevant_multi_platform_whitelistv4&utm_relevant_index=3
      //不写这段，第5行的:visible.sync="dialogVisible"会报错
      resetdialogVisible: {
            get() {
            return this.dialogVisible;
            },
            set(val) {
            this.$emit("update:dialogVisible", val);
            },
      },
   },
   methods:{
      close(){
            this.$emit('changedialogVisible')
      }
   },
}
</script>
<style>

</style>
