import { createGlobalStyle } from 'styled-components';
import paper from '../cream-paper.png';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Alegreya&display=swap');

  body {
    background-color: #f5efc9;
    background-image: url(${paper});
    padding: 2em;
  }
`;
