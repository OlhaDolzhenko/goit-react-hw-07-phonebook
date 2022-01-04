import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('phoneboook/addContact', newContact => {
  return {
    payload: {
      id: newContact.id,
      name: newContact.name,
      number: newContact.number,
    },
  };
});

const deleteContact = createAction('phonebook/deleteContact');

const changeFilter = createAction('phonebook/changeFilter');

const actions = { addContact, deleteContact, changeFilter };

export default actions;
