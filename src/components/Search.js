import React, {Component} from 'react';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const value = event.target.value;
    const newState = {text: value};

    this.setState(newState);
    this.props.onSearch(value);
  }
  
  render() {
    let text = this.state.text;
    return (
      <div className="search">
        <input
          type="text"
          value={text}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

export default Search;