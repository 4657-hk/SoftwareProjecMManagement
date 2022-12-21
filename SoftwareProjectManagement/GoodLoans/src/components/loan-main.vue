<script>
    import {nanoid} from  'nanoid'
	export default{

		name: "loan-main",
        data(){
            return{
                loanNum: '0',
                loanInfo: '',
                loanMoney: 0,
                loanDays: 0,
                loanWay: 0,
                yearRate: '',
            }
        },
        props:[
            'loginToHome'
        ],
        methods:{
            applyloan(num){
                this.loanNum = num;
                console.log(this.loanNum);
                if(num == 1){
                    this.loanInfo = '信用贷';
                    this.yearRate = '10%'
                }else if(num == 2){
                    this.loanInfo = '车易贷';
                    this.yearRate = '11%'
                }else{
                    this.loanInfo = '房易贷';
                    this.yearRate = '12%'
                }
            },
            applyLoans(){
                let username = JSON.parse(localStorage.getItem('login')).username;
                let datasource = JSON.parse(localStorage.getItem(username));
                // let datasource = [];
                let way = '';
                if(this.loanWay == 0){
                    way = '按月分期';
                }else{
                    way = '按月分期';
                }

                let data = {
                    name: username,
                    amount: this.loanMoney.toString(),
                    key: nanoid(),
                    project: this.loanInfo,
                    rate: [
                        '良好',
                        '已借款一个月'
                    ],
                    way: way,
                    yearRate: this.yearRate,
                };
                datasource.push(data)
                localStorage.setItem(username,JSON.stringify(datasource));
                this.loginToHome();
            },
        },
    }

</script>
<template>
	<div  v-show="loanNum == '0'" class="container main">
        <div class="one">
            <h3>信用贷</h3>
            <div>
                <p>可借金额 <i>&yen;2,000.00</i></p>
                <a href="#">申请条件</a>
                <p>仅限浙江地区</p>
                <ul>
                    <li>填写基本资料</li>
                    <li>身份认证</li>
                    <li>视频认证</li>
                </ul>
                <a data-type='0' class="button_btn" @click="this.applyloan(1)">立即申请</a>
            </div>
        </div>
        <div class="two">
            <h3>车易贷</h3>
            <div>
                <p>可借金额 <i>&yen;2,000.00</i></p>
                <a href="#">申请条件</a>
                <p>仅限浙江地区</p>
                <ul>
                    <li>填写基本资料</li>
                    <li>身份认证</li>
                    <li>视频认证</li>
                </ul>
                <a data-type='1' class="button_btn" @click="this.applyloan(2)">立即申请</a>
            </div>
        </div>
        <div class="three">
            <h3>房易贷</h3>
            <div>
                <p>可借金额 <i>&yen;2,000.00</i></p>
                <a href="#">申请条件</a>
                <p>仅限浙江地区</p>
                <ul>
                    <li>填写基本资料</li>
                    <li>身份认证</li>
                    <li>视频认证</li>
                </ul>
                <a data-type='2' class="button_btn" @click="this.applyloan(3)">立即申请</a>
            </div>
        </div>
    </div>
    <div v-show="loanNum != '0'" class="borrow_apply">
        <div class="C_title">
            <h3>信用贷款</h3>
            <p>
                <span class="text-info">授信额度:</span>
                <span class="text-danger">2000</span>
                <span class="text-info">可借金额:</span><span class="text-danger">2000</span>
            </p>
        </div>
        <div class="content">
            <div class="C_top">
                借贷信息
                <span id="borrow-info">
                    {{ loanInfo }}
                </span>
            </div>

            <div class="row">
                <label class="col-md-4 text-right">借款金额</label>
                <p class="col-md-8">
                    <input type="number" id="borrowmoney" v-model="loanMoney">元
                    <span></span>
                </p>
            </div>
            <div class="row">
                <label class="col-md-4 text-right">借款期限</label>
                <p class="col-md-8">
                    <select v-model="loanDays">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </select>月 <span></span>
                </p>
            </div>
            <div class="row">
                <label class="col-md-4 text-right">还款方式</label>
                <p class="col-md-8 row">
                    <label class="col-md-3">
                        <input type="radio" name="repaytype" v-model="loanWay" checked value="0" style="width: 20px;">按月分期
                    </label>
                    <label class="col-md-3">
                        <input type="radio" name="repaytype" v-model="loanWay" value="1" style="width: 20px;">按月到期
                    </label>
                </p>
            </div>  
            <div class="row">
                <label class="col-md-4 text-right ">借款标题</label>
                <p class="col-md-8">
                    <input type="text" id="title" style="width:80%">
                </p>
            </div>
            <div class="row">
                <label class="col-md-4 text-right">借款描述</label>
                <p class="col-md-8">
                    <textarea id="info" cols="40" rows="2" style="width:80%"></textarea>
                </p>
            </div>
            <div class="row">
                <a-button style="margin: 0 90px;" type="primary" @click="this.applyloan(0)">返回</a-button>
                <a-button type="primary" @click="this.applyLoans">提交</a-button>
            </div>
        </div>
    </div>
