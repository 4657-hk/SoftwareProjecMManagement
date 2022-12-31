<script>
	import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons-vue';
	import { message } from 'ant-design-vue';
	export default{
		name: 'recite',
		components:{
			ArrowUpOutlined,
			ArrowDownOutlined,
		},
		data(){
			return{
				englishItem: JSON.parse(localStorage.getItem('englishItem')),
				visible: false,
				englishWord: JSON.parse(localStorage.getItem('englishItem'))[0].english,
				chineseWord: '',
				maskClosable: false,
				num: 0,
				correctNum: 0,
				historyCorNum: JSON.parse(localStorage.getItem('history')).historyCorNum,
				historyNum: JSON.parse(localStorage.getItem('history')).historyNum
			}
		},
		methods:{	
			
			handleOk(){
				this.match();
				this.historyNum = this.num;
				this.historyCorNum = this.correctNum;
				let history = {
					historyNum: this.historyNum+1,
					historyCorNum: this.historyCorNum,
				}
				localStorage.setItem('history',JSON.stringify(history));
				this.cardMessage();
				this.visible = false;
				this.num = 0;
				this.correctNum = 0;
				this.englishWord = this.englishItem[0].english;
				this.chineseWord = '';
			},

			//答题提示
			cardMessage(){
				this.historyNum++;
				message.success({
					content: () => '本次答对' + this.historyCorNum + '个，总答题个数' + this.historyNum + '个' ,
					class: 'custom-class',
					style: {
						marginTop: '25vh',
					},
					duration: 1
				});
			},

			//取消/清空
			handleCancel(){
				this.visible = false;
				this.num = 0;
				this.correctNum = 0;
				this.englishWord = this.englishItem[0].english;
				this.chineseWord = '';
			},

			//匹配单词
			match(){
				let chi = this.chineseWord;
				let chin = this.englishItem[this.num].chinese;
				if(chi == chin){
					this.correctNum++;
				}
				this.englishWord = this.englishWord + '[' + chin + ']';
			},

			showModal(){
				this.visible = true;
			},

			//下一个单词
			nextCard(){
				if(this.num == this.englishItem.length-1){
					this.handleOk();
					return;
				}else if(this.chineseWord){
					this.match();
					this.num++;
					this.chineseWord = '';	
					setTimeout(()=>{
						this.englishWord = this.englishItem[this.num].english;
					},1000)
				}
			},
		},
		setup(){
			const englishItem = JSON.parse(localStorage.getItem('englishItem'));
			const total = englishItem.length;
			let collected = 0;
			englishItem.forEach(item => {
				if(item.collection){
					collected = collected + 1;
				}
			})
			return{
				total,
				collected
			}
		}
	}
</script>

<template>
	<div>
		<a-row :gutter="16">
			<a-col :span="12">
				<a-card>
					<div>
						<a-statistic style="margin-right: 50px;display: inline-block;width: 200px;" title="Total Cards" :value="total" />
						<a-statistic style="display: inline;width: 150px;float: right;" title="Collected Cards" :value="collected" />						
					</div>
					<div>
						<a-button style="margin-right: 50px;display: inline;height: 40px;margin-top: 35px;" type="primary" @click="showModal">Reciting Words</a-button>
						<a-statistic style="display: inline-block;width: 150px;float: right;margin-top: 20px;" title="历史正确率" :value="historyCorNum" class="demo-class">
							<template #suffix>
							<span>/ {{ historyNum }}</span>
							</template>
						</a-statistic>						
					</div>

				</a-card>
			</a-col>
		</a-row>
	</div>

	<a-modal style="text-align: center;" width="500px" v-model:visible="visible" title="Reciting" :maskClosable="maskClosable" @cancel="handleCancel" @ok="handleOk" okText="End">
		<h1>{{ englishWord }}</h1>
		<a-input @pressEnter="nextCard" style="width: 100px;" v-model:value="chineseWord" placeholder="请输入中文" />
		<br>
		<a-button style="margin-top: 20px;" type="dashed" @click="nextCard">Next</a-button>
    </a-modal>
</template>

<style scoped>
	
</style>