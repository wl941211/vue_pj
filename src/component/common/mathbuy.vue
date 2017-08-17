<template>
   <div class="mui-numbox">
          	<button class="mui-btn mui-btn-numbox-minus" @click="cut">-</button>
          	<input class="mui-input-numbox" type="number" v-model="math" >
          	<button class="mui-btn mui-btn-numbox-plus" @click="add">+</button>
   </div>
</template>
<script>
export default {
  //父组件传来的数量
  props:['f_math'],
  data(){
      return {
       math:this.f_math||0 //初始值由父组件来决定 没有就默认为0
      }
  },
  methods:{
    add(){
       this.math++;
    },
    cut(){
        if(this.math){
             this.math--;
        }
    }
  },
  watch:{
      math(){
          //当数量发生变化时 就由子把值传递给父
          this.$emit('changeval',this.math);
      }
  }
}
</script>
