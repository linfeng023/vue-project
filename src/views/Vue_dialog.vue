<template>
  <div>
    <com-breadcrumb></com-breadcrumb>
    <com-dialog>
      <el-button type="primary">打开对话框</el-button>
    </com-dialog>
  </div>
</template>
<script> 
import comDialog from '../components/dialog.vue'
import comBreadcrumb from '../components/breadcrumb/breadcrumb.vue'
export default {
  components:{
    comDialog,
    comBreadcrumb
  },
  data(){
    return{

    }
  },
  created(){
    this.$store.commit('SET_BREADCRUMB', [{
      name: "登录",
      path:'/login'
    },{
      name: "对话框",
      path:'/Dialog'
    }])
  }
}
</script>