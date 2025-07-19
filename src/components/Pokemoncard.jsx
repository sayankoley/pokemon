import { NavLink } from "react-router-dom";

export const Pokemoncard = ({cur}) => {
   return (
    <li className="pokemon-card">
      <figure>
        <img
          src={cur.sprites.other.dream_world.front_default}
          alt={cur.name}
          loading="lazy"
          className="pokemon-image"
        />
      </figure>
      <h1 className="pokemon-name">{cur.name}</h1>
      <div className="pokemon-info pokemon-highlight">
        <p>
          {cur.types.map((curType) => curType.type.name).join(", ")}
        </p>
      </div>

      <div className="grid-three-cols">
        <p className="pokemon-info">
          <span> Height:</span> {cur.height}
        </p>
        <p className="pokemon-info">
          <span> Weight:</span> {cur.weight}
        </p>
        <p className="pokemon-info">
          <span> speed:</span> {cur.stats[5].base_stat}
        </p>
      </div>

      <div className="grid-three-cols">
        <div className="pokemon-info">
          <p>{cur.base_experience}</p>
          <span> Experience:</span>
        </div>
        <div className="pokemon-info">
          <p>{cur.stats[1].base_stat}</p>
          <span>Attack:</span>
        </div>
        <div className="pokemon-info">
          <p>
            {cur.abilities
              .map((abilityInfo) => abilityInfo.ability.name)
              .slice(0, 1)
              }
          </p>
          <span> Abilities: </span>
          
        </div>
        
      </div>
      
      <NavLink to={`/${cur.name}`}><button className="btn-donate">Read More</button></NavLink>
    </li>
  );
};
