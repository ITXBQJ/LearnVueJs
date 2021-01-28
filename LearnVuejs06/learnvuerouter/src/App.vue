<template>
  <div id="app">
    <!-- <router-link router-link to="/home" tag="button" replace active-class="active">首页</router-link>
    <router-link router-link to="/about" tag="button" replace active-class="active">关于</router-link> -->

    <!-- <router-link router-link to="/home" tag="button" replace>首页</router-link>
    <router-link router-link to="/about" tag="button" replace>关于</router-link> -->

    <!-- <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button>
    <button @click="userClick">用户界面</button> -->

    <router-link router-link to="/home" tag="button" replace>首页</router-link>
    <router-link router-link to="/about" tag="button" replace>关于</router-link>
    <router-link router-link :to="'/user/'+userId" tag="button" replace>用户</router-link>
    <router-link router-link :to="{path:'/profile',query:{name:'why',age:18,height:1.88}}" tag="button" replace>档案</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      userId:'lisi'
    }
  },
  methods:{
    homeClick(){
      //通过代码的方式修改路由
      //this.$router.push('/home')
      this.$router.replace('/home')
    },
    aboutClick(){
      //this.$router.push('/about')
      this.$router.replace('/about')
    },
    userClick(){
      this.$router.replace('/user')
    }
  }
}
</script>

<style>
  /* .router-link-active{
    color: red;
  } */

  .active{
    color: red;
  }
</style>
