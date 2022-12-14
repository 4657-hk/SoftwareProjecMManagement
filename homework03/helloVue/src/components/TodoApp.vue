<script>
import TodoList from './TodoList.vue';
import {nanoid} from  'nanoid'
export default{
	name: 'TodoApp',
	data() {
		return{
			items: [
				{
					text: "one",
					id: "001",
					checked: true
				},
				{
					text: "two",
					id: "002",
					checked: false
				}
				
			],		
			title: '',
			checkedAll: false,		
		}
	},
	components: {
		TodoList,
	},
	computed: {
		checkedCount(){
			return this.items.reduce((pre, current) => {
				return pre + (current.checked ? 1 : 0)
			},0);
		},

		checkAll: {
			get(){
				return this.checkedCount === this.items.length && this.items.length > 0
			},
			set(val){
				this.AllTodo(val)
			}
		}
	},
	methods: {
			//更改item的checked
			checkTodo(id){
				this.items.forEach(element => {
					if(id == element.id){
						element.checked = !element.checked
					}
				});
			},

			//删除item
			deletetTodo(id){
				this.items = this.items.filter(item=>{
					return item.id !== id
				})
			},

			//增加item
			addTodo(){
				if(!this.title.trim()){
					return alert('输入不能为空');
				}else{
					let item = {}
					item.id = nanoid();
					item.text = this.title;
					item.checked = false;
					this.items.push(item);
				}
				this.title = ''
			},

			//删除已完成
			deleteChecked(){
				this.items = this.items.filter(item=>{
					return item.checked !== true
				})
			},

			//完成全部
			AllTodo(val){
				// let checked = !this.checkedAll;
				// this.items.forEach(element => {
				// 	element.checked = checked
				// });
				// this.checkedAll = checked;
				console.log('111');
				this.items.forEach(element => {
					element.checked = val
				});
			},
		},
}
</script>

<template>
	<div class="App-main">
		<h3>TODO</h3>
		<TodoList :todos="items" :checkTodo="checkTodo" :deleteItem="deletetTodo"/>
		<div v-if="!items.length?false:true">
			<!-- <input class='ip1' type="checkbox" :checked="checkedAll" @change="AllTodo"/>全部完成 {{checkedCount}} / 总数{{items.length}} -->
			<input class='ip1' type="checkbox" v-model="checkAll"/>完成 {{checkedCount}} / 总数 {{items.length}}
			<button style="float: right;" @click="deleteChecked">
				删除已完成
			</button>
			<br><br>
		</div>
		<label>
			What needs to be done?
		</label>
		<br />
		<input
		id="new-todo"
		v-model = "title"
		@keyup.enter="addTodo"
		/>
		<button class='add' @click="addTodo">
			Add #{{this.items.length + 1}}
		</button>
	</div>
</template>

<style scoped>
	.App-main {
		padding: 10px;
		border: solid 1px silver;
		width: 300px;
		margin: 10% 20%;
	}

	.add {
		float: right;
	}

	.ip1 {
		margin-left: 45px;
	}
</style>