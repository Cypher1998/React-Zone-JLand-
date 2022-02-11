import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  const [width, setWidth] = useState(window.outerWidth);
  // console.log(size);

  const changeSize = () => {
    setSize(window.innerWidth);
    setWidth(window.outerWidth);
  };

  useEffect(() => {
    console.log('resizing');
    window.addEventListener('resize', changeSize);
    // cleanUp function
    // return () => {
    //   console.log('cleanup');
    //   window.removeEventListener('resize', changeSize);
    // };
  }, []);
  console.log('rendering');

  return (
    <>
      <h1>Window</h1>
      <h2>InnerWidth: {size}px</h2>
      <h2>OuterWidth: {width}px</h2>
    </>
  );
};

export default UseEffectCleanup;
