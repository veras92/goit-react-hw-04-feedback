import PropTypes from 'prop-types';
import React from 'react';

const Statistics = ({
  goodCount,
  neutralCount,
  badCount,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <p> Good: {goodCount}</p>
      <p> Neutral: {neutralCount}</p>
      <p> Bad: {badCount}</p>
      <p> Total: {total}</p>
      <p> Positive feedback: {positivePercentage}%</p>
    </>
  );
};

Statistics.propTypes = {
  goodCount: PropTypes.number.isRequired,
  neutralCount: PropTypes.number.isRequired,
  badCount: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export { Statistics };
