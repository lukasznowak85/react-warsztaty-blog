import React, {Component} from 'react';
import {customFetch} from '../services/fetch';
import PropTypes from 'prop-types';
import Post from './Post';
import {connect} from 'react-redux';
import {attachPosts, setLoading} from '../store/data/blog/actions';

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      filter: props.filter
    }

    this.filterTimeout = undefined;
  }

  componentWillReceiveProps(nextProps) {
    clearTimeout(this.filterTimeout);
    this.filterTimeout = setTimeout(() => {
      this.setState({filter: nextProps.filter});
    }, 1000)
  }

  componentDidMount() {
    this.props.setLoading(true)

    customFetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((postsData) => {
        this.props.attachPosts(postsData)
        this.props.setLoading(false)
      })
  }

  render() {
    const {posts, loading} = this.props;
    const {filter} = this.state;

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
    filter: state.blog.searchVal,
    posts: state.blog.posts,
    loading: state.blog.loading,
  }
};

const mapDispatchToProps = {
  setLoading,
  attachPosts
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);