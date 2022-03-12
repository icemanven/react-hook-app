import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const hadleInputChange = ({target}) => {
      setValues({
          ...values,
          [target.name]: target.value
      });
  };

  const resetForm = (iniData = initialState) => {
    setValues(iniData);
  }

  return [values, hadleInputChange, resetForm];

}
