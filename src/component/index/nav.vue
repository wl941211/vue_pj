<template>
  <section>
  <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
			        <a>
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">首页</div>
				</a>
			    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon  mui-icon-extra mui-icon-extra-gift"><span class="mui-badge">5</span></span>
		                    <div class="mui-media-body">商品购买</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
			         <router-link to="/news/newslist">
		                    <span class="mui-icon mui-icon-extra mui-icon-extra-new"></span>
		                    <div class="mui-media-body">新闻咨询</div>
				 </router-link>
			   </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-image"></span>
		                    <div class="mui-media-body">图片分享</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">搜索</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">设置</div></a></li>
  </ul>
  </section>
</template>
<script>
   export default{
  
   }
</script>
<style lang="less">
    
</style>