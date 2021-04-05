import React, { useContext } from "react";

import { FirebaseContext } from "../context/firebase/firebaseContext";

const List = ({todos}) => {

  const {removeTodo} = useContext(FirebaseContext)

  return (
    
    <div className = "container"> 
      <ul className ="list-group">
        {todos.map(todo => 
        <li key = {todo.id} className="list-group-item todo">
          <div>
            {todo.title}
            
            <small> {new Date().toLocaleDateString()}</small>
          </div>
          <button onClick = {() => removeTodo(todo.id)} className = "btn btn-outline-danger btn-sm">
            <i className="fa fa-trash" aria-hidden="true"></i>
          </button>
        </li>
    )}
        
      </ul>
      
    </div>
    
  )
}

export default List