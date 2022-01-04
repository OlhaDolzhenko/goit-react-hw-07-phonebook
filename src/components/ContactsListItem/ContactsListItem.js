import PropTypes from 'prop-types';
import styles from './ContactsListItem.module.css';

const ContactsListItem = ({ contact, onDelete }) => {
  return (
    <li className={styles.listItem} key={contact.id}>
      {contact.name}:<span className={styles.number}>{contact.number}</span>
      <button
        className={styles.btn}
        onClick={() => onDelete(contact.id)}
        type="button"
      >
        Delete
      </button>
    </li>
  );
};

ContactsListItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
  onDelete: PropTypes.func,
};

export default ContactsListItem;
