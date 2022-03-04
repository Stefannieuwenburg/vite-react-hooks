import {useState} from 'react'

export const StateCounter = () => {
    const [counter,setCounter] = useState(0)
    const increment = () => {
        setCounter(counter+1)
    }
    return (
        <div>
        {counter}
        <button onClick={increment}>Increment</button>
    </div>
    )    
};
