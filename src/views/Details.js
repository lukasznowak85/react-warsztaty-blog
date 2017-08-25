import React, {Component} from 'react';
import {customFetch} from '../services/fetch';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Details extends Component  {
  constructor(props) {
    super(props);

    this.goTo = this.goTo.bind(this);
  }

  goTo(path) {
    this.props.history.push(path)
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
    const {post} = this.props;
    return (
      <div className="details">
        {post ? <h3>{post.title}</h3> : null}
        {post ? <p>{post.body}</p> : null}
        <br/>
        <Link to="/main">Go back to main</Link>
        <br/>
        <button onClick={() => this.goTo('/main')}>Back to main</button>  
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const {id} = ownProps.match.params;
  const {posts} = state.blog;
  return {
    post: posts && posts.find(el => el.id === parseInt(id, 10))
  }
};

export default connect(mapStateToProps)(Details);