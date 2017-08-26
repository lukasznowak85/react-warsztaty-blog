import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPosts, getCommentsForPost } from '../services/posts';
import PostEditForm from '../components/PostEditForm';
import Comment from '../components/Comment';

class Details extends Component {
  constructor(props) {
    super(props);

    this.goTo = this.goTo.bind(this);
  }

  goTo(path) {
    this.props.history.push(path)
  }

  componentDidMount() {
    this.props.getPosts();
    this.props.getCommentsForPost(this.props.post.id);
  }

  onSubmit(values) {
    console.log('elo, submitted', values)
  }

  onSubmitFail(values) {
    console.log('elo, submitted fail', values)
  }

  render() {
    const { post, comments } = this.props;
    const commentsComponents = [];
    comments.forEach(comment => {
      commentsComponents.push(<Comment comment={comment} key={comment.id} />)
    });

    return (
      <div className="details">
        <PostEditForm onSubmit={this.onSubmit} onSubmitFail={this.onSubmitFail} />

        {post ? <h3>{post.title}</h3> : null}
        {post ? <p>{post.body}</p> : null}
        <br />
        <Link to="/main">Go back to main</Link>
        <br />
        <button onClick={() => this.goTo('/main')}>Back to main</button>
        <br />
        Comments section:
        {commentsComponents}
      </div>
    )
  }
};

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  const { posts } = state.blog;
  const currentPost = posts && posts.find(el => el.id === parseInt(id, 10))

  const { comments: allComments } = state.blog;
  const { comments: commentsForPost } = currentPost;
  const comments = [];
  if (commentsForPost) {
    commentsForPost.forEach(commentId => {
      return comments.push(allComments[commentId]);
    });
  }

  return {
    post: currentPost,
    comments: comments
  }
};

const mapDispatchToProps = {
  getPosts,
  getCommentsForPost
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);