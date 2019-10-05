import React from 'react';

const PokeListEntry = ({ pokemon, showType }) => (
  <div>
    <img src={pokemon.image_url} />
    <h3>{pokemon.name}</h3>
    {showType && <p>{pokemon.type}</p>}
  </div>
)

export default PokeListEntry