import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { slideUp } from '../styles/animations';

const Wrapper = styled.p`
  color: #111;
  font-family: 'Alegreya', serif;
  font-size: 4em;
  margin: 0;
  margin-bottom: 10px;
  opacity: 0.8;
  padding: 0;

  animation: 0.8s ${slideUp} ease-in-out;
`;

const Line = ({ delay, text }) => {
  const [displayText, setDisplayText] = useState(false);

  useEffect(() => {
    const pause = setTimeout(() => {
      setDisplayText(text);
    }, delay);
    return () => clearTimeout(pause);
  }, [delay, text]);

  return displayText && (
    <Wrapper>{text}</Wrapper>
  );
}

Line.propTypes = {
  delay: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired
};

export default Line;
