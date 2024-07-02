/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"


export const SimpleForm = () => {

    const [FormState, setfFormState] = useState({
        username:'goku',
        email:'goku@gmail.com'
    })

    const {username, email} = FormState;

    const onInputChange = ({target})=>{
        const {name, value} = target;
        setfFormState({
            ...FormState,
            [name]:value
        })
    }

    useEffect(()=>{
        console.log('useEffect called')
    })

  return (
    <>
        <h1> Simple form </h1>
        <hr/>
        <input
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
            value={username}
            onChange={onInputChange}
        />

        
        <input
            type="email"
            className="form-control mt-2"
            placeholder="petter0915@gmail.com"
            name="email"
            value={email}
            onChange={onInputChange}
        />
    </>
  )
}
