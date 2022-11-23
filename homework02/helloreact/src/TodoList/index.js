import React from 'react'
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
			<li key={item.id}>{item.text}</li>
			))}
		</ul>
		);
  	}
}