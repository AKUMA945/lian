<template>
    <div class="wrap">
        <div class="main">
            <router-view></router-view>
        </div>
        <div class="footer">
            <router-link to="/home/circle">圈子</router-link>
            <router-link to="/home/mine">我的</router-link>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.wrap{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column
}

.main{
    flex: 1;
    width: 100%;
    overflow: auto;
}
.footer{
    width: 100%;
    height: 50px;
    background: #0ff;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.router-link-exact-active {
      color: red;
}
</style>
