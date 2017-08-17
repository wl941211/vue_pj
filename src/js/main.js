//一.导入第三方包 暂时就导入3个
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

//导入MintUi和MUI ===都是界面样式结构插件
import mintUI from 'mint-ui'; //但是 默认导入的是mint-ui的js部分
import 'mint-ui/lib/style.css';//所以 要用到这个Mint-ui的样式 就要引用他的css代码文件

import 'mui/dist/css/mui.css'; //这个Mui框架 因为是原生写的 所以不兼容严格模式语法 因此这里只引用他的css代码

//引入MUI的扩展图标样式
import 'mui/examples/hello-mui/css/icons-extra.css';
//1.1记得引入后 要手动use启用插件 因为上面引入的文件 代码里写了只在浏览器环境里 会自动启用
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(mintUI);

//二.导入自己写的文件
//1.导入自己的组件 
import App from '../component/App.vue';
//2.导入配置好的路由
import router from './route.js';
//3.自己的过滤器
import './filter.js';
//4.导入图片放大浏览插件
import img_pre from '../component/plugin/img_preview_install';
Vue.use(img_pre);

//创建一个Vue实例
new Vue({
    el:"#app",
    render:c=>c(App),
    router:router
})