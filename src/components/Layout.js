import React from "react";
import {Link} from "react-router-dom";

const Layout = ({children}) => {
  return (
    <div> 
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar-responsive"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar-responsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to = "/"><p className = "text-yellow">Home</p></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to = "./about"><p className = "text-yellow">About</p></Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div className = "container pt-5">
      {children}
    </div>
    </div>

  )
}

export default Layout