import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const reset = () => {
    setValue(0);
  };

  const complexFunction = () => {
    setTimeout(() => {
      // setValue(value + 1);
      // console.log(value);
      setValue((prevState) => {
        // console.log(prevState);
        console.log(prevState + 1);
        return prevState + 1;
      });
    }, 2000);
  };

  return (
    <>
      <section style={{ margin: '4rem 0' }}>
        <h2>regular counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={() => setValue(value - 1)}>
          decrease
        </button>
        <button className="btn" onClick={reset}>
          reset
        </button>
        <button className="btn" onClick={() => setValue(value + 1)}>
          increase
        </button>
      </section>
      <section style={{ margin: '4rem 0' }}>
        <h2>regular counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={complexFunction}>
          complex action
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
