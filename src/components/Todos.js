import React from 'react'
import { connect } from 'react-redux'
import List from './List'
import {
  handleAddTodo,
  handleDeleteTodo,
  handleToggleItem,
} from '../actions/todos'

class Todos extends React.Component{

  addItem = (e) => {
      e.preventDefault()
      this.props.dispatch(handleAddTodo(this.input.value, () => this.input.value = ''))
  }

  removeItem = (todo) => {
      this.props.dispatch(handleDeleteTodo(todo))
  }

  toggleItem= (id) => {
      this.props.dispatch(handleToggleItem(id))
  }

  render(){
      return(
          <div>
              <h1>TO DO LIST</h1>
              <List
                  items={this.props.todos}
                  remove={this.removeItem}
                  toggle={this.toggleItem}
              />
              <input
                  type='text'
                  placeholder='Task'
                  ref={(input) => this.input = input}
              />
              <button onClick={this.addItem}> Add Task</button>
          </div>
      )
  }
}

export default connect((store) => ({
  todos: store.todos
}))(Todos)