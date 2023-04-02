import React, { useState, useEffect } from "react"
import axios from "axios";
import styles from "./character.module.css";
import {Link} from 'react-router-dom'

function Char() {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((response) => {
        setCharacters(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Galeria de personagens</h1>
      <Link to="/"><button className={styles.button}>Voltar para tela principal</button></Link>
      <div>
        <input
          type="text"
          className={styles.search}
          value={searchTerm}
          onChange={handleSearch}
        />
        <button className={styles.button}>Buscar</button>{" "}
      </div>
      {filteredCharacters.map((character) => (
        <div className={styles.card} key={character.id}>
          <div>
            <img
              className={styles.avatar}
              src={character.image}
              alt={character.name}
            />
          </div>
          <div>
            <h2 className={styles.name}>{character.name}</h2>
            <p className={styles.status}>Status: {character.status}</p>
            <p className={styles.species}>Espécie: {character.species}</p>
            <p className={styles.type}>Tipo: {character.type}</p>
            <p className={styles.gender}>Gênero: {character.gender}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Char;