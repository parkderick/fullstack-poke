import React from 'react';
import PokeList from './PokeList.jsx';

class PokeTypeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'Grass'
    }
  }

  createOptions(object) {
    var options = [];
    for (var key in object) {
      options.push(<option key={key}>{key}</option>)
    }
    return options;
  }


  render() {
    return (
      <div>
        <select onChange={(e) => this.setState({ selected: e.target.value })}>
          {this.createOptions(this.props.types)}
        </select>
        <PokeList types={Object.keys(this.props.types)} pokemon={this.props.types[this.state.selected]} showType={false} />
      </div>
    )
  }
}




export default PokeTypeList;