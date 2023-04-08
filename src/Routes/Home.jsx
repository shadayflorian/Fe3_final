

import React, { useEffect } from "react";
import Card from "../Components/Card";
import { useThemeContext } from "../context/GlobalContext";


const Home = () => {
  const { theme , dentists, setDentists } = useThemeContext();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then((data) => {
      setDentists(data);
    });
  }, []);

  return (
    <main className={theme.color} >
      <h1>Home</h1>
      <div className='card-grid'>

        {dentists.map((dentist) => (
          <Card
            key={dentist.id}
            name={dentist.name}
            username={dentist.username}
            id={dentist.id}
          />
        ))}
      </div>
    </main>
  )
};

export default Home;









 
