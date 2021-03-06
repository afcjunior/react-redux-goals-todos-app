import React from 'react'
import { connect } from 'react-redux'
import List from './List'
import {
  handleAddGoal,
  handleDeleteGoal,
} from '../actions/goals'

class Goals extends React.Component{
  addItem = (e) => {
      e.preventDefault()
      this.props.dispatch(handleAddGoal(this.input.value, () => this.input.value = '')) //receives the input and a callback fn to reset the field.
  }

  removeGoal = (goal) => {
      this.props.dispatch(handleDeleteGoal(goal))
  }

  render(){
      return(
          <div>
              <h1>GOALS LIST</h1>
              <List
                  items={this.props.goals}
                  remove={this.removeGoal}
              />
              <input
                  type='text'
                  placeholder='Goal'
                  ref={(input) => this.input = input}
              />
              <button onClick={this.addItem}> Add Goal</button>
          </div>
      )
  }
}

 export default connect((store) => ({
  goals: store.goals
}))(Goals)