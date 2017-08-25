import React, {Component} from 'react';
import {customFetch} from '../services/fetch';
import Post from './Post';

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    customFetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((postsData) => this.setState({posts: postsData}))
  }

  render() {
    const {posts} = this.state;
    const {filter} = this.props;

    return (
      <div className="posts">
        Filter: {filter}
        {posts
          .filter(post => {
            return post.title.indexOf(filter) !== -1 || post.body.indexOf(filter) !== -1;
          })
          .map(post => <Post key={post.id} post={post}/>)}
      </div>
    )
  }
}

export default Posts;