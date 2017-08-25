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
      .then((postsData) => {
        console.log('postsData', postsData)
        this.setState({posts: postsData})
      })
  }

  render() {
    const posts = this.state.posts;

    return (
      <div className="posts">
        {posts.map(post => <Post key={post.id} post={post}/>)}
      </div>
    )
  }
}

export default Posts;