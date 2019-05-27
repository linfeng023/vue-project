<template>
  <div>
    <com-breadcrumb></com-breadcrumb>
    <div class="login">
      <el-input class="mar_bottom" v-model="username" placeholder="请输入用户名" ></el-input>
      <el-input class="mar_bottom" v-model="password" placeholder="请输入密码"></el-input>
      <el-button type="primary" @click="goToLogin">登录</el-button>
    </div>
  </div>
</template>
<script>
// import comBreadcrumb from '../breadcrumb/breadcrumb.vue'
export default {
  components:{
    // comBreadcrumb
  },
  data(){
    return{
      username:'',
      password:''
    }
  },
  created(){
    this.$store.dispatch('setBreadcrumb',[{
      name: "首页",
      path:'/login'
    }])
    // this.$store.commit('SET_BREADCRUMB', [{
    //   name: "登录",
    //   path:'/login'
    // }])
    let a = this.getQueryValue('taskId')
    console.log(a)
  },
  methods:{
    goToLogin(){
      if(this.username != '' && this.password != ''){
        sessionStorage.setItem('token',this.username)
        this.$router.push({path:'/Dialog'})
      }
    },
    // openWindow(){}
  }
}
</script>
<style>
  .login{
    padding: 4%;
    width: 350px;
    margin: 0 auto;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
  }
  .mar_bottom{
    margin-bottom: 4%
  }
</style>
