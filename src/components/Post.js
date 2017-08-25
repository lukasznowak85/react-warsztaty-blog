import React from 'react';
import PropTypes from 'prop-types';

const Post = props => {
  const {id, title, body} = props.post;

  return (
    <div className='post'>
      <h3>{id}: {title}</h3>
      <p>{body}</p>
    </div>
  )
}

Post.propTypes = {
  post: PropTypes.object.isRequired
}

export default Post;