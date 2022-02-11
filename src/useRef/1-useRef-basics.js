import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const inputRef = useRef(null);
  console.log(inputRef);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef);
    console.log(inputRef.current);
    console.log(inputRef.current.value);
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default UseRefBasics;
