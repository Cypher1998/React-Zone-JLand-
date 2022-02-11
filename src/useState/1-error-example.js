import { useState } from 'react';

const ErrorExample = () => {
  const [text, setText] = useState('random title');

  const handleClick = () => {
    if (text === 'random title') {
      setText('useState Called');
    } else {
      setText('random title');
    }
  };

  return (
    <>
      <h2>{text}</h2>
      <button className="btn" onClick={handleClick}>
        change title
      </button>
    </>
  );
};

export default ErrorExample;
