<script lang="ts">
	import { SettingOutlined, EditOutlined, EllipsisOutlined, MenuUnfoldOutlined, UserOutlined, VideoCameraOutlined, UploadOutlined, MenuFoldOutlined, StarOutlined, TagsOutlined, PlusOutlined, CodeOutlined } from '@ant-design/icons-vue';
	import { defineComponent, ref } from 'vue';
	import ReciteVue from './Recite.vue';
	import CardVue from './Card.vue';
	import {nanoid} from  'nanoid'
	export default defineComponent({
		name: 'home',
		components: {
			CardVue,
			ReciteVue,
			SettingOutlined,
			EditOutlined,
			EllipsisOutlined,
			MenuUnfoldOutlined,
			UserOutlined,
			VideoCameraOutlined,
			UploadOutlined,
			MenuFoldOutlined,
			StarOutlined,
			TagsOutlined,
			PlusOutlined,
			CodeOutlined
		},
		data(){
			return{
				visible: true,
				visible2: false,
				leftShow: 1,
				chineseWord: '',
				englishWord: '',
				comments: '',
				fresh: true,
			}
		},
		methods:{
			afterVisibleChange(){
				console.log('2222');
			},

			show(){
				this.visible = true
			},
			
			//获取左侧侧边栏的key值
			handleClick(e){
				this.leftShow = e.key.toString();
			},

			//增加卡片
			addCard(){
				this.visible2 = true;
			},

			//AddCard
			handleOk(){
				let data = JSON.parse(localStorage.getItem('englishItem') || '');
				console.log(data);
				let js = {
					chinese: this.chineseWord,
					english: this.englishWord,
					id: nanoid(),
					collection: this.leftShow == 1 ? false : true,
					note: this.comments
				}
				if(this.chineseWord && this.englishWord){
					data.unshift(js);
					console.log(data);
					localStorage.setItem('englishItem',JSON.stringify(data));		
					this.fresh = false;
					this.$nextTick(() => {
						this.fresh = true;
					})	
					this.visible2 = false;
					this.chineseWord = '';
					this.englishWord = '';
					this.comments = '';
				}
			}
		},
		setup() {
			return {
				selectedKeys: ref<string[]>(['1']),
				collapsed: ref<boolean>(false),
			};
		}
	});
</script>
<template>
	<a-layout>
		<a-layout-sider v-model:collapsed="collapsed" style="position: fixed;overflow: auto;height: 100%;">
			<div class="logo"></div>
			<a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline" fixed="left" @click="handleClick"> 
				<a-menu-item key="1">
				<tags-outlined />
				<span>Card</span>
				</a-menu-item>
				<a-menu-item key="3">
				<star-outlined />
				<span>Collection</span>
				</a-menu-item>
				<a-menu-item key="2">
				<code-outlined />
				<span>Recite</span>
				</a-menu-item>
			</a-menu>
		</a-layout-sider>
		<a-layout v-if="fresh" style="margin: 0 0 0 200px;">
			<a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
				<a-card v-if="leftShow != 2" hoverable style="width: 297px;margin: 10px 10px 10px 33px;display: inline-block;text-align: center;" title="ADD" :headStyle="{fontSize: '24px'}" @click="addCard">
					<a-card-meta style="height: 177px">
						<template #avatar>
							<plus-outlined style="font-size: 100px;margin: 36.125px 0 0 75px;"/>
						</template>
					</a-card-meta>
				</a-card>
				<ReciteVue v-if="leftShow == 2"/>
				<CardVue v-else :showColletion="leftShow"/>
				<!-- <CollectionVue v-else-if="leftShow==3"/> -->
			</a-layout-content>
		</a-layout>
  	</a-layout>

	<a-modal v-model:visible="visible2" title="Add Card" @ok="handleOk">
		<div class="ip-p"> 
			<a-input style="width: 200px;" v-model:value="chineseWord" placeholder="Input Chinese characters" allow-clear />
			<p v-if="chineseWord == ''" class="required">Required</p>
			<p v-else style="height: 22px;"></p>
		</div>
		<div class="ip-p" style="float: right;">
			<a-input style="width: 200px;" v-model:value="englishWord" placeholder="Input English Words" allow-clear />
			<p v-show="englishWord == ''" class="required">Required</p>			
		</div>
		<a-textarea v-model:value="comments" placeholder="Input comments" allow-clear />
	</a-modal>
  </template>
<style>
	.main{
		margin: 10px;
		display: inline-block;
	}
	.required{
		color: red;
	}
	.ip-p{
		display: inline-block;
		width: 200px;
	}
	/* #components-layout-demo-custom-trigger .trigger {
		font-size: 18px;
		line-height: 64px;
		padding: 0 24px;
		cursor: pointer;
		transition: color 0.3s;
	}

	#components-layout-demo-custom-trigger .trigger:hover {
		color: #1890ff;
	}

	#components-layout-demo-custom-trigger .logo {
		height: 32px;
		background: rgba(255, 255, 255, 0.3);
		margin: 16px;
	}

	.site-layout .site-layout-background {
		background: #fff;
	} */
</style>