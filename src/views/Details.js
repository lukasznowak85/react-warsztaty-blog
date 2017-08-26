import React, {Component} from 'react';
import {customFetch} from '../services/fetch';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getPosts} from '../services/posts';
import PostEditForm from '../components/PostEditForm';

class Details extends Component  {
  constructor(props) {
    super(props);

    this.goTo = this.goTo.bind(this);
  }

  goTo(path) {
    this.props.history.push(path)
  }
  
  componentDidMount() {
    this.props.getPosts();
  }

  onSubmit(values){
    console.log('elo, submitted', values)
  }
  
  render() {
    const {post} = this.props;
    return (
      <div className="details">
        <PostEditForm onSubmit={this.onSubmit}/>

        {post ? <h3>{post.title}</h3> : null}
        {post ? <p>{post.body}</p> : null}
        <br/>
        <Link to="/main">Go back to main</Link>
        <br/>
        <button onClick={() => this.goTo('/main')}>Back to main</button>
      </div>
    )
  }
};

const mapStateToProps = (state, ownProps) => {
  const {id} = ownProps.match.params;
  const {posts} = state.blog;
  return {
    post: posts && posts.find(el => el.id === parseInt(id, 10))
  }
};

const mapDispatchToProps = {
  getPosts
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);