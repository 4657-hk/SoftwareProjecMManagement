
<script>
  import { SmileOutlined, DownOutlined } from '@ant-design/icons-vue';
  import { defineComponent } from 'vue';
  import HomeTopVue from './Home-Top.vue';
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

  const name = JSON.parse(localStorage.getItem('login')).username || '';
  let data;

  if(name){
	 data = JSON.parse(localStorage.getItem(name));
  }else{
	 data = JSON.parse(localStorage.getItem('loans')) || [
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
	name: "home-body",
	components: {
	  SmileOutlined,
	  DownOutlined,
	  HomeTopVue
	},
	data(){
		return{
			login: localStorage.getItem("login"),
		} 
	},
	setup() {
	  return {
		data,
		columns,
	  };
	},
	methods:{
		addItem(){
			console.log("1111");
			const data = [
				{
					key: '1',
					name: 'Johns Brown',
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
					rate: ['已逾期1个月'],
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
			localStorage.setItem('loans',JSON.stringify(data));
			//清空缓存
			// localStorage.removeItem('loans');
		},
		aa(){
			
		},
	}
  });
  </script>


<template>
	<HomeTopVue/>
	<div class="loans-table">
		<!-- <a-button @click="this.addItem()" type="primary" ghost >添加记录</a-button> -->
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
				:color="tag.includes('已逾期') ? 'volcano' : tag.length > 5 || tag === '已还款' ? 'geekblue' : 'green'"
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

  </template>

<style lang="scss">
	.loans-table{
		width: 85%;
		margin: auto;
		h3{
			width: 125px;
			font-size: 24px;
			line-height: 38px;
			color: #2e8eec;
			border-bottom: 2px solid #2e8eec;
			font-weight: bold;
		}
	}

</style>