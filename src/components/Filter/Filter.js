import PropTypes from 'prop-types';
import s from './filter-styles.module.css';
// import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../redux/contacts-actions';
import { getFilter } from '../../redux/redux-selectors';

export default function Filter () {
  const filterValue = useSelector(getFilter);

  const dispatch = useDispatch();

  return (
    <div className={s.div}>
      <label className={s.label}>Find contacts by name</label>
      <input
        onChange={(e) => dispatch(actions.filter(e.target.value))}
        value={filterValue}
        className={s.input}
      ></input>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

// const mapStateToProps = state => {
//   return {
//     filterValue: state.filter,
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     toFilter: event => dispatch(actions.filter(event.target.value)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);
