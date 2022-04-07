import React, {useEffect, useState} from "react";
import './style.css';
import axios from "axios";
import TodoList from "./TodoList";
import AddList from "./AddList";
import { Context } from "./Context.js";

function App() {
  
  const [todos, setTodos] = useState()
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=>{
    axios.get(`https://624c0ef871e21eebbcf97463.mockapi.io/todos`)
    .then(res => {
      if(!res.statisText ==="OK"){
        throw Error('could not fetch the data')
      }
      setTodos(res.data);
      setIsPending(false);
      setError(null)
    })
    .catch(err => {
      setIsPending(false);
      setError(err.message);
    })
  },[]) ;

  return (
    <div className="App">
       <Context.Provider value={[todos, setTodos]}>
      <AddList/>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div> }
     { todos && <TodoList /> }
      </Context.Provider>
    </div>
  );
}

export default App;
