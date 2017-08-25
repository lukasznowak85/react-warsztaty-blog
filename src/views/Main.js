import React, {Component} from 'react';
import {debounce} from 'lodash';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import Search from '../components/Search';
import Posts from '../components/Posts';
import Details from '../views/Details';

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
        Search: <br/><Search onSearch={debounce(this.onSearch, 300)}/>
        <br/>
        <br/>
        <Route exact strict path="/details/:id" component={Details} />
        Posts list:
        <br/><Posts filter={this.state.filter}/>
      </div>
    )
  }
}

export default Main;