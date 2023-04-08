import React from "react";
import  { useState } from 'react';

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Validar el nombre
      if (name.length < 5) {
        setErrorMsg('Por favor, introduce un nombre válido');
        return;
      }
  
      // Validar el correo electrónico
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.match(emailPattern)) {
        setErrorMsg('Por favor, introduce un correo electrónico válido');
        return;
      }
  
      //  mostrar el mensaje de éxito
      setSuccessMsg(`Gracias ${name}, te contactaremos cuanto antes vía mail`);
      setName('');
      setEmail('');
      setErrorMsg('');
    };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nombre completo:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="email">Correo electrónico:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      {errorMsg && <p>{errorMsg}</p>}

      {successMsg && <p>{successMsg}</p>}

      <button type="submit" className="button-enviar">Enviar</button>
    </form>
  );
};

export default Form;
