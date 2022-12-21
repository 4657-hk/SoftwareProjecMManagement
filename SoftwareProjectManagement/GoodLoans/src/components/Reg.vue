<script lang="ts">
  import {ref} from 'vue';
  export default {
	name: "Reg",
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
        const password = ref<string>('');
        const password1 = ref<string>('');
        return{
            userName,
            password,
            password1
        };
	},
    created() {
        let user = JSON.stringify([{username:"xhk",password:"326"},{username:"xhk2",password:"326"}]);
        let data =  JSON.parse(localStorage.getItem('userSQL') || user);
        localStorage.setItem("userSQL",JSON.stringify(data));
    },
	methods:{
        reg(){
            let data =  JSON.parse(localStorage.getItem('userSQL') || '');
            console.log(data);
            if(this.password1 == this.password){
                let user1 = {username:"",password:""};
                user1.username = this.userName;
                user1.password = this.password;
                data.push(user1);
                localStorage.setItem("userSQL",JSON.stringify(data));
                this.loginToHome();
            }else{
                alert("两次密码输入不一致，请重新输入");
            }
        }
	}
  };
</script>

<template>
    <!-- 用户注册 -->
    <div class="register ">
        <div class="container">
            <h3>用户注册</h3>
            <div id="myform">
                <div class="main">
                    <p>请填写注册信息，点击“提交注册”即可完成注册！</p>
                    <div>
                        <label>用户名&emsp;</label>
                        <a-input style="display: inline; width: 260px;" v-model:value="userName" placeholder="请输入用户名"/>
                    </div>
                    <div>
                        <label>密&emsp;码&emsp;</label>
                        <a-input-password style="display: inline-flex;width: 260px;" v-model:value="password" placeholder="请输入密码" />
                    </div>
                    <div>
                        <label>确认密码</label>
                        <a-input-password style="display: inline-flex;width: 260px;" v-model:value="password1" placeholder="请再次输入密码" />
                    </div>
                    <div class="btn">
                        <div>
                            <button type="button" @click="this.reg()">注册</button>
                            <a href="#" @click="changeshow">已有账号，马上登录</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.register {
    width: 700px;
    margin: 10px auto;
    .container {
        padding: 0;
        display: flex;
        flex-direction: column;
        border: 1px solid #ddd;
        border-radius: 5px;

        h3 {
            text-indent: 15px;
            height: 42px;
            font-size: 14px;
            color: #333333;
            background-color: #f5f5f5;
            line-height: 42px;
            border-bottom: 1px solid #ddd;
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
