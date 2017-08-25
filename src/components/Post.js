import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Post = props => {
  const {id, title, body} = props.post;
  const to = "/details/" + id;

  return (
    <div className='post'>
      <Link to={to}><h3>{id}: {title}</h3></Link>
      <p>{body}</p>
    </div>
  )
}

Post.propTypes = {
  post: PropTypes.object.isRequired
}

export default Post;