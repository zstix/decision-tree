import React, { useState } from 'react';
import { splitText } from '../utils';

import GlobalStyle from '../styles/global';
import Line from './Line';
import paper from '../cream-paper.png';
import data from '../data';

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
