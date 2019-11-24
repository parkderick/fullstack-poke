import React from 'react';

const PokeList = ({pokemon}) => (
  <div>
    {pokemon.map((poke, index) => (
      <div key={index}>
        <img src={poke.image_url}/>
        <h3>{poke.name}</h3>
        <p>{poke.moves}</p>
      </div>
    ))}
  </div>
)

export default PokeList;