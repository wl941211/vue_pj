<template>
  <article class="goods-list">
    <v-title :title="title"></v-title>
    <ul class="mui-table-view mui-grid-view">
      <!-- 商品详情 -->
      <li v-for="item in list" :key="item.id" class="mui-table-view-cell mui-media mui-col-xs-6">
      	<router-link :to='"/goods/detial/"+item.id'>
	        <div class="mui-card">
	          <!-- 商品图片 -->
	          <div class="mui-card-header">
	          	<img :src="item.img_url" alt="" />
	          </div>
	          <!-- 商品描述 -->
	          <div class="mui-card-footer ">
	            <p class="mui-ellipsis-2">{{item.title}}</p>
	          </div>
	          <!-- 商品价格 -->
	          <div class="mui-card-content">
	            <p class="price">
	            	<span>￥{{item.sell_price}}</span>
	            	<s>￥{{item.market_price}}</s>
	            </p>
	            <p class="tip">
	            	<span>热卖中</span>
	            	<span>剩余{{item.stock_quantity}}件</span>
	            </p>
	          </div>
	        </div>
        </router-link>
      </li>
    </ul>
    <!-- 加载更多 -->
    <button @click="getgoodlist" ref="morebtn" class="mui-btn mui-btn-success mui-btn-block mui-btn-outlined">加载更多</button>
  </article>
</template>

<script>
import config from '../../js/config.js';
import backage from '../common/title.vue';
export default{
   data(){
       return {
           list:[],
           pageindex:1,
           title:"商品列表"
       }
   },
   methods:{
      getgoodlist(){
         let url=config.goodlist+'?pageindex='+this.pageindex;
         this.$http.get(url).then(resp=>{
             let body=resp.body;
             if(body.status==0&&body.message.length>0){
                 this.list=body.message;
                 this.pageindex++;
             }else if(body.message.length=0){
                this.$refs.morebtn.disabled=true;
             }
         })
      }
   },
   created(){
     this.getgoodlist();
   },
   components:{
    'v-title':backage
   }
}


</script>

<style lang="less">
  .goods-list {
  	.mui-card {
  		box-shadow: 0px 0px 4px rgba(0, 0, 0, .3);
  	}
  	.mui-card-header {
  		padding: 8px;
  		/*height: 100px;*/
  		img {
  			width: 100%;
  			height: 100%;
  		}
  	}
    .mui-card-content {
      text-align: center;
      .price {
        margin-bottom: 4px;
        color: #000;
        span {
          color: red;
        }
      }
      .tip {
        overflow: hidden;
        padding: 0 8px;
        font-size: 12px;
        span:first-child {
          float: left;
        }
        span:last-child {
          float: right;
        }
      }
    }
  }
</style>