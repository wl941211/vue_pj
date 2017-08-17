<template>
    <section class="swipe">
      <mt-swipe :auto="2000">
         <mt-swipe-item v-for="(item, i) in list" :key="i">
             <a :href="item.url">
                <img :src="item.img" />
             </a>
         </mt-swipe-item>
      </mt-swipe>
   </section>
</template>
<script>
  //用ajax动态获取轮播图的数据 并渲染到页面上
  //vue的ajax是借助与vue-resourse.js来实现的 因为这个库就会多一个this.$http
   export default{
      data(){
          return {
              //轮播图的数据保存在这里 才能在模版中引用
              list:[]
          }
      },
      methods:{
          getLunbo(){
              //请求的数据路径
              let url='http://139.199.192.48:8888/api/getlunbo';
              this.$http.get(url).then(function(resp){
                  if(resp.body.status==0){
                      this.list=resp.body.message;
                  }
                  console.log(resp);
              });
          }
        
      },
      created(){
              this.getLunbo();
      }
   }
</script>
<style lang="less">
    .swipe{
        height:200px;
        img{
            width:100%;
        }
    }
</style>