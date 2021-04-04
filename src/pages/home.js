import React from "react";

import Layout from "../components/Layout";
import List from "../components/list";
import Alert from "../components/alert";
import Form from "../components/form";

const Home = () => {

  const todos = new Array(3).fill("").map((_, i) => ({id: i, title: `Task ${i + 1}`}))

  return (
    <Layout>
      <Alert/>
     
      <div>
        <h2>Task list</h2> 
        <Form />
        <hr/>
        <List todos = {todos}></List>
      </div>
    </Layout>
  )
}

export default Home