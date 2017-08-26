import React, { Component } from 'react';
import { getPosts } from '../services/posts';
import PropTypes from 'prop-types';
import Post from './Post';
import { connect } from 'react-redux';

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      filter: props.filter
    }

    this.filterTimeout = undefined;
  }

  componentWillReceiveProps(nextProps) {
    clearTimeout(this.filterTimeout);
    this.filterTimeout = setTimeout(() => {
      this.setState({ filter: nextProps.filter });
    }, 1000)
  }

  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    const { posts, loading } = this.props;
    const { filter } = this.state;

    const filteredPosts = posts && posts.reduce((acc, post) => {
      const { title, body } = post;
      if (title.includes(filter) || body.includes(filter)) {
        acc.push(
          <Post key={post.id} post={post} />
        )
      }
      return acc;
    }, [])

    return (
      <div className="posts">
        {loading ? 'Loading...' : 'Loaded!!!'}
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
  const { posts, searchVal, loading } = state.blog;
  return {
    filter: searchVal,
    posts,
    loading
  }
};

const mapDispatchToProps = {
  getPosts
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);