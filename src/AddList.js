import React from 'react'
import axios from 'axios';
import { useState,useContext } from 'react';
import { Context } from "./Context";

export default function AddList() {

    const [name,setName] = useState()
    const [todos, setTodos] = useContext(Context);
    const handleChange = event => {
        setName({ name: event.target.value,
                  done:false 
                });
      }
    
    const  handleSubmit = event => {
        event.preventDefault();
        axios.post(`https://624c0ef871e21eebbcf97463.mockapi.io/todos`,  name )
        .then(()=>{
          axios.get(`https://624c0ef871e21eebbcf97463.mockapi.io/todos`)
          .then(res => {
              setTodos(res.data)
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
