import React, {useState, useContext} from "react";
import { AlertContext } from "../context/alert/alertContext";
import { FirebaseContext } from "../context/firebase/firebaseContext";

const Form = () => {

  const [inputValue, setInputValue] = useState("")
  const alert = useContext(AlertContext)
  const {addTodo} = useContext(FirebaseContext)
  
  const handleSubmit = (event) => {
    event.preventDefault()
    addTodo(inputValue)
    if(inputValue.trim()) {
      alert.show("Note created", "success")
      setInputValue("")
    } else {
      alert.show("Create note, please" , "warning")
    }

  } 

  return (
    <form onSubmit = {handleSubmit}>
      <div className = "form-group">
        <input className="form-control" type="text"
             placeholder="Write a task" 
             onChange = {(event) => setInputValue(event.target.value)}
             value = {inputValue}></input>
      </div>
    </form>
  )
}

export default Form