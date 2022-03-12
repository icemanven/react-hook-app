import React, { useEffect } from "react";
import { useForm } from "../../hooks/useForm";

import "./effects.css";

export const FormWithCustomHook = () => {
  const iniData = {
    name: '',
    email: '',
    password: ''
  };
  
  const [formValues, handleInputChange, resetForm] = useForm(iniData);

  const { name, email, password } = formValues;

  useEffect(() => {
    console.log('email cambio');
  }, [email]);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formValues);
    resetForm();
  }


  return (
    <form onSubmit={handleSubmit}>
      <h1>Form With Custom Hook</h1>
      <hr />

      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="tu nombre"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="email@"
          autoComplete="on"
          value={email}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="****"
          value={password}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">Guardar</button>
    </form>
  );
};