</template>

<style lang="scss">

.main {
    display: flex;
    justify-content: flex-start;
    align-content: center;
    padding: 20px 0 0 0;
    .one {
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: 0px 15px;

        h3 {
            background-color: #40d47e;
            height: 48px;
            font-size: 24px;
            color: #fff;
            padding-left: 20px;
        }

        div {
            background-color: #f9f9f9;
            padding: 10px;
            display: flex;
            flex-direction: column;
            font-size: 14px;

            p:first-child {
                font-size: 16px;
                color: #333333;
            }

            a {

                color: #337aB7;
            }

            p {
                color: #737373;
            }

            ul {
                display: flex;
                flex-direction: column;
                padding-left: 10px;
                li {
                    color: #555;
                    font-size: 14px;
                    list-style: none;
                    padding-left: 20px;
                    margin-top: 5px;
                    background: url(../images/sequare.png) left center no-repeat;
                }
            }

            a:last-child {
                align-self: center;
                display: inline-block;
                width: 80px;
                height: 30px;
                background-color: #00a8ff;
                border-radius: 15px;
                color: #fff;
                line-height: 30px;
                text-align: center;
            }
        }
    }

    .two {
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: 0px 15px;

        h3 {
            background-color: #ec7e20;
            height: 48px;
            font-size: 24px;
            color: #fff;
            padding-left: 20px;
        }

        div {
            background-color: #f9f9f9;
            padding: 10px;
            display: flex;
            flex-direction: column;
            font-size: 14px;

            p:first-child {
                font-size: 16px;
                color: #333333;
            }

            a {

                color: #337aB7;
            }

            p {
                color: #737373;
            }

            ul {
                display: flex;
                flex-direction: column;
                padding-left: 10px;
                li {
                    color: #555;
                    font-size: 14px;
                    list-style: none;
                    padding-left: 20px;
                    margin-top: 5px;
                    background: url(../images/sequare.png) left center no-repeat;
                }
            }

            a:last-child {
                align-self: center;
                display: inline-block;
                width: 80px;
                height: 30px;
                background-color: #00a8ff;
                border-radius: 15px;
                color: #fff;
                line-height: 30px;
                text-align: center;
            }
        }
    }

    .three {
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: 0px 15px;

        h3 {
            background-color: #2ca2ee;
            height: 48px;
            font-size: 24px;
            color: #fff;
            padding-left: 20px;
        }

        div {
            background-color: #f9f9f9;
            padding: 10px;
            display: flex;
            flex-direction: column;
            font-size: 14px;

            p:first-child {
                font-size: 16px;
                color: #333333;
            }

            a {

                color: #337aB7;
            }

            p {
                color: #737373;
            }

            ul {
                display: flex;
                flex-direction: column;
                padding-left: 10px;
                li {
                    color: #555;
                    font-size: 14px;
                    list-style: none;
                    padding-left: 20px;
                    margin-top: 5px;
                    background: url(../images/sequare.png) left center no-repeat;
                }
            }

            a:last-child {
                align-self: center;
                display: inline-block;
                width: 80px;
                height: 30px;
                background-color: #00a8ff;
                border-radius: 15px;
                color: #fff;
                line-height: 30px;
                text-align: center;
            }
        }
    }
}

.borrow_apply {
    margin: 20px auto;
    width: 500px;
    .C_title {
        padding: 20px;
        background-color: #F4F8FA;
        border-left: 2px solid #0099DD;
        margin-bottom: 20px;

        h3 {
            color: #09d;
            font-size: 24px;
            margin-top: 20px;
            margin-bottom: 10px;
        }

        p {
            font-size: 14px;
            margin-bottom: 10px;
        }
    }

    .content {
        .C_top {
            padding-bottom: 9px;
            margin: 40px 0 20px;
            border-bottom: 1px solid #eee;
            font-size: 22px;
            font-weight: normal;

            span {
                display: inline-block;
                background-color: #337ab7;
                color: #fff;
                font-size: 16px;
                padding: 2px 8px;
                border-radius: 4px;
            }
        }

        div.row {
            margin-bottom: 20px;
            font-size: 14px;
            color: #333333;
            font-weight: bold;

            p {
                display: flex;
                align-items: center;
                position: relative;
                input {
                    width: 260px;
                    border: 1px solid #ddd;
                    padding: 6px 12px;
                    outline: none;
                }
                span{
                    position: absolute;
                    top: 32px;
                    left: 14px;
                }
                select {
                    width: 260px;
                    border: 1px solid #ddd;
                    padding: 6px 12px;
                    outline: none;
                }

                textarea {
                    border: 1px solid #ddd;
                    padding: 6px 12px;
                    outline: none;
                }
                .btn{
                    margin-left: 285px;
                }
            }
        }
    }
}

</style>