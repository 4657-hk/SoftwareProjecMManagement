<script lang="ts">
  import {ref} from 'vue';
  export default {
	name: "Login",
	data() {
		return {

		}
	},
    props:[
        'changeshow',
        'loginToHome',
    ],
    setup(){
        const userName = ref<string>('');
        const passWord = ref<string>('');
        return{
            userName,
            passWord
        };
    },
    methods:{
        login(){
            let data = JSON.parse(localStorage.getItem('userSQL') || '');
            let username = this.userName;
            let password = this.passWord;
            //获取账号
            let user1 = data.filter(item => item.username === username)
            //判断密码
            if(user1 && user1[0] && user1[0].username){
                if(user1[0].password == password){
                    let xxx = JSON.stringify({login: true,username: username});
                    localStorage.setItem('login',xxx);
                    this.loginToHome();
                    alert('登录成功！');
                }else{
                    alert('用户名或密码错误');
                }
            }else{
                alert('用户名或密码错误');
            }
        }
    }
  };
</script>

<template>
  <!-- enter -->
  <div class="enter">
      <div class="container">
            <h3>用户登录</h3>
            <div class="main">
                <p>请输入用户名和密码</p>
                <div>
                <label>用户名</label>
                <a-input style="display: inline; width: 200px;" v-model:value="userName" placeholder="请输入用户名"/>
                </div>
                <div>
                    <label>密&emsp;码</label>
                    <a-input-password style="display: inline-flex;width: 200px;" v-model:value="passWord" placeholder="请输入密码" />
                </div>
                <div class="btn">
                    <button type="button" @click="this.login()">登录</button>
                    <a href="#" id="register" @click="changeshow">新用户，马上注册</a>
                </div>
            </div>
      </div>
  </div>
</template>

<style lang="scss">
// enter
.enter {
    width: 550px;
    margin: 10px auto;
    .container {
        padding: 0px;
        display: flex;
        flex-direction: column;
        border: 1px solid #ddd;
        border-radius: 10px;
        h3 {
            height: 42px;
            background-color: #f5f5f5;
            border-bottom: 1px solid #ddd;
            color: #333;
            font-size: 14px;
            padding: 10px 15px;
        }

        .main {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin: 30px 44px 0 100px;

            p {
                font-size: 18px;
                color: #999999;
                padding: 20px;
            }

            div {
                display: inline;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 20px;
                
                >label {
                    font-size: 14px;
                    color: #333333;
                    font-weight: bold;
                    margin-right: 20px;
                }
            }

            .btn {
                display: flex;
                align-items: center;
                margin-left: 100px;
                button {
                    color: #fff;
                    font-size: 14px;
                    padding: 6px 30px;
                    background-color: #5cb85c;
                    border: none;
                    outline: none;
                    border-radius: 5px;
                    margin-right: 40px;
                }

                a {
                    font-size: 14px;
                    color: #337ab7;
                }
            }
        }
    }
}
</style>
