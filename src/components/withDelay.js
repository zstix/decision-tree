import React, { useState } from 'react';
import { useDelay } from '../hooks';

// TODO: notes
const withDelay = Component => (props) => {
  const [show, setShow] = useState(false);

  useDelay(() => {
    setShow(true);
  }, props.delay);

  return show && <Component {...props} />
};

export default withDelay;
