import React from "react";
import Card from "../Components/Card";
import { useThemeContext } from "../context/GlobalContext";

const Favs = () => {
  const { theme } = useThemeContext();
  const favs = JSON.parse(localStorage.getItem("favorites")) || [];

  return (
    <div className={theme.color}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favs.length ? (
          favs.map((fav) => (
            <Card
              key={fav.id}
              name={fav.name}
              username={fav.username}
              id={fav.id}
            />
          ))
        ) : (
          <p>No hay favoritos</p>
        )}
      </div>
    </div>
  );
};

export default Favs;
