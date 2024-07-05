/* eslint-disable no-unused-vars */
import { useState } from "react";

export const useForm = (initialForm = {}) => {
    
  const [formState, setfFormState] = useState(initialForm);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setfFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = ()=>{
    setfFormState(initialForm)
  }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
  }
}
