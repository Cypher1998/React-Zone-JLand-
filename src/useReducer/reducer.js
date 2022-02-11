const reducer = (state, action) => {
  if (action.type === 'ADD_USER') {
    return {
      ...state,
      people: [...state.people, action.payload],
      isModalOpen: true,
      modalContent: 'item added',
    };
  }
  if (action.type === 'EMPTY_USER') {
    return {
      ...state,
      isModalOpen: true,
      modalContent: 'please enter value',
    };
  }
  if (action.type === 'CLOSE_MODAL') {
    return {
      ...state,
      isModalOpen: false,
    };
  }
  if (action.type === 'REMOVE_USER') {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload
    );

    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: 'user removed!',
    };
  }
  throw new Error('no action type matched');
};

export default reducer;
