import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'
import Circle from '../views/home/circle/Circle.vue'
import Mine from '../views/home/mine/Mine.vue'
import Login from '../views/login/Login.vue'
import Wx from "../views/login/wx/Wx.vue"
import Wb from "../views/login/wb/Wb.vue"
import Qq from "../views/login/qq/Qq.vue"
import Change from '../views/change/Change.vue'
import Collect from '../views/collect/Collect.vue'
import Comment from '../views/comment/Comment.vue'
import Give from '../views/comment/give/Give.vue'
import Receive from '../views/comment/receive/Receive.vue'
import Personal from '../views/personal/Personal.vue'
import Register from '../views/register/Register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home,
    children:[{
      path:'/home/circle',
      name:"circle",
      component:Circle,
      
    },{
      path:'/home/mine',
      name:"mine",
      component:Mine
    },{
      path:'/home',
      redirect:"/home/circle"
    }]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta:{title:"登录"},
    children:[{
      path:"/login/wx",
      name:"wx",
      component:Wx
    },{
      path:"/login/qq",
      name:"qq",
      component:Qq
    },{
      path:"/login/wb",
      name:"wb",
      component:Wb
    }]
  },{
    path: '/change',
    name: 'change',
    component: Change
  },{
    path: '/collect',
    name: 'collect',
    component: Collect
  },{
    path: '/comment',
    name: 'comment',
    component: Comment,
    children:[{
      path:'/comment/give',
      name:"give",
      component:Give
    },{
      path:'/comment/receive',
      name:"receive",
      component:Receive
    }]
  },{
    path: '/personal',
    name: 'personal',
    component: Personal
  },{
    path: '/register',
    name: 'register',
    component: Register,
    meta:{title:"注册"}
  },{
    path: '/',
    redirect:"/home"
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
