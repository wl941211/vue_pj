<template>
  <section class="list">
    <v-title :title="title"></v-title>
    <div class="mui-card">
      <div class="mui-card-header">{{detail.title }}</div>
      <div class="mui-card-footer" >
        <span>创建时间：{{ detail.add_time|formatDate('YYYY-MM-DD')}}</span>
        <span>浏览量：{{  detail.click }}</span>
      </div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner" v-html=" detail.content"></div>
      </div>
    </div>
  </section>
</template>
<script>
import configs from '../../js/config.js';
import ctitle from '../common/title.vue';
   export default{
         data(){
             return {
                 title:"新闻详情",
                 detail:{}
             };
         },
         methods:{
            getdetail(){
                //路径 在请求地址的基础上还要加上 对应的id
                let url=configs.newdetails+this.$route.params.id;
                console.log(this.$route);
                this.$http.get(url).then(resp=>{
                    resp.body.status==0 && (this.detail=resp.body.message[0]);
                })
            }
         },
        created(){
             this.getdetail();
             
         },
         components:{
             'v-title':ctitle
         }
    }
</script>
<style lang="less">
    
</style>