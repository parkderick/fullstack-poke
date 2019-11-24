import React from 'react';
import ReactDOM from 'react-dom';
import PokeList from './components/PokeList.jsx';
import PokeTypeList from './components/PokeTypeList.jsx';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: 'id',
      pokemon: []
    }
    this.getPokemons = this.getPokemons.bind(this)
    this.getPokemonsByType = this.getPokemonsByType.bind(this)
    this.changeorder = this.changeorder.bind(this)
  }

  getPokemons() {
    axios.get('/api/pokemon')
      .then((response) => this.setState({
        pokemon: response.data
      }))
      .catch(err => console.log(err))
  }

  componentDidMount() {
    this.getPokemons()
  }

  changeorder(order) {
    this.setState({
      show: order
    }, () => {if (this.state.show === 'id') {
      this.getPokemons()
    }})
  }

  getPokemonsByType(moves) {
    console.log(moves)
    axios.get(`/api/pokemon/${moves}`)
      .then(response => this.setState({
        show: 'id',
        pokemon: response.data
      }))
      .catch(err => console.log(err))
  }


//   ### Step 3
// - Add a dropdown to your client that will allow you to pick an individual type to see
// - Add a route that allows you send a request to just get a pokemons type

  render() {
    return (
      <div>
        <h1>Pokemon!</h1>
        <button onClick={() => this.changeorder('id')}>Show in order?</button>
        <button onClick={() => this.changeorder('type')}> Show by type?</button>
        {this.state.show === 'id' &&
          <PokeList pokemon={this.state.pokemon}/>}
        {this.state.show === 'type' &&
          <PokeTypeList getPokemonsByType={this.getPokemonsByType}/>}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"))



