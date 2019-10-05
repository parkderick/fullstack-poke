import React from 'react';
import PokeListEntry from './PokeListEntry.jsx';

const PokeList = ({ pokemon, showType }) => (
  <div>
    {pokemon.map((poke, i) => (
      <PokeListEntry pokemon={poke} key={i} showType={showType}/>
    ))}
  </div>
)

export default PokeList;