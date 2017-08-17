<template>
 <article class="order">
      <v-title :title="title"></v-title>
      
      <div class="mui-content">
        <form id='login-form' class="mui-input-group">
          <div class="mui-input-row">
            <label>账号</label>
            <input v-model="usename" id='account' type="text" class="mui-input-clear mui-input" placeholder="请输入账号">
          </div>
          <div class="mui-input-row">
            <label>密码</label>
            <input v-model="usepwd" id='password' type="password" class="mui-input-clear mui-input" placeholder="请输入密码">
          </div>
        </form>
        <div class="mui-content-padded">
          <button @click="login" id='login' class="mui-btn mui-btn-block mui-btn-primary">登录</button>
          <div class="link-area"><a id='reg'>注册账号</a> <span class="spliter">|</span> <a id='forgetPassword'>忘记密码</a>
          </div>
        </div>
      </div>
  </article>
</template>

<script>
import { Toast } from 'mint-ui';
import ctitle from '../common/title.vue';
 export default {
 data() {
 return {
    title:'登录',
    usename:'',
    usepwd:''
 }

},
methods:{
   login(){
       if(this.usename=='self' && this.usepwd==123456){
           //因为没有后台 要模拟登录 在满足条件后 就把随意的数据保存到cookie里
           document.cookie='session='+Date.now();
           this.$router.push(this.$route.query.nextpage);
       }else{
           Toast("登录失败");
       }
   }
},
 components: {
   'v-title':ctitle
 }
 }
</script>

<style scoped lang="less">

 
</style>
