import React, {Component} from 'react';
import Search from '../components/Search';
import Posts from '../components/Posts';

class Main extends Component {
  render() {
    return (
      <div className="main">
        Search: <br/><Search/>
        <br/>
        Posts list:
        <br/><Posts />
      </div>
    )
  }
}

export default Main;