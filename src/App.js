import Form from './Components/Form';
import Filter from './Components/filter/Filter';
import ContactList from './Components/contacts-list/ContactList';
import PropTypes from 'prop-types';
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

App.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};

export default connect()(App);
