import { createContext, useState } from "react";

export const OdontologosContext = createContext();

export const OdontologosProvider = ({ children }) => {
  const [odontologos, setOdontologos] = useState([]);
  const [favoritos, setFavoritos] = useState([]);

  const addFavorito = (odontologo) => {
    setFavoritos((prevFavoritos) => [...prevFavoritos, odontologo]);
  };

  const value = {
    odontologos,
    setOdontologos,
    favoritos,
    addFavorito,
  };

  return (
    <OdontologosContext.Provider value={value}>
      {children}
    </OdontologosContext.Provider>
  );
};
