//导入router包
import VueRouter from 'vue-router';

//导入index组件
import cindex from '../component/index/index.vue';

//导入新闻咨询相关组件
import cnewslist from '../component/news/newslist.vue';
//导入新闻详情页组件
import cnewdetails from '../component/news/newsdetials.vue';

//导出一个路由实例
export default new VueRouter({
    routes:[
        {path:'/',redirect:"/index"},
        {path:'/index',component:cindex},
        //新闻相关路由
        {path:'/news/newslist',component: cnewslist},
        {path:'/news/newsdetials/:id',component:cnewdetails}
    ]
});