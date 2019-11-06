<template>
    <div class="home">
        圈子
        {{list}}
    <div class="small" v-for="(item,index) in list" :key="index">
        <p>{{item.nick}}</p>
        <p>{{item.publishtime}}</p>
        <p><img :src="item.imgs" alt=""></p>
        <p>{{item.txt}}</p>
        <p>{{item.zanNum}}</p>
    </div>
    </div>
</template>

<script>
import {mapActions} from "vuex"
export default {
computed:{
list(){
      return this.$store.state.list
    },
    },
data(){
    return {

    }
},
created(){
    this.getList()
},
methods:{
...mapActions(["getList"])
}
}
</script>

<style scoped>
.small{
    border-bottom: 1px solid red;
    margin-top: 20px
}
</style>
