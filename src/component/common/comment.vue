<template>
    <section>  
    
        <div class="mui-card">
				<div class="mui-card-header">提交评论</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<textarea v-model='comment' id="textarea" rows="5" placeholder="发布评论"></textarea>
					</div>
				</div>
				<div class="mui-card-footer">
                  <button @click="submitcomment" type="button" class="mui-btn mui-btn-success mui-btn-block">按钮</button>
                </div>
			</div>

             <div class="mui-card">
				<div class="mui-card-header">评论列表</div>
				<div class="mui-card-content">
					
						<ul class="mui-table-view">
				            <li v-for="(item,i) in list" :key='i' class="mui-table-view-cell">
                               <div>
                                  <span>第{{i+1}}楼</span>
                                  <span>昵称：{{item.user_name}}</span>
                                  <span>评论时间：{{item.add_time|formatDate('YYYY-MM-DD')}}</span>
                                  
                               </div>
                               <p>{{item.content}}</p>
                            </li>
		             	</ul>
				
				</div>
				<div class="mui-card-footer">
                  <button ref='getele' @click="getcommentlist" type="button" class="mui-btn mui-btn-success mui-btn-block">加载更多评论</button>
                </div>
			</div>
    </section>
</template>
<script>
import config from '../../js/config.js';
import { Toast } from 'mint-ui';
    export default{
       props:['id'],
       data(){
           return {
               comment:'',
               list:[],
               pageindex:1
           };
       },
       methods:{
           submitcomment(){
             let url=config.commentsubmit+this.id;
             let data={content:this.comment}
             this.$http.post(url,data,{emulateJSON:true}).then(resp=>{
                  //console.log(resp.body);
                  //发布成功后 清空输入框的内容
                  if(resp.body.status==0){
                      Toast({
                              message: '发布成功',
                              iconClass: 'icon icon-success'
                      });
                      // 把数据添加到评论列表的最前面
                  this.list.unshift({
                       user_name: '大虾',
                       add_time: Date.now(),
                       content: this.comment
                   });
                      this.comment='';
                  }
             })
           },
           getcommentlist(){
              let url=`${config.commentlist+this.id}?pageindex=${this.pageindex}`;
              this.$http.get(url).then(resp=>{
                  // 如果当前页已经么有数据了，那么不用push也不用pageindex++了
                  if(resp.body.status==0&&resp.body.message.length>0){
                      this.list.push(...resp.body.message);
                      this.pageindex++;
                  }else{
                       this.$refs.getele.disabled = true;
                  }
              })
           }

       },
       created(){
           //默认显示第一页的评论数据
           this.getcommentlist();
       }

    }
</script>
<style lang="less">
    
</style>