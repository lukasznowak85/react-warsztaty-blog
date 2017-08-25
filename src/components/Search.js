import React, {Component} from 'react';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: 'lorem'
    }
  }

  handleChange(event) {
    const value = event.target.value;
    const newState = {text: value};

    this.setState(newState);
  }
  
  render() {
    let text = this.state.text;
    return (
      <div className="search">
        <input
          type="text"
          value={text}
          onChange={event => this.handleChange(event)}
        />
      </div>
    )
  }
}

export default Search;