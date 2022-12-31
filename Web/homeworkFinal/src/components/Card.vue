<script>
	import { EditOutlined, EllipsisOutlined, StarOutlined, StarTwoTone, DeleteOutlined  } from '@ant-design/icons-vue';
	import { defineComponent } from 'vue';

	export default{
		
		name: 'card',
		props:[ 
			'showColletion'
		],
		components:{
			EditOutlined,
			EllipsisOutlined,
			StarOutlined,
			StarTwoTone,
			DeleteOutlined,
		},
		setup() {
			const confirm = (item) => {
				console.log(item);
			};

			const cancel = (e) => {
				console.log(e);
			};
			return {
				confirm,
				cancel,
			};
		},
		data(){
			return{
				englishItem: JSON.parse(localStorage.getItem('englishItem')) || [],
				visible: false,
				modal: '修改',
				chinese: '',
				english: '',
				id: '',
				note: '',
				itemCopy: {},
			}
		},
		methods:{
			//修改
			edit(item){
				console.log(item);
				this.itemCopy = item;
				this.visible = true
				this.modal = 'Add Comments'
				this.chinese = item.chinese;
				this.english = item.english;
				this.note = item.note;
			},

			//删除
			deleteItem(items){
				this.englishItem = this.englishItem.filter(item=>{
					return item.id !== items.id
				})
			},

			//展示弹窗
			showModal(){
				this.visible = true
			},

			//弹窗OK
			handleOk(){
				this.itemCopy.note = this.note;
				this.visible = false
			},

			//取消收藏
			cancelStar(item){
				item.collection = false;
			},

			//收藏
			star(item){
				item.collection = true;
			}
		},
		watch:{
			englishItem:{
				deep: true,
				handler(val){
					localStorage.setItem('englishItem', JSON.stringify(val));
				}
			}
		}
	}
</script>

<template>
	<div class="main" v-for="item in englishItem" v-show="showColletion == 3 ? item.collection == true : item.id">
		<a-card hoverable style="width: 297px;margin-left: 23px;" :title="item.chinese + '[' + item.english + ']'" :headStyle="{fontSize: '24px'}">

			<template style="background-color: aqua;" #actions>
				<edit-outlined title="添加备注" key="edit"  @click="edit(item)"/>
				<a-popconfirm
					v-if="item.collection == true"
					title="Are you sure you want to cancel the collection?"
					ok-text="Yes"
					cancel-text="No"
					@confirm="cancelStar(item)"
					@cancel="cancel"
				>
					<star-two-tone title="取消收藏" two-tone-color="gold"/>
				</a-popconfirm>
				<star-two-tone title="收藏" v-else two-tone-color="#8C8C8C" @click="star(item)"/>
				<delete-outlined key="delete" @click="deleteItem(item)"/>
			</template>     

			<a-card-meta style="height: 130px;">
				<template #avatar>
					<div>
						<p style="word-break:break-all;word-wrap: break-word;">
							{{ item.note }}
						</p>
					</div>
				</template>
			</a-card-meta>
		</a-card>		
	</div>  
	<div>
		<a-modal v-model:visible="visible" :title="modal" @ok="handleOk(item)">
			<a-input-group compact>
				<a-textarea v-model:value="note" :rows="4" />
			</a-input-group>
		</a-modal>
  	</div>
</template>

<style>
	.main{
		margin: 10px;
		display: inline-block;
	}
</style>