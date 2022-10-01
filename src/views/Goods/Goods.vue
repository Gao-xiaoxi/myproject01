<template>
    <div class="goods">
      <!-- 搜索条件 -->
      <div class="header">
         <el-input @change='searchInput' placeholder="请输入商品ID" v-model="input"></el-input>
         <el-input @change='searchInput' placeholder="请输入商品名称" v-model="input2"></el-input>
         <el-button type="primary">查 询</el-button>
         <el-button type="primary">
         <router-link to="/add-goods" style="color:#fff;">页面添加</router-link>
         </el-button>
         <el-button type="primary" @click="addGoods">弹框添加</el-button>
      </div>
      <!-- 表格 -->
      <div class="wapper">
         <el-table
         :data="tableData" border>
         <el-table-column type="selection" width="55"></el-table-column>
         <el-table-column prop="id" label="商品ID"></el-table-column>
         <el-table-column prop="good_name" label="商品名称"></el-table-column>
         <el-table-column prop="good_price" label="商品价格"></el-table-column>
         <el-table-column prop="good_num" label="商品数量"></el-table-column>
         <el-table-column prop="good_category" label="规格类目"></el-table-column>
         <el-table-column prop="good_image" label="商品图片"></el-table-column>
         <el-table-column prop="good_sell" label="商品卖点"></el-table-column>
         <el-table-column prop="good_desc" label="商品描述"></el-table-column>
         <el-table-column label="操作">
            <template slot-scope="scope">
               <el-button
                 size="mini"
                 @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
               <el-button
                 size="mini"
                 type="danger"
                 @click="handleDelete(scope.$index, scope.row)">删除</el-button>
             </template>
         </el-table-column>
       </el-table>
         
      </div>
      <!-- 分页 -->
      <div>
         <MyPagination :total="total" :page-size="page_size"  @changePage='changePage'/>
      </div>
      <!-- 弹框 添加商品-->
      <div>
         <GoodsDialog :dialogVisible='dialogVisible' @changedialogVisible='changedialogVisible' />
      </div>
    </div>
</template>
<script>
import MyPagination from '../../components/MyPagination.vue'
import GoodsDialog from '../../components/GoodsDialog.vue'
export default {
   components:{
      MyPagination,
      GoodsDialog
   },
   data() {
      return {
         input: '',
         input2: '',
         tableData:[],
         total: 0,
         page_size: 0,
         dialogVisible: false,
      }
   },
   created(){
      // this.$api.getGoodsList(
      //    {page:1}
      // )
      // .then(res=>{
      //    console.log(res.data)
      //    this.tableData = res.data.results;
      //    this.total = res.data.total
      //    this.page_size = res.data.page_size
      //    console.log(res.data.results)
      // }
      // )
      this.http(1)
   },
   computed:{
   },
   methods:{
      changedialogVisible(){
         this.dialogVisible = false;
      },
      addGoods(){
         this.dialogVisible = true;
      },
      changePage(num){
         this.http(num)
      },
      // this.$axios({methos:"post" url:"路由地址" data:{参数1："参数1值",参数2："参数2值"}})
      searchInput(){
         console.log('搜索的值---', this.input)
         console.log('搜索的值2---', this.input2)
         this.$api.getGoodsSearch(this.input, this.input2)
         .then(res=>{
         console.log('搜索的值---res.data', res.data)
         console.log('搜索的值---res.data.results', res.data.results)
         this.tableData = res.data.results;
      //    // console.log(res.data.results)
      }
      )
      },
      handleEdit(){

      },
      handleDelete(){
         
      },
      http(page){
         this.$api.getGoodsList(
         {page}
      )
      .then(res=>{
         console.log(res.data)
         // this.tableData = res.data.results;
         this.tableData = res.data.results.slice((page-1)*res.data.page_size, page*res.data.page_size)
         console.log(page)
         console.log(res.data.results.slice((page-1)*res.data.page_size, page*res.data.page_size))
         this.total = res.data.total;
         this.page_size = res.data.page_size;
         // console.log(res.data.page_size)
         // console.log(res.data.results)
      }
      )  
      }
   },
}
</script>
<style lang="less" scoped>
.goods{
   margin-left: 20px;
   margin-top: 20px;
}
.header{
      display: flex;
      margin-left: 20px;
      button{
         margin-left: 20px;
      }
      el-input{
         margin-left: 20px;
      }
}
.wapper{
   margin: 20px 0;
}
</style>
