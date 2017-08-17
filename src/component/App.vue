<template>
  <main>
    <v-head></v-head>
    <!--缩略图的占位标签-->
    <lg-preview></lg-preview>
    <router-view></router-view>
    <v-foot></v-foot>
  </main>
</template>
<script>
    // 引入其他组件
    import head from './home/header.vue';
    import foot from './home/footer.vue';

    export default{
        components:{
            'v-head':head,
            'v-foot':foot
        }
    }
</script>
<style>
</style>