<script>
  import Login from './components/Login.vue';
  import NavTopVue from './components/Nav-Top.vue';
  import HomeVue from './components/Home.vue';
  export default {
    components:{
      Login,
      NavTopVue,
      HomeVue,
    },
    created() {
        let user = JSON.stringify([{username:"xhk",password:"326"},{username:"xhk2",password:"326"}]);
        let data =  JSON.parse(localStorage.getItem('userSQL') || user);
        let login = {login:false,username:''};
        let login2 = JSON.parse(localStorage.getItem('login') || login);
        localStorage.setItem("userSQL",JSON.stringify(data));
        localStorage.setItem("login",JSON.stringify(login2));
        
    },
  };
</script>

<template>
  <HomeVue/>
</template>

<style>
  body{
    margin: 0;
  }
</style>
