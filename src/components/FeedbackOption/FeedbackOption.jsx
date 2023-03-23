import PropTypes from 'prop-types';
import React from 'react';
import { WraperBtn } from './Feedback.Styled';

const Feedback = ({ onLeaveFeedback, options }) => {
  return (
    <WraperBtn>
      {options.map(el => {
        return (
          <button
            className="Btn-count"
            type="button"
            onClick={() => onLeaveFeedback(el)}
            key={el}
            id={el}
          >
            {el}
          </button>
        );
      })}
    </WraperBtn>
  );
};

Feedback.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export { Feedback };
