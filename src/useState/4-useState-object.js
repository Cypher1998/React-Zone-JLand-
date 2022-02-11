import { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Moroof',
    age: 23,
    message: "I'm getting better",
  });

  const changeMessage = () => {
    setPerson({ ...person, message: 'Just wanna know myself better' });
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h4>{person.age}</h4>
      <h4>{person.message}</h4>
      <button className="btn" onClick={changeMessage}>
        change msg
      </button>
    </>
  );
};

export default UseStateObject;
