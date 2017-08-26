import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';

const Comment = props => {
  const { email, body, name } = props.comment;

  return (
    <div className="comment">
      <Card>
        <CardHeader
          title={name}
          subtitle={email}
        />
        <CardText>{body}</CardText>
      </Card>
      <br />
    </div>
  )
}

export default Comment;