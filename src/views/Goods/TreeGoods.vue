<template>
    <el-tree
  :props="props"
  :load="loadNode"
  lazy>
</el-tree>
</template>
<script>
export default {
    data() {
      return {
      parent_name:'',
      parent_id:0,
      parent_data:[],
      child_name:'',
      child_id:0,
      child_data:[],
        props: {
          label: 'name',
          children: 'zones',
          isLeaf: 'leaf'
        },
      };
    },
    methods: {
      loadNode(node, resolve) {
      console.log('node是', node)
      // this.$api.getCategoryList()
      //       .then(res=>{
      //           console.log(res.data.results)  //results如果写错了，和后端不对应，console会显示undfined
      //           console.log(res.data.results[0])
      //           console.log(res.data.results[0].c_name)
      //       })
        if (node.level === 0) {
            this.$api.ParentCategoryList()
            .then(res=>{
                  // this.parent_name = res.data.results[0].name
                  // console.log(res.data.results[0].name)  
            //     console.log(res.data.results) 
            for( var i in res.data.results){
                  // console.log('res.data.results[i].name', res.data.results[i].name)
                  this.parent_name = res.data.results[i].name
                  // console.log('this.parent_name', this.parent_name)
                  this.parent_data.push({name:this.parent_name})
            }
                  // console.log('this.parent_data', this.parent_data) 
            return resolve(this.parent_data); 
            })
        }
        if (node.level ==1) {
            this.child_data = []
            this.$api.ChildCategoryList(
              {name: node.data.name}
            )
            .then(res=>{
            //       this.child_name = res.data.results[0].name
            //       console.log(res.data.results[0].name)  
                console.log(res.data.results) 
            // return resolve([{name:this.child_name, leaf: true}]); 
            for( var i in res.data.results){
                console.log('i-------------', i)
                  this.child_name = res.data.results[i].name
                  console.log('子节点的名字',this.child_name)
                  this.child_data.push({name:this.child_name, leaf: true})
            }
            console.log('child_data', this.child_data)
            return resolve(this.child_data); 
            })
        }

      }
    }
  };
</script>
<style>

</style>
