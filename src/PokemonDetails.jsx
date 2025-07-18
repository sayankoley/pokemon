import { NavLink, useParams } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from "react";

export const PokemonDetails = () => {
  const { id } = useParams();
  const [sinPoke, setSinPoke] = useState(null);

  const fetchPokemon = async () => {
    try {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      setSinPoke(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, [id]);

  if (!sinPoke) {
    return <div className="loader"></div>;
  }

  return (
    <section className="container">
         <header>
                <h1 className="tit">{sinPoke.name}</h1>
            </header>
    <section className="pokemon-container">
      <div className="pokemon-images">
        <img loading="lazy" src={sinPoke.sprites.other["official-artwork"].front_default} alt={sinPoke.name} />
      </div>
      <div className="pokemon-details">
        <h1 className="poke-name">{sinPoke.name} <span className="poke-id">#{sinPoke.id}</span></h1>

        <div className="poke-info">
          <div><strong>Base XP:</strong> <span>{sinPoke.base_experience}</span></div>
          <div><strong>Height:</strong> <span>{sinPoke.height / 10} m</span></div>
          <div><strong>Weight:</strong> <span>{sinPoke.weight / 10} kg</span></div>
          <div>
            <strong>Types:</strong>
            <span>
              {sinPoke.types.map(t => (
                <span key={t.type.name} className={`type-badge ${t.type.name}`}>{t.type.name}</span>
              ))}
            </span>
          </div>
          <div>
            <strong>Abilities:</strong>
            <span>
              {sinPoke.abilities.map(a => (
                <span key={a.ability.name} className="ability-badge">{a.ability.name}</span>
              ))}
            </span>
          </div>
        </div>
      </div>
    </section>
    <div className="tit"> <NavLink to="/"><button className="btn-donate">Back to Home</button></NavLink></div>
   
    </section>
  );
};
