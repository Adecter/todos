import React,{useContext} from 'react';
import TodoDetails from './TodoDetails';
import { Context } from "./Context";

export default React.memo(function TodoList() {
  const [todos, setTodos] = useContext(Context);
  
  return (
       <ul className='todos'>
        {todos && todos.map(todo => <li className='todos__item' key={todo.id+todo.name}><TodoDetails id={todo.id} name={todo.name} date={todo.createdAt} done={todo.done} /></li>)}
      </ul>
  )

});

  
