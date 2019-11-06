<template>
    <div>
       <span @click="clickFn">登录</span>
    </div>
</template>

<script>
export default {
methods:{
    clickFn(){
        this.$router.push("/login")
    }
}
}
</script>

<style>

</style>
