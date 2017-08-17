<template>
  <article>
     <c-lunbo :lunbolist="list"></c-lunbo>
     <c-nav></c-nav>
    
  </article>
</template>
<script>
// 因为index分了2个组件模块 所以要引入这两个组件模块 才能生效
import Cnav from './nav.vue';
import Clunbo from '../common/lunbo.vue';

    export default{
        data(){
          return {
              list:[]
          }
        },
        methods:{
           getlist(){
             let url="http://139.199.192.48:8888/api/getlunbo";
             this.$http.get(url).then(resp=>{
               if(resp.body.status==0){
                   this.list=resp.body.message.map(item=>{
                     item.src=item.img;
                     return item;
                   });
               }
             })
           }
        },
        created(){
          this.getlist();
        },
         components:{
           'c-nav':Cnav,
           'c-lunbo': Clunbo
         }
    }
</script>
<style>
    
</style>