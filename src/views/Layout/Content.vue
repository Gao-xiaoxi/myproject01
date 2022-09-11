<template>
      <div>
        <div class="header">
         <i v-if='!isCollapse' @click='changeMenu' class="iconfont icon-right-indent"></i>
      <i v-else @click='changeMenu' class="iconfont icon-left-indent"></i></div>
        <!-- <div class="content">下方内容区域</div> -->
        <router-view />
      </div>
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
      changeMenu(){
         this.$emit('changeCollapse')
         console.log('changeMenu')
      }
     },
  }
  </script>
 <style lang="less" scoped>
  .header{
      height: 50px;
      line-height: 50px;
      background: #409EFF;
      .iconfont{
         font-size: 24px;
      }
  }
  </style>
  