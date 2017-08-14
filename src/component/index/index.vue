<template>
  <article>
     <c-lunbo></c-lunbo>
     <c-nav></c-nav>
    
  </article>
</template>
<script>
// 因为index分了2个组件模块 所以要引入这两个组件模块 才能生效
import Cnav from './nav.vue';
import Clunbo from './lunbo.vue';

    export default{
         components:{
           'c-nav':Cnav,
           'c-lunbo': Clunbo
         }
    }
</script>
<style>
    
</style>