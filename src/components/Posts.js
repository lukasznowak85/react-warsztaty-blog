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
    this.setState({loading: true})

    customFetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((postsData) => {
        this.setState({posts: postsData})
        this.setState({loading: false})
      })
  }

  render() {
    const {posts, loading} = this.state;
    const {filter} = this.props;

    const filteredPosts = posts.reduce((acc, post) => {
      const {id, title, body} = post;
      if (title.includes(filter) || body.includes(filter)) {
        acc.push(
          <Post key={post.id} post={post}/>
        )
      }
      return acc;
    }, [])

    return (
      <div className="posts">
        {loading ? 'Loading...' : 'Loaded!!!' }
        {filteredPosts}
        {/* {posts
          .filter(post => {
            return post.title.includes(filter) || post.body.includes(filter);
          })
          .map(post => <Post key={post.id} post={post}/>)} */}
      </div>
    )
  }
}

export default Posts;