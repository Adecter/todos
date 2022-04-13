import axios from 'axios';


export default function DataFetch() {

        return axios.get('https://624c0ef871e21eebbcf97463.mockapi.io/todos')
        .then(res => { 
                return(res.data);
      }).catch(error => {
        return(Error(error));
     })
}
