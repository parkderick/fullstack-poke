import React from 'react';

const PokeTypeList = (props) => (
  <select onChange={(e) => props.getPokemonsByType(e.target.value)}>
    <option>-</option>
    <option value="Bug">Bug</option>
    <option value="Dragon">Dragon</option>
    <option value="Ice">Ice</option>
    <option value="Fighting">Fighting</option>
    <option value="Fire">Fire</option>
    <option value="Flying">Flying</option>
    <option value="Grass">Grass</option>
    <option value="Ghost">Ghost</option>
    <option value="Ground">Ground</option>
    <option value="Electric">Electric</option>
    <option value="Normal">Normal</option>
    <option value="Poison">Poison</option>
    <option value="Psychic">Psychic</option>
    <option value="Rock">Rock</option>
    <option value="Water">Water</option>
  </select>
)

export default PokeTypeList;