<template>
    <!-- <ul>
      <li>
         <router-link to="/">首页</router-link>
      </li>
      <li>
         <router-link to="/goods">商品管理</router-link>
      </li>
      <li>
         <router-link to="/params">规格参数</router-link>
      </li>
      <li>
         <router-link to="/advert">广告分类</router-link>
      </li>
      <li>
         <router-link to="/order">订单管理</router-link>
      </li>
    </ul> -->
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      background-color="#1b3554"
      text-color="#fff"
      active-text-color="#409EFF" 
      router
      :collapse="isCollapse">
      <el-menu-item>
         <span slot="title">后台管理系统</span>
       </el-menu-item>
      <el-menu-item index="/">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="/goods">
        <i class="el-icon-document"></i>
        <span slot="title">商品管理</span>
      </el-menu-item>
      <el-menu-item index="/params">
        <i class="el-icon-setting"></i>
        <span slot="title">规格参数</span>
      </el-menu-item>
      <el-menu-item index="/advert">
         <i class="el-icon-setting"></i>
         <span slot="title">广告分类</span>
       </el-menu-item>
      <el-submenu index="/order">
         <template slot="title">
           <i class="el-icon-location"></i>
           <span>订单管理</span>
         </template>
         <el-menu-item-group>
           <el-menu-item index="/order/order-list">订单管理</el-menu-item>
           <el-menu-item index="/order/order-back">退货订单</el-menu-item>
         </el-menu-item-group>
       </el-submenu>
    </el-menu>
</template>
<script>
export default {
   props:['isCollapse'], //接收isCollapse
   data() {
      return {
      }
   },
   created(){
   },
   computed:{
   },
   methods:{
   },
}
</script>
<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
