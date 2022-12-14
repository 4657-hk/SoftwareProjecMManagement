import React from 'react';
import './index.css';
export default class TodoList extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
		  
		}
	}
  	render() {
		return (
		<ul>
			{this.props.items.map(item => (
			<li className='list-li' key={item.id}>
				<input type="checkbox" checked={item.checked} onChange={() => {this.handleChange(item.id,item.checked)}}></input>
				{item.text}
				<button onClick={() => {this.handleDelete(item.id)}}>Delete</button>	
			</li>
			))}
		</ul>
		);
  	}

	handleChange = (id,checked) => {
		console.log(this.props);
		this.props.handleChanged(id,checked);
	}

	handleDelete = (id) => {
		this.props.deleteTodo(id);
	}
}