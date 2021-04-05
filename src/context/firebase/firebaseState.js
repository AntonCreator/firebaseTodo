import React,{useReducer} from "react";
import axios from "axios";

import {FirebaseContext} from "./firebaseContext";
import {firebaseReducer} from "./firebaseReducer";
import { ADD_TODO, FETCH_TODOS, REMOVE_TODO, SHOW_LOADER } from "../types";

const url = process.env.REACT_APP_DB_URL

const FirebaseState = ({children}) => {
  
  const initialState = {
    todos : [],
    loading : false
  }

  const [state, dispatch] = useReducer(firebaseReducer, initialState)

  const showLoader = () => dispatch({ type : SHOW_LOADER})

  const fetchTodos = async () => {
    showLoader()
    const res  = await axios.get(`${url}/notes.json`)
    console.log(res.data)
    
    const payload = Object.keys(res.data).map(key => { return {...res.data[key],
                                                  id : key}})
    console.log("fetch todos", payload)
    dispatch({type: FETCH_TODOS,
              payload})
  }

  const addTodo = async ( title ) => {
    const todo = {
      title,
      date: new Date().toJSON()
    }

    const res = await axios.post(`${url}/notes.json`, todo)
    console.log( "addTodo", res.data)
    const payload = {
      ...todo,
      id: res.data.name
    }
    dispatch({type: ADD_TODO, payload})
  }

  const removeTodo = async(id) => {
    await axios.delete(`${url}/notes/${id}.json`)
    dispatch({
      type : REMOVE_TODO,
      payload : id
    })
  }

  return(
    <FirebaseContext.Provider value = {{showLoader, addTodo,
                                        fetchTodos, removeTodo,
                                        loading: state.loading, 
                                        todos: state.todos}}>
      {children}
    </FirebaseContext.Provider>
  )
}

export default FirebaseState