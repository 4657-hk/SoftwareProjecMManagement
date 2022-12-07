<script>	
export default{
	name: 'TodoList',
	props:[
		'todos',
		'checkTodo',
		'deleteItem',
	]
}
</script>

<template>
	<div>
		<ul>
			<h3 v-if="!todos.length?true:false">暂无ToDo</h3>
			<li v-for="todoObj in todos" :class='todoObj.checked? "list-lidone":"list-li"' :key="todoObj.id">
				<input style="float: left;margin-top: 5px;" type="checkbox" :checked="todoObj.checked" @change="checkTodo(todoObj.id)"/>
				{{todoObj.text}}
				<button @click="deleteItem(todoObj.id)">
					Delete
				</button>
			</li>
		</ul>
	</div>
</template>

<style scoped>
	.list-li {
		border: 1px rgb(240, 131, 7) solid;
		margin-top: 1px;
	}

	.list-lidone {
		border: 1px rgb(240, 131, 7) solid;
		margin-top: 1px;
		color: rgb(214, 214, 214);
		text-decoration: line-through
	}

	li button{
		float: right;
		display: none;
	}

	li:hover button{
		display: block;
	}

	li:hover {
		background-color: rgb(230, 122, 0);
	}


</style>