import axios from 'axios' //npm install axios
const api = "http://localhost:1234/api/contacts/"

export const getContacts = () => axios.get(api);
export const addContact = (data) => axios.post(`${api}contact`, data);//data contains the json info about the data that u want to insert
export const updateContacts = (id, data) => axios.put(`${api}${id}`, data);
export const deleteContact = (id) => axios.delete(`${api}${id}`);

