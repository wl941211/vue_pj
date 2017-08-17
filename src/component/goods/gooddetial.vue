<template>
  <article class="goods-detail">
      <!--标题 返回-->
    <v-title :title="title"></v-title>
    <!--轮播图-->
    <v-lunbo :lunbolist="lunbolist"></v-lunbo>
  	<!-- 商品购买 -->
    <div class="mui-card">
      <!-- 名称 -->
      <div class="mui-card-header">{{goosinfo.title}}</div>
      <!-- 价格 -->
      <div class="mui-card-content mui-card-content-inner">
        <div class="price"> <s>市场价:￥{{goosinfo.market_price}}</s> <span>销售价: </span> <em>￥{{goosinfo.sell_price}}</em> </div>
        <div> <span>购买数量：</span>
          <!--数字输入框 -->
          <v-buymath :f_math="total" @changeval="updatabuy"></v-buymath>

        </div>
      </div>
      <!-- 按钮 -->
      <div class="mui-card-footer">
      	<button type="button" class="mui-btn mui-btn-success mui-btn-block mui-btn-outlined">
          <router-link to="/login/pay">结算</router-link>
          </button>
        <div>

        </div>
        <button type="button" class="mui-btn mui-btn-success mui-btn-block mui-btn-outlined" @click="getaddtotal">加入购物车</button>
      </div>
    </div>

		<!-- 评论与介绍 -->
		<div class="mui-card">
			<!-- 选项卡 -->
		    <mt-navbar v-model="selected">
			  <mt-tab-item id="v-comtent">商品评论</mt-tab-item>
			  <mt-tab-item id="v-imgtext">图文介绍</mt-tab-item>
			</mt-navbar>
			<!-- 内容 -->
            <!--
                用component 可以提高性能 点击切花以后才会请求
            -->
            <component :id="id" :is="selected"></component>
		    
            <!--用插件 默认的打开页面就请求 浪费资源-->
                <!--<mt-navbar v-model="selected">
			  <mt-tab-item id="tab-container1">商品评论</mt-tab-item>
			  <mt-tab-item id="tab-container2">图文介绍</mt-tab-item>
			</mt-navbar>
                <mt-tab-container  v-model="selected">
			  <mt-tab-container-item id="tab-container1">
                 <v-comtent :id="id"></v-comtent>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="tab-container2">
			   <v-imgtext :id="id"></v-imgtext>
			  </mt-tab-container-item>
			</mt-tab-container>-->
		</div>

  </article>
</template>

<script>
import config from '../../js/config.js';
import clunbo from '../common/lunbo.vue';
//导入评论组件
import ccoment from '../common/comment.vue';
//导入图文租价
import imgtext from './imgtext.vue';
//导入购买数量组件
import cbuymath from '../common/mathbuy.vue';
//返回上一页
import backage from '../common/title.vue';
//缓存
import storageinfo from '../../js/goods/goodstorage.js';

export default{
    data(){
        return {
          lunbolist:[],
          goosinfo:[],
          total:10,
          id:this.$route.params.id,
          selected:"",
          title:"商品详情"
        }
    },
    methods:{
          getLunbo(){
              let url=config.imgmin + this.id;
              this.$http.get(url).then(resp=>{
                  let body=resp.body;
                  if(body.status==0){
                     this.lunbolist=body.message.map(item => {
                      item.src = config.imgdomain + item.src;
                      return item;
                     });
                  }
                    
              });
          },
          getinfo(){
              let url=config.goodinfo+ this.id;
              this.$http.get(url).then(resp=>{
                  let body=resp.body;
                   if(body.status==0){
                       this.goosinfo=body.message[0];
                   }
              })
          },
          //更新商品的选择数量
          updatabuy(v){
              this.total=v
              console.log(this.total);
          },
          //购物车数量
          getaddtotal(){
             storageinfo.set(this.id,this.total);
             // console.log(this.total);
              document.querySelector(".mui-badge").innerHTML=storageinfo.get();
          }
    },
    created(){
       this.getLunbo();
       this.getinfo();
    },
    components:{
        'v-lunbo':clunbo,
        'v-buymath':cbuymath,
        'v-comtent':ccoment,
        'v-imgtext':imgtext,
        'v-title':backage
    }
}

</script>

<style lang="less">
  .goods-detail {
    .mui-card-content {
      .price {
        color: rgb(51, 51, 51);
        margin-bottom: 4px;
        span {
          margin-left: 6px;
        }
        em {
          font-size: 18px;
          color: red;
        }
      }
    }
    .mui-card-footer {
      div {
        width: 100%;
      }
      .mui-btn {
        padding: 8px 0;
        font-size: 16px;
      }
    }
    .mint-tab-item {
    	&.is-selected {
    		margin-bottom: 0;
    		border-bottom: 3px solid #2ce094;
    		color: #2ce094;
    	}
    }
    .mint-tab-item-label {
    	font-size: 18px;
    	color: #2ce094;
    }
  }
</style>