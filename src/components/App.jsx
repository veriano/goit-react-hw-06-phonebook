import { useState, useEffect } from 'react';
import { configureStore, getDefaultMiddleware, createAction } from '@reduxjs/toolkit';
// import { useSelector, useDispatch } from react-redux;
import logger from 'redux-logger';
import { v4 as uuidv4 } from 'uuid';
import s from './App.module.css';
import ContactForm from './ContactForm';
import ContactList from './ContactsList';
import Filter from './Filter';


function App() {
  const middleware = [...getDefaultMiddleware(), logger];

  const store = configureStore({
    reducer: {
      contacts: {
        items: [],
        filter: ''
      }
    },
    middleware,
    devTools: process.env.NODE_ENV === 'development',

  })


  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const addContact = ({ name, number }) => {
    const contactName = contacts.find(
      contact => name.toLowerCase() === contact.name.toLowerCase(),
    );

    if (contactName) {
      alert(`${name} already in contacts.`);
      return;
    }

    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    setContacts([...contacts, contact]);
  };

  const deleteContact = contactId => {
    setContacts(contacts => contacts.filter(({ id }) => id !== contactId));
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  return (
    <>
      <h1 className={s.Title}>
        <b>Phonebook</b>
      </h1>

      <ContactForm onSubmitHandler={addContact} />

      <h2 className={s.Title}>
        <b>Contacts</b>
      </h2>

      <Filter value={filter} onChange={changeFilter} />

      <ContactList
        contacts={getVisibleContacts()}
        onDeleteContact={deleteContact}
      />
    </>
  );
}

export default App;
