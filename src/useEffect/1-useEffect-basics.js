import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log('useeffect called');
    if (value >= 1) {
      document.title = `New Message(${value})`;
    }
  }, [value]);

  useEffect(() => {
    console.log('hello world');
  }, []);

  console.log('rendered called');

  return (
    <>
      <h2>{value}</h2>
      <button className="btn" onClick={() => setValue(value + 1)}>
        click me
      </button>
    </>
  );
};

export default UseEffectBasics;
