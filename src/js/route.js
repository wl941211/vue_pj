//导入router包
import VueRouter from 'vue-router';

//导入index组件
import cindex from '../component/index/index.vue';

//导入新闻咨询相关组件
import cnewslist from '../component/news/newslist.vue';
//导入新闻详情页组件
import cnewdetails from '../component/news/newsdetials.vue';

//导入图片分享列表页组件
import cshareimg from "../component/images/imglist.vue";
//导入图片的详情页
import cimginfo from "../component/images/imgdetial.vue";
 
 //导入商品购买路由
 import cgoodlist from '../component/goods/goodslist.vue';
 import cgooddetial from '../component/goods/gooddetial.vue';

//导入购物车组件
import cbuycar from '../component/buycar/buycar.vue';
//结算页面路由
import cpay from '../component/login/pay.vue';
//登录路由
import clogin from '../component/login/login.vue';
//导出一个路由实例
export default new VueRouter({
    routes:[
        {path:'/',redirect:"/index"},
        {path:'/index',component:cindex},
        //新闻相关路由
        {path:'/news/newslist',component: cnewslist},
        {path:'/news/newsdetials/:id',component:cnewdetails},
        //图片分享相关路由
        {path:'/image/imglist/:id',component: cshareimg},
        {path:'/image/imginfo/:id',component:cimginfo},
        //商品购买相关路由
        {path:'/goods/list',component:cgoodlist ,name:"cglist"},
        {path:'/goods/detial/:id',component:cgooddetial ,name:"cgdetial"},
        //购物车相关路由
        {path:'/buycar/buycarlist',component:cbuycar},
        //结算页面
        {path:'/login/pay',component:cpay},
        //登录页
        {path:'/login/logins',component:clogin,name:"clogins"}

    ]
});