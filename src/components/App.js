import React, { useState } from 'react';
import { splitText } from '../utils';
import data from '../data';

const App = () => {
  const [nodeIndex, setNodeIndex] = useState(1);
  const node = data[nodeIndex];
  const lines = splitText(node.text);
  console.log('lines', lines);

  return (
    <div>Hello, World!</div>
  );
};

export default App;
