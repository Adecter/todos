import {useState, useContext ,useEffect} from 'react'
import axios from 'axios';
import { Context } from "./Context";


export default function useFetch(url) {

    const [data, setData] = useState();
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    const [todos, setTodos] = useContext(Context);

    useEffect(()=>{
        axios.get(url)
        .then(res => {
            console.log(res)
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
      },[url]) ;

      return {isPending, error}
}
