<template>
    <div>
      <el-dialog
  title="添加商品"
  :visible.sync="resetdialogVisible"
  width="65%">
  <div>内容区域</div>

  <span slot="footer" class="dialog-footer">
    <el-button @click="close">取 消</el-button>
    <el-button type="primary" @click="close">确 定</el-button>
  </span>
</el-dialog>
    </div>
</template>
<script>
export default {
   props: ["dialogVisible"],
   data() {
      return {
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
