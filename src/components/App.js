import React from 'react'
import { connect } from 'react-redux'
import Todos from './Todos' //connected
import Goals from './Goals' //connected
import { handleInitialData } from '../actions/shared'
class App extends React.Component{
  componentDidMount(){
      const { dispatch } = this.props

      dispatch(handleInitialData())
      // subscribe(() => this.forceUpdate()) no longer necessary tahnks to connect()
  }

  render(){
      const { loading } = this.props

      if (loading === true ){
          return <h3> loading... </h3>
      }
      return(
          <div>
              <Todos />
              <Goals />
          </div>
      )
  }
}

export default connect((store) => ({
  loading: store.loading,
}))(App)