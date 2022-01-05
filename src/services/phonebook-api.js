import axios from 'axios';

axios.defaults.baseURL = 'https://61d4f0558df81200178a8e85.mockapi.io';

export async function fetchContacts() {
  const { data } = await axios.get(`/contacts`);
  return data;
}

export async function postContact(contact) {
  const { data } = await axios.post('/contacts', contact);
  return data;
}

export async function deleteContact(contactId) {
  const { data } = await axios.delete(`/contacts/${contactId}`);
  return data;
}
