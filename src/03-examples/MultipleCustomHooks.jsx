/* eslint-disable no-unused-vars */


import { useFetch } from "../Hooks"

export const MultipleCustomHooks = () => {
    
    const {data, isLoading, hasError, error}=useFetch();

  return (
    <>
        <h1>Información de Pokemon. </h1>
        <hr/>
        <pre> { JSON.stringify(data , null , 2)} </pre>

    </>
  )
} 
