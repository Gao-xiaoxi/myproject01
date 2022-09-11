<template>
    <div class="layout">
      <!-- 左侧导航区域-->
      <Mymenu class='menu' :isCollapse='isCollapse' />
      <!-- 右侧内容区域-->
      <Content class='content' :class="{isActive:isCollapse}" @changeCollapse='changeCollapse' :isCollapse='isCollapse'/>
    </div>
</template>
<script>
import Mymenu from './Mymenu.vue'
import Content from './Content.vue'
export default {
   components:{
      Mymenu,
      Content
   },
   data() {
      return {
         isCollapse: false,
      }
   },
   created(){
   },
   computed:{
   },
   methods:{
      changeCollapse(){
         this.isCollapse = !this.isCollapse;
         console.log('执行到了')
         console.log(this.isCollapse)
      }
   },
}
</script>
<style lang='less' scoped>
.layout{
   /* display: flex; */
   .menu{
      /* width: 200px; */
      min-height: 500px;
      background: #777;
      position: fixed;
      bottom: 0;
      top: 0;
   }
   .content{
      /* flex: 1 */
      margin-left: 200px;
   }
   .isActive{
      margin-left: 64px;
   }
}
</style>
