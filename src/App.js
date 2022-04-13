import React, {useEffect, useState} from "react";
import './style.css';
import TodoList from "./TodoList";
import AddList from "./AddList";
import { Context } from "./Context.jsx";
import  dataFetch from './dataFetch';


function App() {
  
  const [todos, setTodos] = useState()

  useEffect(()=>{
    dataFetch().then((data)=>{
      setTodos(data)
    })
  },[]) ;

  return (
    <div className="App">
       <Context.Provider value={[todos, setTodos]}>
      <AddList/>
      {!todos && <div>Loading...</div> }
     { todos && <TodoList /> }
      </Context.Provider>
    </div>
  );
}

export default App;
