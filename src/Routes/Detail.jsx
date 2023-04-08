import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useThemeContext } from "../context/GlobalContext";

const Detail = () => {
  
  const { theme } = useThemeContext();
  const { id } = useParams();
  const [dentist, setDentist] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setDentist(data);
      });
  }, [id]);

  return (
    <div className={theme.color}>
      <h1>Detail Dentist id {id}</h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      {dentist && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{dentist.name}</td>
              <td>{dentist.email}</td>
              <td>{dentist.phone}</td>
              <td>{dentist.website}</td>
            </tr>
          </tbody>
        </table>
      )}
      {!dentist && <h1>Dentist Not Found</h1>}
    </div>
  );
};

export default Detail;


