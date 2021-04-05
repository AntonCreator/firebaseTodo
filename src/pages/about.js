import React from "react";
import Layout from "../components/Layout"

const About = () => {
  return (
    <Layout>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Firebase todo 🔥 </h1>
             <p className="lead">This is awesome and simple application, that use React Hoocks and Firebase realtime Database. Version 1.0.48</p>
        </div>
      </div>
    </Layout>

  )
}

export default About