// goede oplossing voor :to do lijst: leeg maken van het veld
import { useRef } from "react";

export const UseRef = () => {

    const inputRef = useRef(null)
    const onClick = () => {
        inputRef.current.value =""
        
    }

    return (
        <>
            <h1>hello</h1>
            <input type="text" placeholder="Ex..." ref= {inputRef} />
            <button onClick={onClick}>Chance Name</button>
    </>
    );
}
 
