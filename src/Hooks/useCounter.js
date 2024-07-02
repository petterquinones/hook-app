/* eslint-disable no-unused-vars */

import { useState } from "react"


export const useCounter = (initialValue = 10)=>{

    const [counter, setCounter] = useState(initialValue)
    
    const incremet = (value)=>{
        setCounter(counter + value)
    }

    const decrement = (value)=>{
        if(counter === 0 )return
        setCounter(counter - value)
    }

    const reset = ()=>{
        setCounter(initialValue)
    }


    return {
        counter, 
        incremet,
        decrement,
        reset
    }
}