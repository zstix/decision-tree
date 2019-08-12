import React from 'react';
import PropTypes from 'prop-types';

const Line = ({ text }) => (
  <p>{text}</p>
);

Line.propTypes = {
  text: PropTypes.string
};

export default Line;
