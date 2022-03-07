// nog niet belagrijk maar als extra info goed

import { useReducer } from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1, showText: state.showText }
        case "toggleShowText":
            return { count: state.count, showText: !state.showText }
        default:
            return state
    }
}

export const ReducerText = () =>{
    const [state,dispatch] = useReducer(reducer,{count: 0, showText:true})
    return (
        <>
            <h1>{state.count}</h1>
            <button
                onClick={() => {
                    dispatch({type: "INCREMENT" })
                    dispatch({type: "toggleShowText"})
                }}
            >
                Click me
            </button>
            {state.showText && <p>this is a text</p>}
        </>
    );
}
