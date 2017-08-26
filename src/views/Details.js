import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts, getCommentsForPost } from '../services/posts';
import Comment from '../components/Comment';
import FlatButton from 'material-ui/FlatButton';
import { Card, CardHeader, CardText } from 'material-ui/Card';

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
        {/* <PostEditForm onSubmit={this.onSubmit} onSubmitFail={this.onSubmitFail} /> */}
        {post ?
        <div>
          <h1>Single blog post</h1>
          <Card>
            <CardHeader subtitle={post.title} />
            <CardText>{post.body}</CardText>
          </Card>
        </div> : null}
        <br />
        {/* <Link to="/main"><FlatButton primary={true}>Go back to main</FlatButton></Link> */}
        <br />
        <FlatButton label="Back to main" secondary={true} onClick={() => this.goTo('/main')}/>
        <br />
        <h4>Comments:</h4>
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