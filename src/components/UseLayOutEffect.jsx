// useLayoutEffect is eerder dan iets anders

import { useLayoutEffect, useEffect } from "react"

export const UseLayOutEffect = () => {
    useLayoutEffect(() => {
        console.log("UseLayoutEffect")
    }, [])

    useEffect(() => {
        console.log("UseEffect")
    }, [])
    
    return (
        <>
    
    </>
    );
}
 
