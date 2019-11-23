import React from "react";
import ReactDOM from "react-dom";
import PokeList from "./components/PokeList.jsx";
import PokeTypeList from "./components/PokeTypeList.jsx";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: "id",
      idSort: [],
      typeSort: {}
    };
  }

  changeorder(order) {
    this.setState({
      show: order
    });
  }

  getPokemon() {
    axios
      .get("/api/pokemon")
      .then(({ data }) => {
        this.setState({
          idSort: data.idSort,
          typeSort: data.typeSort
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  componentDidMount() {
    this.getPokemon();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.show !== this.state.show) {
      console.log("CHANGED")
      this.getPokemon();
    }
  }

  render() {
    return (
      <div>
        <h1>Pokemon!</h1>
        <button onClick={() => this.changeorder("id")}>Show in order?</button>
        <button onClick={() => this.changeorder("type")}> Show by type?</button>
        {this.state.show === "id" && (
          <PokeList
            types={Object.keys(this.state.typeSort)}
            pokemon={this.state.idSort}
            showType={true}
          />
        )}
        {this.state.show === "type" && (
          <PokeTypeList types={this.state.typeSort} />
        )}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
