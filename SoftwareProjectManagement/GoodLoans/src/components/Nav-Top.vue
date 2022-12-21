<script>
    import LoginVue from './Login.vue';
    import RegVue from './Reg.vue';
    import HomeBodyVue from './Home-body.vue';
    import loanMainVue from './loan-main.vue';
    import UserInfoVue from './UserInfo.vue';
    import HomeTopVue from './Home-Top.vue';
	export default{
		name: "Nav-Top",
		components:{
            LoginVue,
            RegVue,
            HomeBodyVue,
            loanMainVue,
            UserInfoVue,
            HomeTopVue,
		},
		data(){
			return{
				item:{
					username: JSON.parse(localStorage.getItem('login')).username || '登录',
                    
				},
                showNum: '0',
                logOrReg: false,
			}
		},

		methods:{
			goHome(){
				console.log("11111");
			},
            changeShow(num){
                this.showNum = num;
                console.log(num);
            },
            logAndreg(){
				this.logOrReg = !this.logOrReg;
			},
            loginToHome(){
                location.reload();
                this.showNum = '0';
                this.item.username = JSON.parse(localStorage.getItem('login')).username;
            },
            quit(){
                let login = {login:false,username:''};
                localStorage.setItem('login',JSON.stringify(login));
                location.reload();
            }
		}

	}
</script>

<template>
    <div class="top">
        <div class="container">
            <div class="left">
                <a href="#">
                    <img src="../images/swt-icon.png" alt="">
                    <i>198-1689-4657</i>
                </a> 
            </div>
            <div class="right">
                <ul>
                    <li>
                        <a href="#" @click="this.changeShow(0)">首页</a>
                    </li>
                    <li id="is_enter">
                        
                    </li>
                    <li>
                        <a href="#">赶快充值</a>
                    </li>
                    <li id="is_register">
                        <a href="#login" @click="changeShow(1)">{{item.username}}</a>
                    </li>
                    <li>
                        <a href="#" @click="quit()">注销</a>
                    </li>
                    <li >
                        <a href="#">
                            联系客服
                            <img src="../images/contract.png" alt="">
                            
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
	<nav class="nav">
        <div class="container">
            <span><img src="../images/logo.png" alt=""></span>
            <ul>
                <li><a href="#home" @click="this.changeShow(0)">首页</a></li>
                <li><a href="#invest">我要投资</a></li>
                <li><a href="#borrow" @click="this.changeShow(2)">我要借款</a></li>
                <li><a href="#personal" @click="this.changeShow(3)">个人中心</a></li>
                <li><a href="#">新手指引</a></li>
                <li><a href="#">关于我们</a></li>
            </ul>
        </div>
    </nav>
    <HomeBodyVue v-if="showNum == '0'"/>
    <loanMainVue v-if="showNum == '2'" :loginToHome="loginToHome"/>
	<UserInfoVue v-else-if="showNum == '3'"/>
    <div v-else-if="showNum == '1'">
        <LoginVue  v-show="!logOrReg" :changeshow="logAndreg" :loginToHome="loginToHome"/>
        <RegVue v-show="logOrReg" :changeshow="logAndreg" :loginToHome="loginToHome"/>        
    </div>

</template>

<style lang="scss" scoped>
//top
.top {
	height: 60px;
    background-color: #101010;

    .container {
		width: 100%;
        display: inline-flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 0 0 20px;

        .left {
			margin-top: -10px;
            a {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                text-decoration: none;
                position: relative;
                i {
                    color: #fff;
                    font-size: 24px;
                }
            }
        }

		.right {
			float: right;
			margin: 0 40px 0 0;
            a {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                text-decoration: none;
                position: relative;
                i {
                    color: #fff;
                    font-size: 24px;
                }
            }

        }

        ul {
            display: flex;
            justify-content: space-around;
            align-items: center;
            list-style-type: none;
            li {
                // flex: 1;
                font-size: 24px;
                text-align: center;
                line-height: 50px;
                position: relative;
                a {
                    color: #fff;
                    padding: 0 15px;
                }
                img{
                    width: 100px;
                    position: absolute;
                    top: 50px;
                    display: none;
                    z-index: 999;
                }
            }
            a:hover{
                color: skyblue;
                text-decoration: none;
            }
            a:hover img{
                display: block;
            }
        }
    }
}

// nav
.nav {
    background-color: #f8f8f8;
    height: 74px;
	text-align: center;
    // padding-bottom: 10px;
    .container {
        display: inline-flex;
        justify-content: flex-start;
		align-items: center;

        ul {
			left: auto;
			list-style-type: none;
            padding:-10px 0 0 20px;
			margin-top: -0px;
            display: flex;
            justify-content: flex-start;
            align-items: center;

            li {
                padding: 0 10px;
                font-size: 16px;
                line-height: 74px;
                text-align: center;

                a {
                    color: #777777;
                    text-decoration: none;
                    outline: none;
                }
            }
            li.active{
                background-color: #dddddd;
                a{
                    color: #333333;
                }
            li.on{
                background-color: #e7e7e7;
                a{
                    color: skyblue;
                }
            }
            // .on{
            //     background-color: #333333;
            // }

            }
        }
    }

}

</style>