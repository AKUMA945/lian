<template>
  <header>
    <span @click="fn">&lt;</span>
    <p>{{$route.meta.title}}</p>
  </header>
</template>

<script>
export default {
    created(){

    },
    methods:{
      fn(){
        this.$router.back()
      }
    }
};
</script>

<style lang='scss' scoped>
header {
  height: 40px;
  display: flex;
}
header span{
    width: 10%;
    height: 100%;
    line-height: 40px;
    text-align: center;
    font-size: 30px
}
header p{
    width: 80%;
    height: 100%;
    line-height: 40px;
    text-align: center;
}
</style>