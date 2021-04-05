import React, { useContext, useEffect } from "react";

import Layout from "../components/Layout";
import List from "../components/list";
import Alert from "../components/alert";
import Form from "../components/form";
import { FirebaseContext } from "../context/firebase/firebaseContext";

const Home = () => {

  const {loading, todos, fetchTodos} = useContext(FirebaseContext)

  useEffect(() => {
    fetchTodos()
  }, [])

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