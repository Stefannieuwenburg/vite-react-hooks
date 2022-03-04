import {useState} from 'react'

export const StateInput = () => {
    const [inputValue,setInputValue]=useState('Pedro')
    return ( 
        <>
            <input placeholder="enter something..." />
            {inputValue}
        </>
     );
}
 
