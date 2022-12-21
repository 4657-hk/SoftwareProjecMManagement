<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { MailOutlined, QqOutlined, AppstoreOutlined, SettingOutlined, SmileOutlined, DownOutlined } from '@ant-design/icons-vue';
const columns = [
	{
	  name: '借款人',
	  dataIndex: 'name',
	  key: 'name',
	  indentSize: 100,
	},
	{
	  title: '借款项目',
	  dataIndex: 'project',
	  key: 'project',
	  indentSize: 100,
	},
	{
	  title: '年利率',
	  dataIndex: 'yearRate',
	  key: 'yearRate',
	},
	{
	  title: '金额',
	  key: 'amount',
	  dataIndex: 'amount',
	},
	{
	  title: '还款方式',
	  key: 'way',
	  dataIndex: 'way',
	},
	{
	  title: '进度',
	  key: 'rate',
	  dataIndex: 'rate',
	},
	{
	  title: '操作',
	  key: 'action',
	},
  ];
  let data;
  const name = JSON.parse(localStorage.getItem('login') || '').username || '';
  if(name){
	
	 data = JSON.parse(localStorage.getItem(name) || '') || [
		{
			key: '1',
			name: 'John Brown',
			project: '信用贷',
			yearRate: '10%',
			amount: '2000',
			rate: ['良好', '已借款3个月'],
			way: "按月分期",
		},
		{
			key: '2',
			name: 'Jim Green',
			project: '车易贷',
			yearRate: '11%',
			amount: '2000',
			rate: ['已逾期1个月1个月'],
			way: "按月分期",
		},
		{
			key: '3',
			name: 'Joe Black',
			project: '房易贷',
			yearRate: '12%',
			amount: '2000',
			rate: ['良好', '已还款'],
			way: "按月到期",
		},
	];		
  }

  

export default defineComponent({
  name: "UserLeft",
  components: {
	MailOutlined,
	QqOutlined,
	AppstoreOutlined,
	SettingOutlined,
	SmileOutlined,
    DownOutlined,
  },

  methods:{
	show(){
		console.log(this);
	},
	handleClick(e){
		this.itemKey = e.key		
	}
  },

  data(){
	return{
		itemKey: "1",
	}
  },
  
  setup() {
	const selectedKeys = ref<string[]>(['1']);
	let keys = '1';
	const openKeys = ref<string[]>(['sub1','sub2','sub3']);
	// const handleClick: MenuProps['onClick'] = e => {
	// 	console.log(keys);
		
	//   keys = e.key.toString();
	// 	console.log(keys);
	//   console.log('click', e);
	// };
	const titleClick = (e: Event) => {
	  console.log('titleClick', e);
	};
	watch(
	  () => openKeys,
	  val => {
		console.log('openKeys', val);
	  },
	);
	return {
	  selectedKeys,
	  openKeys,

	//   handleClick,
	  titleClick,

	  data,
      columns,
	  keys,
	};
  },
});
</script>

