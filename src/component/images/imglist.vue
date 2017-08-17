<template>
    <section class="imgahesShare">
        <div class="imgnav">
          <ul>
            <li>
                 <router-link :to="'/image/imglist/'+'0'">
                全部
                </router-link>
            </li>
            <li v-for='item in navlist' :key='item.id'>
              <router-link :to="'/image/imglist/'+item.id">{{item.title}}</router-link>
            </li>
          </ul>
        </div>

        <div class="mui-content-padded">
              <div class="listone" v-for="item in imglist" :key="item.id">
                   <router-link :to="'/image/imginfo/'+item.id">
				 <img v-lazy="item.img_url"  data-preview-group="1">
				 <div>
                    <h4>{{item.title}}</h4>
                    <p>{{item.zhaiyao}}</p>
                 </div>
                   </router-link>
              </div>
			
		</div>
    </section>
</template>
<script>
import config from '../../js/config.js';
  
  //要先获取图片的分类数据 图片列表默认是0 就是渲染安全部数据  
    export default{
      data(){
          return {
              navlist:[],
              imglist:[]
          }
      },
      watch:{
          //用watch来监听网址的改变 来进行手动刷新
          $route(){
              // console.log(1);
               this.getimglist(this.$route.params.id);
               
          }
      },
      methods:{
        getimgNav(){
          let url=config.imgsharenav;
          this.$http.get(url).then(resp=>{
              if(resp.body.status==0){
                  this.navlist=resp.body.message;
              }
          });
        },
        getimglist(id){
          let url=config.imgsharelist+id;
          this.$http.get(url).then(resp=>{
              let body=resp.body;
              let list=[];
              console.log(body);
              if(body.status==0){
                  //要循环遍历改变每一项的img_url
                //  this.imglist=body.message.map(function(imgs,i){
                //       imgs.img_url=config.imgdomain + imgs.img_url;
                //       return imgs;
                //  });
                for(var i=0;i<body.message.length;i++){
                      body.message[i].img_url=config.imgdomain+body.message[i].img_url;
                      list.push(body.message[i]);
                }
                 this.imglist= list;
              }
          });
       }
      },
      created(){
          this.getimgNav();
          this.getimglist(this.getimglist(this.$route.params.id));
      }
    }
</script>
<style lang="less">
    .imgahesShare{
        width:100%;
        overflow:hidden;
        .listone{
        position:relative;
        img{
            width:100%;
            &[lazy=loading] {
             width: 40px;
             height: 300px;
            margin: auto;
        }
        }
        div{
            padding:0 2px;
            color:#fff;
            position:absolute;
            left:0;
            bottom:0;
            background: rgba(0,0,0,.5);
            p{
                color:#fff;
            }
        }
    }

    .imgnav{
        padding:0;
        background:#fff;
        ul{
            padding:3px;
            li{
                line-height:30px;
                display:inline-block;
                padding:0 4px;
                margin-right:2px;
                border-bottom:1px solid pink;
            }
        }
    }
    }
    
</style>