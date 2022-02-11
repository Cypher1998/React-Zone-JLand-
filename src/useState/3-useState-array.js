import React from 'react';
import { data } from '../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const remove = (id) => {
    console.log(id);
    const newPeople = people.filter((person) => person.id !== id);
    console.log(newPeople);
    setPeople(newPeople);
  };

  return (
    <>
      {people.map((person) => (
        // const {id,name}=person
        <div key={person.id} className="item">
          <h4>{person.name}</h4>
          <button onClick={() => remove(person.id)}>remove</button>
        </div>
      ))}
      <button className="btn" onClick={() => setPeople([])}>
        clear names
      </button>
    </>
  );
};

export default UseStateArray;
