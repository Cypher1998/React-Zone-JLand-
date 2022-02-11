import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const [name, setName] = useState('moroof');
  const [error, setError] = useState(false);
  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';
  // console.log(firstValue);
  // console.log(secondValue);
  return (
    <>
      {/* <h2>value: {firstValue}</h2>
      <h2>value: {secondValue}</h2> */}
      <h2>greetings: {text || 'hello world'}</h2>
      <h2>name: {name && 'cypher'}</h2>
      <h3>{error && 'Error...'}</h3>
      {error ? (
        <h3>there is an error...</h3>
      ) : (
        <div>
          <h3>there is no error</h3>
        </div>
      )}
      <button className="btn" onClick={() => setError(!error)}>
        toggle error
      </button>
    </>
  );
};

export default ShortCircuit;
