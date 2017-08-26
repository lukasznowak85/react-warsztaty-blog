import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';

const PostEditForm = props => {
  const {handleSubmit} = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field name="myval" component="input" type="text"/>
    </form>
  )
}

const validate = values => {
  const errors = {};
  const {myval} = values;

  if (myval === 'test') {
    errors.myval = 'wrong val!'
  }

  return errors;
}

const rf = reduxForm({
  initialValues: {
    myval: 'test val elo'
  },
  validate,
  form: 'postEditForm' //unique!
})(PostEditForm)

const mapStateToProps = state => {
  return {
    initialValues: {
      myval: state.blog.searchVal
    }
  }
}

export default connect(mapStateToProps)(rf);