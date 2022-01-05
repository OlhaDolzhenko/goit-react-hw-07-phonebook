import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import ContactsListItem from '../ContactsListItem';
import phonebookOperations from '../../redux/phonebook/phonebook-operations';
import { getVisibleContacts } from '../../redux/phonebook/phonebook-selectors';
import styles from './ContactsList.module.css';

function ContactsList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(phonebookOperations.fetchContacts());
  }, [dispatch]);
  const deleteItem = id => dispatch(phonebookOperations.deleteContact(id));

  return (
    <ul className={styles.list}>
      {contacts.map(contact => {
        return (
          <ContactsListItem
            key={contact.id}
            contact={contact}
            onDelete={deleteItem}
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
      phone: PropTypes.string,
    }),
  ),
  onDelete: PropTypes.func,
};

export default ContactsList;
