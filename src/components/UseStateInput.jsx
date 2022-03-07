import {useState} from 'react'

export const UseStateInput = () =>{
    const [inputValue, setInputValue] = useState('hello')
    let onChange = (e) => {
        const newValue = e.target.value;
        setInputValue(newValue)
    }
    return ( 
        <>
            <input placeholder="enter something..." onChange={onChange}/>
            {inputValue}
        </>
     );
}
 
