import React from 'react';

const Comment = props => {
  const { id, email, body, name } = props.comment;

  return (
    <div className='comment'>
      <h4>{name}: {email}</h4>
      <p>{body}</p>
    </div>
  )
}

export default Comment;