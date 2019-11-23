import React from 'react';
import PokeListEntry from './PokeListEntry.jsx';

const PokeList = ({ types, pokemon, showType }) => (
  <div>
    {pokemon.map((poke, i) => (
      <PokeListEntry types={types} pokemon={poke} key={i} showType={showType}/>
    ))}
  </div>
)

export default PokeList;