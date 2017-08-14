<template>
  <section class="mint-header bgc">
     <div class="mint-header-button is-left" @click="goback">
       <a href="#/" class="router-link-active">
         <button class="mint-button mint-button--default mint-button--normal">
           <span class="mint-button-icon"><i class="mintui mintui-back"></i></span>
           <label class="mint-button-text">返回</label>
         </button>
      </a>
    </div> 
    <h1 class="mint-header-title">{{title}}</h1> 
    <div class="mint-header-button is-right"></div>
</section>
</template>
<script>
    export default{
      props:['title'],
      methods:{
        goback(){
          //返回上一页 用导入的路由的这个方法即可
          this.$router.go(-1);
        }
      }
    }
</script>
<style lang="less">
    .bgc {
      background:#ccc;
    }
</style>