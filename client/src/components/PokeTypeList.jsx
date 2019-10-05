import React from 'react';
import PokeList from './PokeList.jsx';

const createLists = (types) => {
  var typeLists = []
  for (var type in types) {
    typeLists.push(
      <div key={type}>
        <h2>{type}</h2>
        <PokeList pokemon={types[type]} showType={false} />
      </div>
    )
  }
  return typeLists;
}

const PokeTypeList = ({ types }) => {
  var lists = createLists(types);

  return (
    <div>
      {lists}
    </div>
  )
}

export default PokeTypeList;