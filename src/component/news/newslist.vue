<template>
  <section>
    <c-title :title='title'></c-title>
     <ul class="mui-table-view">
    <li v-for='item in list' :key='item.id' class="mui-table-view-cell mui-media">
        <router-link :to="'/news/newsdetials/'+item.id">
            <img class="mui-media-object mui-pull-left" :src="item.img_url">
            <div class="mui-media-body">
               <p class='mui-ellipsis'>{{item.title}}</p> 
               <div class="list_item">
                   <p>创建时间：{{ item.add_time|formatDate('YYYY-MM-DD')}}</p>
                   <p>点击量：{{ item.click }}</p>
               </div>
            </div>
        </router-link>
    </li>
</ul>
  </section>
</template>
<script>
//要用路径去请求数据 所以要导入config配置文件
import configs from '../../js/config.js';
import ctitle from '../common/title.vue';
    export default{
        //渲染的数据
        data(){
            return {
                list:[],
                title:"新闻资讯"
            };
        },
        methods:{
            getNewlist(){
                let url=configs.newlist;
                this.$http.get(url).then(resp=>{
                    console.log(resp);
                    //短路现象 找假
                    resp.body.status==0 && (this.list= resp.body.message);
                })
            }
        },
        created(){
            //这个ajax函数在加载时 created就开始执行
            this.getNewlist();
        },
        //定义公共标题的组件
        components:{
            'c-title': ctitle 
        }
    }
</script>
<style lang="less">
    .list_item{
        p{
            display:inline-block;
        }
    }
</style>