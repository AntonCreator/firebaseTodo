import React, { useContext } from "react";
import {TransitionGroup, CSSTransition} from "react-transition-group"

import { AlertContext } from "../context/alert/alertContext";
import { FirebaseContext } from "../context/firebase/firebaseContext";

const List = ({todos}) => {

  const {removeTodo} = useContext(FirebaseContext)
  const {show} = useContext(AlertContext)

  const handleDelete = (id) => {
    removeTodo(id)
    show("Note deleted", "warning")
  }

  return (
    
    <div > 
      <TransitionGroup component = "ul" className ="list-group">
        {todos.map(todo => 
        <CSSTransition key = {todo.id}
                       classNames = {"todo"}
                       timeout = {800}>
        <li key = {todo.id} className="list-group-item todo">
          <div>
            {todo.title}
            <small> {todo.date}</small>
          </div>
          <button onClick = {() => handleDelete(todo.id)} className = "btn btn-outline-danger btn-sm">
            <i className="fa fa-trash" aria-hidden="true"></i>
          </button>
        </li>
        </CSSTransition>
    )}
        
      </TransitionGroup>
      
    </div>
    
  )
}

export default List