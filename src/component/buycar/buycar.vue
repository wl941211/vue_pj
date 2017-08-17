<template>
  <article class="shopcart-list">
    <v-title :title="title"></v-title>
    <!-- 商品列表 -->
    <div class="goods" v-for="item in list" :key="item.id">
      <mt-switch class="switch" v-model=" item.selected"></mt-switch>
       <img class="img" :src="item.src">
      <div class="inforight">
        <h4 class="mui-ellipsis-2">{{item.title}}</h4>
        <div class="bottom">
          <ul>
            <li>￥{{item.sell_price}}</li>
            <li>
              <v-mathbuy :f_math="gettotal(item.id)" @changeval=" updata(item.id,$event)"></v-mathbuy>
            </li>
            <li>
              <a href="javascript:void(0)" @click="remove(item.id)" >删除</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 总价 -->
    <div class="total">
      <div class="total_val">
        <ul>
          <li>总计（不含运费）</li>
          <li>已勾选商品{{numbuycar}}件,总价:￥{{getprice}}元</li>
        </ul>
      </div>
      <div class="total_btn">
        <mt-button type="primary" @click="payoff">付 款</mt-button>
      </div>
    </div>

  </article>
</template>

<script>
import { Toast } from 'mint-ui';
import config from '../../js/config.js';
import getidlist from '../../js/goods/goodstorage.js';
import ctitle from '../common/title.vue';
import numbox from '../common/mathbuy.vue';

  export default{
      data(){
          return {
              list:[],
              title:"购物车"
          }
      },
       computed:{
         //获取选中的所有商品数量 没有选中的 数量为0
         numbuycar(){
            let newarr = this.list.map(item=>{
                            //这里的加号是转成数字类型
                return item.selected ? +getidlist.get(item.id):0;
              });
              return newarr.length &&  newarr.reduce((v1,v2)=>v1+v2);
         },
         //计算选中商品的总价格
         getprice(){
             let pricearr=this.list.map(item=>{
                 return item.selected ? +getidlist.get(item.id)*item.sell_price:0
             });
             return pricearr.length &&  pricearr.reduce((v1,v2)=>v1+v2);
         }
      },
      methods:{
          getbuycar(){
              let idlist=getidlist.getIDlist()
              //如果之前没有选择商品加入购物车过 就不用请求过接口了
              if(!idlist.length){
                  return;
              }
              let url=config.buycars+ idlist;
              this.$http.get(url).then(resp=>{
                  //console.log(this.list);
                  let body=resp.body;
                  if(body.status==0){
                      this.list=body.message.map(item=>{
                            //因为请求图片的地址不完整所以要拼接一下
                          item.src=config.imgdomain + item.thumb_path;
                          //因为有按钮 表示是否选中计算 所以加一个 属性 代表是否选中 选中的就计算
                          item.selected=true;
                          return item;
                      });
                  }
              })
           },
           //点击删除 就要删除页面上的结构 还要删除缓存的Localstorage数据
                                    //要在goodstorage.js里封装一个删除 storage的方法
           remove(id){
               //根据Id点击的 id来遍历加入购物车的商品Id找出对应的Id删除 并且删除storage
            this.list=this.list.filter(item=>item.id!==id);

              //这种方法 节约资源 根据下标 去删掉不要的数据 
            //  let index=this.getidlist.findIndex(item => item.id ==id);
            //  index > -1 && this.getidlist.splice(index,1);
               //本地永久删除
               getidlist.remove(id);

           },
        //   //通过id拿到商品的选购数量
          gettotal(id){
              //在确定总数后 要把购物车上的红色圆里的数字与购买数量匹配
               document.querySelector(".mui-badge").innerHTML=getidlist.get();
              return getidlist.get(id);
          },
          //更新的商品数量后 返回给父组件 
          updata(id,total){
             //要更改一下getidlist里的任意一个值 总计那里的 才会随着变化
             this.list[0].selected=!this.list[0].selected;
             this.list[0].selected=!this.list[0].selected;
             getidlist.set(id,total);
          },
          //点击付款 如果已经登录就自己跳到结算界面 没有就进入登录页面
          payoff(){
            //只要有一个商品被选中 且数量不为0 在登录后 就可以进结算页 或者登录以后再进
           let hasselected=this.list.some(item=>item.selected &&  getidlist.get(item.id));
            if(!hasselected){
                Toast("请选择商品");
            }else if(!/session=\w/.test(document.cookie)){
                this.$router.push({name:'clogins',query:{nextpage:'/login/pay'}});
            }else{
                this.$router.push('/login/pay');
            }
          }
      },
      created(){
          this.getbuycar();
      },
      components:{
       'v-title':ctitle,
       'v-mathbuy':numbox
      }
  }
</script>

<style lang="less">
  .shopcart-list {
    .goods {
      border-bottom: 1px solid rgba(0, 0, 0, 0.3);
      height: 102px;
      display: flex;
      padding: 5px;
      .switch {
        flex: 0 0 52px;
      }
      .img {
        margin-left: 5px;
        height: 75px;
        width: 75px;
        flex: 0 0 85px;
      }
      .inforight {
        margin-left: 5px;
        flex: 1;
      }
      .inforight ul {
        padding-left: 0px;
      }
      .inforight li {
        list-style: none;
        display: inline-block;
      }
      .inforight h4 {
        color: #0094ff;
        font-size: 14px;
      }
      .bottom li:first-child {
        color: red;
        margin-right: 5px;
      }
      .bottom li:last-child {
        margin-left: 5px;
      }
    }
    .total {
      height: 84px;
      background-color: rgba(0, 0, 0, 0.1);
      display: flex;
      padding: 5px 14px;
      ul {
		    padding-left: 0px;
		    margin: 14px 0;
		    li {
		      list-style: none;
		      font-size: 14px;
		    }
		  }
		  &_val {
		  	flex: 1;
		  }
		  &_btn {
		  	flex: 0 0 60px;
	      margin: 18px 0 0 0;
		  }
    }
  }
</style>