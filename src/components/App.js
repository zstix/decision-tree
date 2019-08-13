import React, { useState } from 'react';
import { splitText } from '../utils';

import GlobalStyle from '../styles/global';
import Line from './Line';
import Button from './Button';
import data from '../data';

const DELAY = 300; // delay between showing the next line

const App = () => {
  const [nodeIndex, setNodeIndex] = useState(1);
  const node = data.find(n => n.id === nodeIndex);
  const lines = splitText(node.text);

  return (
    <>
      <GlobalStyle />
      <section>
        {lines.map((text, i) => (
          <Line
            key={`line:${nodeIndex}:${i}`}
            delay={i * DELAY}
            text={text}
          />
        ))}
      </section>
      <section>
        {node.options.map((option, i) => (
          <Button
            key={`button:${nodeIndex}:${i}`}
            delay={(lines.length + 1) * DELAY}
            text={option.text}
            handleClick={() => setNodeIndex(option.value)}
          />
        ))}
      </section>
    </>
  );
};

export default App;
