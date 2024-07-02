/* eslint-disable no-unused-vars */

import { useState } from "react"


export const CounterApp = () => {

    const [stateCounter, setCounter] = useState(
        {
            counter1 : 10,
            counter2 : 20,
            counter3 : 30
        }
    );

    const {counter1, counter2, counter3} = stateCounter;

    const onCounterAdd = ()=>{
        setCounter({
            ...stateCounter,
            counter1: counter1 + 1,
        })
    }
    
  return (
    <>
        <h1>Counter 1: {counter1} </h1>
        <h1>Counter 2: {counter2} </h1>
        <h1>Counter 3: {counter3} </h1>

        <hr/>

        <button onClick={ onCounterAdd }>  Increment + 1</button>

    </>
  )
}
