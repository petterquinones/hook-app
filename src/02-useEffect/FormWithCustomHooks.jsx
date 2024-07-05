/* eslint-disable no-unused-vars */


import { useForm } from "../Hooks/useForm";

export const FormWithCustomHooks = () => {

  const {formState, onInputChange, username, email, password, onResetForm} = useForm({
    username: "",
    email: "",
    password:""
  });

  

  return (
    <>
      <h1> Formulario con custom hooks</h1>
      <hr />
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
        className="form-control mt-4"
        placeholder="E-mail"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      <input
        type="password"
        className="form-control mt-4"
        placeholder="contraseña"
        name="password"
        value={password}
        onChange={onInputChange}
      />

      <button onClick={onResetForm} className="btn btn-primary mt-4"> Reset </button>
    </>
  );
};





/* 
- useEffect: Se recomienda crear efectos especializados y especificos por cada acción que 
queremos ejecutar un useEffect.

- const {username, email, password} = formState;
*/