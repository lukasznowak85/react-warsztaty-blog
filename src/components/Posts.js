import React, {Component} from 'react';
import {customFetch} from '../services/fetch';
import PropTypes from 'prop-types';
import Post from './Post';
import {connect} from 'react-redux';

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
      const {title, body} = post;
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

Posts.propTypes = {
  filter: PropTypes.string
};

const mapStateToProps = (state) => {
  return {
    filter: state.blog.searchVal
  }
};

export default connect(mapStateToProps)(Posts);