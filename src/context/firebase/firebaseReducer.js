import {SHOW_LOADER, FETCH_TODOS, ADD_TODO, REMOVE_TODO} from "../types";

export const firebaseReducer = (state, {type, payload}) => {
  switch (type) {
    case SHOW_LOADER :
      return ({...state, loading: true})
    case ADD_TODO :
      return ({...state,
                  todos: [...state.todos, payload]})
    case FETCH_TODOS :
      return ({...state, 
                  todos : payload})
    case REMOVE_TODO : 
      return ({...state, 
                  todos : state.todos.filter(todo => todo.id !== payload)})
    default: return state
  }
}