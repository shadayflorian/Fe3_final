import React from 'react'
import {Link } from 'react-router-dom'
//import { useContext } from 'react';
import {  useThemeContext } from "../context/GlobalContext";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { theme, dispatchTheme } = useThemeContext();
 

  const handleTheme = () => {
    dispatchTheme({ type: theme.color === "light" ? "SET_DARK" : "SET_LIGHT" });
    document.body.classList.toggle('dark-theme');
  };
  

  return (
    <nav>
       <h2>DH Odonto</h2>
      <div className='navegacion'>
        {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
        <Link to='/'><h3>Home</h3></Link>
        <Link to='/contact'><h3>contact</h3></Link>
        <Link to='/favorites'><h3>fav</h3></Link>
        {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
        <button onClick={handleTheme} className='button-toggle'>🌙</button>
      </div>
    </nav>
  )
}

export default Navbar