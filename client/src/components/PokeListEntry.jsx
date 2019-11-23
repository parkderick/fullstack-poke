import React from "react";
import Axios from "axios";

class PokeListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      select: false
    };
  }

  render() {
    return (
      <div>
        <img src={this.props.pokemon.image_url} />
        <h3>{this.props.pokemon.name}</h3>
        {this.props.showType ? (
          this.state.select ? (
            <select
              defaultValue={this.props.pokemon.type}
              onChange={e => {
                this.props.pokemon.type = e.target.value;
                this.setState({ select: false });
              }}
            >
              {this.props.types.map((type, i) => (
                <option key={i}>{type}</option>
              ))}
            </select>
          ) : (
            <p
              style={{ display: "inline-block", width: "auto" }}
              onClick={() => this.setState({ select: true })}
            >
              {this.props.pokemon.type}
            </p>
          )
        ) : null}
      </div>
    );
  }
}
export default PokeListEntry;
