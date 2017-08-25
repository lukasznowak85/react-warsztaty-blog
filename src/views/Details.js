import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const Details = props => {
  const to = "/main";

  return (
    <div className="details">
      Details
      <br/>
      <Link to={to}>Go back to main</Link>
    </div>
  )
}

export default Details;