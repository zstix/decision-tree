import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { useDelay } from '../hooks';
import { fadeIn } from '../styles/animations';

const Wrapper = styled.button`
  background: none;
  border: 1px solid #111;
  box-shadow: none;
  color: #111;
  cursor: pointer;
  font-family: 'Alegreya', serif;
  font-size: 2em;
  margin: 1em 0.5em;
  opacity: 0.8;
  outline: none;
  padding: 0 1em;

  animation: 0.8s ${fadeIn} ease-in-out;
`;

const Button = ({ delay, text }) => {
  const [show, setShow] = useState(false);

  useDelay(() => {
    setShow(true);
  }, delay);

  return show && (
    <Wrapper>{text}</Wrapper>
  );
};

Button.propTypes = {
  delay: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default Button;
