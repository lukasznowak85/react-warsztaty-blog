import React, {Component} from 'react';
import Search from '../components/Search';
import Posts from '../components/Posts';

class Main extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      filter: ''
    };

    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(value) {
    this.setState({filter: value});
  }

  render() {
    return (
      <div className="main">
        Search: <br/><Search onSearch={this.onSearch}/>
        <br/>
        <br/>
        Posts list:
        <br/><Posts filter={this.state.filter}/>
      </div>
    )
  }
}

export default Main;