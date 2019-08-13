import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import withDelay from './withDelay';
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

const Line = ({ text }) => (
  <Wrapper>{text}</Wrapper>
);

Line.propTypes = {
  text: PropTypes.string.isRequired
};

export default withDelay(Line);
