<template>
 <section class="page">
   <div class="mui-card">
				<div class="mui-card-header">{{info.title}}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner" v-html="info.content">
					</div>
				</div>
			</div>
 </section>
</template>

<script>
import config from "../../js/config.js";
 export default {
     props:['id'],
 data() {
   return {
      info:[]
   }
 },
methods:{
  getinfo(){
      let url=config.goodimg+this.id;
      this.$http.get(url).then(resp=>{
          if(resp.body.status==0){
              this.info=resp.body.message[0];
          }
      })
    }
  },
  created(){
      this.getinfo();
  }
 }
</script>

<style scoped lang="less">

 
</style>
