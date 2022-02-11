import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <button className="btn" onClick={() => setShow(!show)}>
        show/hide
      </button>
      {show && <Item />}
    </>
  );
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);

  const changeSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', changeSize);

    return () => {
      window.removeEventListener('resize', changeSize);
    };
  }, []);

  return (
    <div style={{ marginTop: '3rem' }}>
      <h1>window</h1>
      <h2>size: {size}px</h2>
    </div>
  );
};

export default ShowHide;