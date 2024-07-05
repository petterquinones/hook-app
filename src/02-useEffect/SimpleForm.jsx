/* eslint-disable no-unused-vars */
/* 
- useEffect: Se recomienda crear efectos especializados y especificos por cada acción que 
queremos ejecutar un useEffect.
- 
*/
import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [FormState, setfFormState] = useState({
    username: "Sara",
    email: "goku@gmail.com",
  });

  const { username, email } = FormState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setfFormState({
      ...FormState,
      [name]: value,
    });
  };

  useEffect(() => {
   /*  console.log("useeffect called"); */
  }, []);

  useEffect(() => {
   /*  console.log("Username called"); */
  }, [username]);

  useEffect(() => {
   /*  console.log("Email change"); */
  }, [email]);

  return (
    <>
      <h1> Simple form </h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      {username === "Sara1" && <Message />}

      <input
        type="email"
        className="form-control mt-2"
        placeholder="petter0915@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
    </>
  );
};
