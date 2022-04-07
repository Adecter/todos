import React from 'react';
import axios from 'axios';
import { useState,useContext } from 'react';
import { Context } from "./Context";

export default function TodoDetails({id, name, date, done}) {
  const [check, setCheck] = useState(done)
  const [todos, setTodos] = useContext(Context);

 const handleClick = () => {
    axios.delete(`https://624c0ef871e21eebbcf97463.mockapi.io/todos/${id}`)
    .then(()=>{
      axios.get(`https://624c0ef871e21eebbcf97463.mockapi.io/todos`)
      .then(res => {
          setTodos(res.data)
      })
    })

    
 }

 const handleChange = (status) => {
   
  axios.put(`https://624c0ef871e21eebbcf97463.mockapi.io/todos/${id}`,{done: !check})
  setCheck(!check)
}

  return (
    <div className={`todos__item__content ${check ? 'lineThrough': ''}`}>
        <h2 className='todos__item__content__title'>{name}</h2>
        <p className='todos__item__content__date'>{date.substr(0,10)}</p>
        <label>
        <input type="checkbox" name="checkbox" onChange={()=>handleChange(check)} defaultChecked={done} />
        </label>
        <button className='todos__item__content__delete' onClick={()=>handleClick()}>Delete</button>

    </div>
  )
}
