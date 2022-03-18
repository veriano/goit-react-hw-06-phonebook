import Form from './Components/form/Form';
import Filter from './Components/filter/Filter';
import ContactList from './Components/contacts-list/ContactList';
import { connect } from 'react-redux';
import { store } from './redux/store';
import './App.css';

function App() {
  console.log(store.getState());

  return (
    <div>
      <Form />
      <Filter />
      <ContactList />
    </div>
  );
}

export default connect()(App);