<template>
	<div class="leftmain">
		<a-menu
			id="dddddd"
			v-model:openKeys="openKeys"
			v-model:selectedKeys="selectedKeys"
			style="width: 256px"
			mode="inline"
			@click="handleClick"
		>
		<a-sub-menu key="sub1" @titleClick="titleClick">
			<template #icon>
			<MailOutlined />
			</template>
			<template #title>借款项目</template>
			<a-menu-item-group key="g1">
			<template #icon>
				<QqOutlined />
			</template>
			<a-menu-item key="1">贷款项目</a-menu-item>
			<a-menu-item key="2">还款明细</a-menu-item>
			</a-menu-item-group>
		</a-sub-menu>
		<a-sub-menu key="sub2" @titleClick="titleClick">
			<template #icon>
			<AppstoreOutlined />
			</template>
			<template #title>我的账户</template>
			<a-menu-item key="5">账户信息</a-menu-item>
			<a-menu-item key="6">实名认证</a-menu-item>
			<a-menu-item key="7">银行卡管理</a-menu-item>
			<a-menu-item key="8">登记记录</a-menu-item>
		</a-sub-menu>
		<a-sub-menu key="sub3">
			<template #icon>
			<SettingOutlined />
			</template>
			<template #title>资产详情</template>
			<a-menu-item key="9">账户流水</a-menu-item>
			<a-menu-item key="10">充值明细</a-menu-item>
			<a-menu-item key="11">提现记录</a-menu-item>
			<a-menu-item key="12">收款明细</a-menu-item>
		</a-sub-menu>
		</a-menu>
	</div>
	<div class="rightmain" v-if="itemKey=='1'">
		<h3>借款记录</h3>
		<a-table :columns="columns" :data-source="data">
			<template #headerCell="{ column }">
			<template v-if="column.key === 'name'">
				<span>
				<smile-outlined />
				借款人
				</span>
			</template>
			</template>

			<template #bodyCell="{ column, record }">
			<template v-if="column.key === 'name'">
				<a>
				{{ record.name }}
				</a>
			</template>
			<template v-else-if="column.key === 'rate'">
				<span>
				<a-tag
					v-for="tag in record.rate"
					:key="tag"
					:color="tag === '已逾期1个月' ? 'volcano' : tag.length > 5 || tag === '已还款' ? 'geekblue' : 'green'"
				>
					{{ tag.toUpperCase() }}
				</a-tag>
				</span>
			</template>
			<template v-else-if="column.key === 'action'">
				<span>
				<a>提醒 一 {{ record.name }}</a>
				<a-divider type="vertical" />
				<a>催收还款</a>
				<a-divider type="vertical" />
			</span>
			</template>
			</template>
		</a-table>		
	</div>
	<div v-else-if="itemKey=='5'" class="rightinfo">
		<div class="right_in">
			<div class="one">
				<div><img src="../images/head_icon.jpg" alt=""></div>
				<ul>
					<p class="col-md-4">用户名：<span class="text-primary" id="totalmoney"></span></p>
					<p class="col-md-4">总金额：<span class="text-primary" id="totalmoney"></span></p>
					<p class="col-md-4">可用金额：<span class="text-primary" id="usablemoney"></span></p>
					<p class="col-md-4">冻结金额：<span class="text-primary" id="blockedmoney"></span></p>					
				</ul>
			</div>
			<div class="two row">

			</div>
			<div class="three">
				<a href="recharge.html" class="btn btn-primary">账户充值</a>
				<a href="#" class="btn btn-danger">账户提现</a>
			</div>
			<div class="four">
				<div class="row">
					<div class="col-md-4">
						<div>
							<img src="../images/shiming.png" alt="">
							<div>
								<h5>实名认证</h5>
								<p>未认证 <a href="#">马上认证</a></p>
							</div>
						</div>
						<p>实名认证之后才能在平台投资</p>
					</div>
					<div class="col-md-4">
						<div>
							<img src="../images/shouji.jpg" alt="">
							<div>
								<h5>手机认证</h5>
								<p>已认证 <a href="#">查看</a></p>
							</div>
						</div>
						<p>可以收到系统操作信息,并增加使用安全性</p>
					</div>
					<div class="col-md-4">
						<div>
							<img src="../images/youxiang.jpg" alt="">
							<div>
								<h5>邮箱认证</h5>
								<p>已认证 <a href="#">查看</a></p>
							</div>
						</div>
						<p>您可以设置邮箱来接收重要信息</p>
					</div>
					<div class="col-md-4">
						<div>
							<img src="../images/baozhan.jpg" alt="">
							<div>
								<h5>VIP会员</h5>
								<p>普通用户 <a href="#">查看</a></p>
							</div>
						</div>
						<p>VIP会员，让你更快捷的投资</p>
					</div>
				</div>
		</div>
	</div>

	</div>
	<div style="display: inline;margin: auto;font-size: 100px;" v-else>
		暂未开发
	</div>

</template>

<style lang="scss">
	.leftmain{
		display: inline-block;
		margin: 10px 0 0 300px;
		width: 258px;
    	border: 1px #DDD solid;
		vertical-align: top;

	}
	.rightmain{
		display: inline-block;
		margin: 10px 0 0 10px;
		width: 920px;
		vertical-align: top;
		h3{
			width: 125px;
			font-size: 24px;
			line-height: 38px;
			color: #2e8eec;
			border-bottom: 2px solid #2e8eec;
			font-weight: bold;
		}
	}
	.rightinfo{
		margin: 10px 0 0 10px;
		width: 920px;
		vertical-align: top;
		display: inline-block;
		.right_in {
			border: 1px solid #ddd;
			border-radius: 10px;
			// padding: 0px 15px;
			width: 950px;
			.one {
				display: flex;
				justify-content: flex-start;
				align-items: center;
				padding: 10px 0 10px 10px;
				border-bottom: 1px solid #ddd;

				div {
					padding: 10px;
					border: 1px solid #ddd;
					flex: 1;

					img {
						width: 100%;
					}
				}

				ul {
					flex: 8;
					margin: 5px 0 0 10px;

					li {
						font-size: 14px;
						color: #333;
						margin-bottom: 10px;
					}
				}
			}

			.two {
				font-size: 18px;
				color: #333;
				margin:  auto;
				display: inline-block;
				p {
					padding: 0 10px;
					display: inline-block;
				}
			}

			.three {
				display: flex;
				justify-content: center;
				margin: 30px 0;
			}

			.four {
				padding: 10px;
				margin: 0 auto;

				.row {
					margin: 0 0 0 60px;
					border-bottom: 1px solid #ddd;
					// margin: 0 auto;
					.col-md-4 {
						padding: 10px 10px 0px 10px;
						display: inline-block;
						width: 200px;
						div {
							display: flex;
							align-items: center;

							div {
								display: flex;
								align-items: flex-start;
								flex-direction: column;

								h5 {
									font-size: 14px;
									color: #333333;
									margin-bottom: 5px;
									font-weight: bold;
								}

								p {
									color: #333;
									font-size: 14px;
								}
							}
						}

						p {
							font-size: 14px;
							color: #333333;
							margin: 5px 0;
							width: 150px;
						}
					}
				}
			}
		}		
	}

</style>