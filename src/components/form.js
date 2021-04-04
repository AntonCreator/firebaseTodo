import React, {useState, useContext} from "react";
import { AlertContext } from "../context/alert/alertContext";

const Form = () => {

  const [inputValue, setInputValue] = useState("")
  const alert = useContext(AlertContext)
  
  const handleSubmit = (event) => {
    event.preventDefault()

    alert.show(inputValue, "success")
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