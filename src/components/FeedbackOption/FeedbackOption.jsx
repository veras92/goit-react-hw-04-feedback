import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { WraperBtn } from './Feedback.Styled';

class Feedback extends Component {
  render() {
    const { onLeaveFeedback, options } = this.props;

    return (
      <WraperBtn>
        {options.map(el => {
          return (
            <button
              className="Btn-count"
              type="button"
              onClick={onLeaveFeedback}
              key={el}
              id={el}
            >
              {el}
            </button>
          );
        })}
      </WraperBtn>
    );
  }
}

Feedback.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export { Feedback };
