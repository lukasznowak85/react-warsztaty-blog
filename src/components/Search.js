import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {search} from '../store/data/blog/actions';

class Search extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const value = event.target.value;

    this.props.search(value);
  }
  
  render() {
    let {text} = this.props;
    return (
      <div className="search">
        <input
          type="text"
          value={text}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

Search.propTypes = {
  text: PropTypes.string
};

const mapStateToProps = (state, ownProps) => {
  return {
    text: state.blog.searchVal
  }
};

const mapDispatchToProps = {
  search
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);