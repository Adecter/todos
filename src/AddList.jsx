import React from 'react'
import axios from 'axios';
import { useState,useContext } from 'react';
import { Context } from "./Context";
import  dataFetch from './dataFetch';

export default function AddList() {
    const [name,setName] = useState()
    const [todos , setTodos] = useContext(Context);
    const handleChange = event => {
        setName(event.target.value);
      }
    
    const  handleSubmit = event => {
        event.preventDefault();
        axios.post(`https://624c0ef871e21eebbcf97463.mockapi.io/todos`,  {name: name, done: false} )
        .then(()=>{
          dataFetch().then((data)=>{
            setTodos(data)
          })
          
      
        })
      }
  return (
       <div>
        <form onSubmit={handleSubmit } className="todosForm">
          <label className='todosForm__label'>
            Todo Name:
            <input className='todosForm__input' type="text" required name="name" onChange={handleChange} />
          </label>
          <button className='todosForm__button' type="submit">Add</button>
        </form>
      </div>
  )
}
