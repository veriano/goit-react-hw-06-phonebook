import types from '../redux/action-types';
import { createReducer } from '@reduxjs/toolkit';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsReducer = createReducer(initialContacts, {
  [types.ADD_CONTACT]: (state, action) => {
    
    let similar = state.find((item) => item.name.toLowerCase() === action.payload.name.toLowerCase());

    if (similar !== undefined) {
      alert(`${action.payload.name} is already in contacts.`);
      return state;
    } else return [...state, action.payload];
  },

  [types.DELETE_CONTACT]: (state, action) => {
    return state.filter((el) => {
      return el.id !== action.payload;
    });
  },
});

const filterReducer = createReducer('', {
  [types.FILTER]: (state, action) => {
    return (state = action.payload);
  },
});

export { contactsReducer, filterReducer };

// export default rootReducer;
