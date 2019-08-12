import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import { splitText } from '../utils';

import Line from './Line';
import paper from '../cream-paper.png';
import data from '../data';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Alegreya&display=swap');

  body {
    background-color: #f5efc9;
    background-image: url(${paper});
    padding-top: 2em;
    text-align: center;
  }
`;

const App = () => {
  const [nodeIndex, setNodeIndex] = useState(1);
  const node = data.find(n => n.id === nodeIndex);
  const lines = splitText(node.text);

  return (
    <>
      <GlobalStyle />
      <section>
        {lines.map((text, i) => <Line key={i} text={text} />)}
      </section>
    </>
  );
};

export default App;
