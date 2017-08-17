<template>
 <section class="page">
     <v-title :title="title"></v-title>
   <div>我是结算页面</div>
 </section>
</template>

<script>
import ctitle from "../common/title.vue";
 export default {
 data() {
 return {
    title:"结算"
 }

 },
 components: {
    'v-title':ctitle
 }
 }
</script>

<style scoped lang="less">

 
</style>
