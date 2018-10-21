import API from 'goals-todos-api'

export const RECEIVE_DATA = 'RECEIVE_DATA'

function initialData(todos, goals){
  return {
      type: RECEIVE_DATA,
      todos,
      goals,
  }
}

//async

export function handleInitialData(){
  return (dispatch) => {
      return Promise.all([
          API.fetchTodos(),
          API.fetchGoals()
      ]).then(([ todos, goals ])=>{
          dispatch(initialData(todos, goals))
      })
  }
}