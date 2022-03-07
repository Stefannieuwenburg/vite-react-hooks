import {useEffect,useState} from 'react'
import axios from 'axios'

export const UseEffect = () => {
    const [data, setData] = useState("")
    
    useEffect(() => {
        axios
            .get('http://jsonplaceholder.typicode.com/comments')
            .then((response) => {
            setData(response.data[0].email);
     })
    },[])


    return ( 
        <>
            <div>Data axios: {data}</div>
        
        </>
     );
}
 
