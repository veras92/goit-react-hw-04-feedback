import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Section extends Component {
  render() {
    const { title } = this.props;

    return (
      <div>
        <h2>{title}</h2>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

Section.protoTypes = {
  title: PropTypes.string.isRequired,
};

export { Section };
