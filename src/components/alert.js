import React from "react";

const Alert = ({alert}) => {

  if(!alert) {
    return null
  }

  return(
    <div className={`alert alert-${alert.type || "warning"} alert-dismissible `} >
  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
  <strong>Holy guacamole!</strong> {alert.text}
</div>
  )
}
export default Alert 