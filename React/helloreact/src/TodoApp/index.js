import React from 'react'
import TodoList from '../TodoList';
import './index.css';
export default class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
      text: '',
      checkedAll: false,
    }
  }
  render() {
    return (
      <div className="App-main">
        <h3>TODO</h3>
        <TodoList items={this.state.items} deleteTodo={this.deleteTodo} handleChanged={this.handleChanged}/>
        <input className='ip1' type="checkbox" defaultChecked={this.state.checkedAll} onChange={() => this.AllTodo()}></input>全部完成
          <button onClick={() => this.deleteChecked()} className='add'>
            删除已完成
          </button>
        <form className='form' onSubmit={this.handleSubmit}>
          <br/>
          <label htmlFor="new-todo">
            What needs to be done?
          </label>
          <br />
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button className='add'>
            Add #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    );
  }

  //修改单个TODO的checked
  handleChanged = (id,checked) => {
    this.setState(state => ({
      items: state.items.map((todo) => {
        if (todo.id === id) return {...todo, checked:!checked}
        else return todo
      })
    }));
  }

  //删除已完成
  deleteChecked = () => {
    this.setState(state => ({
      items: state.items.filter((item) => {
        return item.checked !== true
      })
    }));
  }

  //完成全部
  AllTodo = () => {
    let checked = !this.state.checkedAll;
    console.log(checked);
    this.setState(state => ({
      items: state.items.map((item) => {
        return {...item,checked:checked}
      }),
      checkedAll: checked
    }));
  }


  //删除选项
  deleteTodo = (id) => {
    this.setState(state => ({
      items: state.items.filter((item) => {
        return item.id !== id
      })
    }));
  }

  //input框输入变化
  handleChange = (e) => {
    this.setState({ text: e.target.value.trim() });
  }

  //按钮事件
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now(),
      checked: false
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: '',
    }));
  }
}