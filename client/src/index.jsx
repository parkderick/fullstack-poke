import React from 'react';
import ReactDOM from 'react-dom';
import PokeList from './components/PokeList.jsx';
import PokeTypeList from './components/PokeTypeList.jsx';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: 'id'
    }
  }

  changeorder(order) {
    this.setState({
      show: order
    })
  }

  render() {
    return (
      <div>
        <h1>Pokemon!</h1>
        <button onClick={() => this.changeorder('id')}>Show in order?</button>
        <button onClick={() => this.changeorder('type')}> Show by type?</button>
        {this.state.show === 'id' &&
          <PokeList />}
        {this.state.show === 'type' &&
          <PokeTypeList />}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"))



