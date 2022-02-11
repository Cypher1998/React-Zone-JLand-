import React, { useState, useReducer } from 'react';
import reducer from './reducer';
import Modal from './Modal';
import { data } from '../data';
// reducer function

const Index = () => {
  const [text, setText] = useState('');
  // const [people, setPeople] = useState(data);
  // const [showModal, setShowModal] = useState(false);

  const initialState = {
    people: [],
    isModalOpen: false,
    modalContent: '',
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      const newPerson = { id: new Date().getTime().toString(), name: text };

      dispatch({ type: 'ADD_USER', payload: newPerson });
      // setShowModal(true);
      // const person = { id: new Date().getTime().toString(), name: text };
      // setPeople([person, ...people]);
      setText('');
    } else {
      // setShowModal(true);
      dispatch({ type: 'EMPTY_USER' });
    }
  };

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };

  return (
    <>
      {state.isModalOpen && (
        <Modal modalContent={state.modalContent} closeModal={closeModal} />
      )}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <button type="submit">add</button>
      </form>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button
              onClick={() => dispatch({ type: 'REMOVE_USER', payload: id })}
            >
              remove
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
