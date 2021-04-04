import React from "react";

const List = ({todos}) => {
  return (
    
    <div className = "container"> 
      <ul className ="list-group">
        {todos.map(todo => 
        <li key = {todo.id} className="list-group-item todo">
          <div>
            {todo.title}
            
            <small> {new Date().toLocaleDateString()}</small>
          </div>
          <button className = "btn btn-outline-danger btn-sm">
            <i className="fa fa-trash" aria-hidden="true"></i>
          </button>
        </li>
    )}
        
      </ul>
      
    </div>
    
  )
}

export default List