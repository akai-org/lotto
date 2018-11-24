import React, { useState } from 'react';
import styled, { css } from 'react-emotion';

const Button = styled('button')`
  color: hotpink;
`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <Button onClick={() => setCount(count + 1)}>Click me</Button>
    </div>
  );
}

export default App;
