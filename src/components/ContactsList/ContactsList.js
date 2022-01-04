import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import ContactsListItem from '../ContactsListItem';
import phonebookActions from '../../redux/phonebook/phonebook-actions';
import { getVisibleContacts } from '../../redux/phonebook/phonebook-selectors';
import styles from './ContactsList.module.css';

function ContactsList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const deleteItem = id => dispatch(phonebookActions.deleteContact(id));

  return (
    <ul className={styles.list}>
      {contacts.map(contact => {
        return (
          <ContactsListItem
            key={contact.id}
            contact={contact}
            onDelete={() => deleteItem(contact.id)}
          />
        );
      })}
    </ul>
  );
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
  onDelete: PropTypes.func,
};

// const mapStateToProps = ({ contacts: { items, filter } }) => ({
//   contacts: getVisibleContacts(items, filter),
// });

// const mapDispatchToProps = dispatch => ({
//   onDelete: id => dispatch(phonebookActions.deleteContact(id)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
export default ContactsList;
