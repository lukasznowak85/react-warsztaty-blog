import React, {Component} from 'react';
import {customFetch} from '../services/fetch';
import {Link} from 'react-router-dom';

class Details extends Component  {
  constructor(props) {
    super(props);

    this.state = {
      post: {}
    }
  }

  componentDidMount() {
    console.log('this.state', this.props.match.params.id);
    const postId = this.props.match.params.id
    this.setState({loading: true})

    customFetch('https://jsonplaceholder.typicode.com/posts/' + postId)
      .then((res) => res.json())
      .then((postData) => {
        this.setState({post: postData})
        this.setState({loading: false})
      })
  }
  
  render() {
    const {id, title, body} = this.state.post;
    const {loading} = this.state;
    const to = "/main";
    return (
      <div className="details">
      {loading ? 'Loading' : 
        <div>
          <h3>{id}: {title}</h3>
          <p>{body}</p>
          <br/>
          <Link to={to}>Go back to main</Link>
        </div>}
      </div>
    )
  }
}

export default Details;