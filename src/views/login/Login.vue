<template>
    <div class="input">
       <Header ></Header>
        <input type="text" placeholder="请输入用户名" v-model="username"> 
        <br/>
        <input :type="type" placeholder="请输入密码" v-model="userpwd">
        <span :class="['iconfont',flag?'icon-yanjing':'icon-yanjing_bi']" @click="change"></span>
        <p><button @click="submit">登录</button></p>
        <br/>
        <span>没有账号 快速登录</span>
    </div>
</template>

<script>
import axios from "axios"
import {mapMutations,mapState} from 'vuex'
import Header from "../../components/Header"
export default {
    
    computed: {
         ...mapState(['user'])
    },
data(){
    return {
        username:"",
        userpwd:"",
        flag:"",
        type:"password"
    }
},
methods:{
     ...mapMutations(['getUse']),
    change(){
         this.flag = !this.flag;
      if (this.flag) {
        this.type = "text";
      } else {
        this.type = "password";
      }
    },
    submit(){
        if(!this.username.trim()||!this.userpwd.trim()){
            confirm("用户名或密码不正确")
        }else{
            axios.post("/login",{
                username:this.username,
                userpwd:this.userpwd
            }).then(({data})=>{
                console.log(data)
                 if(data.code===0){
              alert(data.msg)
            }else{
              this.getUse(data.data)
              localStorage.token=data.token //存本地，表示已登录
              this.$router.push('/')
            }
            })
        }
    }
},
components:{
    Header
}
}
</script>

<style lang="scss" scoped>
.input{
    width: 100%;
    display: flex;
    flex-direction: column;
}
header{
    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;
    background: #ccc;
}
.input input{
    width: 90%;
    height: 38px;
    margin-left: 5%;
    background: #eee;
    border:1px solid #eee;
}
.input input:nth-child(2){
    margin: 20px 5% 5px 5%;
}
.input button{
    width: 90%;
    height: 38px;
    margin:30px 5% 0px 5%;
    background: #f00;
    border:1px solid #f00;
}
.input span{
    margin-left: 5%;
}
.iconfont{
    position: fixed;
    right: 8%;
    top:150px;
    cursor: pointer;
}
</style>
