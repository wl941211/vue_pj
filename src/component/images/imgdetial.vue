<template>
  <section class="imginfo">
      <!--返回上一页-->
       <v-title></v-title>
      <!--标题-->
      <div class="mui-card">
				<div class="mui-card-header">{{imgdatas.title}}</div>
				<div class="mui-card-footer">
                    <span>{{imgdatas.add_time|formatDate('YYYY-MM-DD')}}</span>
                    <span>{{imgdatas.clicl}}次浏览量</span>
                </div>
	 </div>
     <!--图片列表-->
    <div>
        <ul class="mui-table-view mui-grid-view">
		        <li v-for="(item,i) in imgmin" :key="i" class="mui-table-view-cell mui-media mui-col-xs-4">
		           
		                <img v-preview="item.src" class="mui-media-object" :src="item.src">
                  
                </li>
		 </ul>
    </div>
     <!--描述-->
     <div class="mui-card-content">
        <div class="mui-card-content-inner">
		 {{imgdatas.content}}
        </div>
    </div>
  </section>
</template>
<script>
import config from '../../js/config.js';
import ctitle from '../common/title.vue';

export default {
   data(){
      return {
      imgdatas:{},
      imgmin:[]
      };
   },
   methods:{
       getImginfo(id){
          let url=config.imgdetialinfo+id;
          this.$http.get(url).then(resp=>{
              if(resp.body.status==0){
                  console.log(resp.body.message);
                  this.imgdatas=resp.body.message[0];
              }
          });
       },
       getimages(id){
           let url=config.imgmin+id;
           this.$http.get(url).then(resp=>{
                if(resp.body.status==0){
                    console.log(resp.body.message);
                    //遍历修改图片的地址 因为原来的地址没用了
                 this.imgmin=resp.body.message.map(function(img,i){
                      img.src=config.imgdomain + img.src;
                      return img;
                 });
              }
           });
       }
   },
   created(){
    this.getImginfo(this.$route.params.id);
    this.getimages(this.$route.params.id);
   },
   components:{
       "v-title":ctitle
   }
}
</script>
<style lang="less">
  .imginfo{
      .mui-card{
          div{
            border-bottom:none;
          }
      }

  }
</style>
