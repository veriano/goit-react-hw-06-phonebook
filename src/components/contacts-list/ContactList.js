import PropTypes from 'prop-types';
import s from './contactsList-styles.module.css';
import { connect } from 'react-redux';
import * as actions from '../../redux/contacts-actions';

function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul className={s.list}>
      {contacts.map(contact => {
        const { name, number, id } = contact;
        return (
          <li key={id} className={s.item}>
            <p className={s.p}>
              {name} <span className={s.span}>{number}</span>
            </p>
            <button
              type="button"
              onClick={() => {
                onDeleteContact(id);
              }}
              className={s.btn}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onDelete: PropTypes.func,
};

const getFilteredContacts = (data, filter) => {
  const normalizedFilter = filter.toLocaleLowerCase();

  const filteredNames = data.filter(item =>
    item.name.toLocaleLowerCase().includes(normalizedFilter),
  );

  return filteredNames;
};

const mapStateToProps = ({ contacts, filter }) => {
  return {
    contacts: getFilteredContacts(contacts, filter),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDeleteContact: id => dispatch(actions.deleteContact(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
