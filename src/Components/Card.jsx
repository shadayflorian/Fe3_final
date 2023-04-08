import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Card = ({ name, username, id }) => {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    const isFav = favs.find((fav) => fav.id === id) ? true : false;
    setIsFav(isFav);
  }, []);

  const addFav = () => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    const isFav = favs.find((fav) => fav.id === id) ? true : false;

    if (isFav) {
      const newFavs = favs.filter((fav) => fav.id !== id);
      localStorage.setItem("favorites", JSON.stringify(newFavs));
    } else {
      localStorage.setItem(
        "favorites",
        JSON.stringify([...favs, { name, username, id }])
      );
    }

    setIsFav(!isFav);
  };

  return (
    <div className="card">
      <Link to={`/detail/${id}`}>
        <img src="./images/doctor.jpg" alt={username} className="img" />
        <h4>{name}</h4>
        <p>{username}</p>
      </Link>
      <button onClick={addFav} className="favButton">
        <span className={`material-symbols-rounded ${isFav ? "favorite" : ""}`}>
          favorite 🌟
        </span>
      </button>
    </div>
  );
};

export default Card;
