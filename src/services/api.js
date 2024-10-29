import axios from 'axios';
const instance = axios.create({ baseURL: 'http://localhost:8080/equipos' });

export const savePersonName = async (obj) => await instance.post('/', obj)

export const getPersons = async () => await instance.get();

export const getPerson = async (id) => await instance.get(`/${id}`);


export const deletePerson = async (id) => await instance.delete('/' + id);

export const updatePerson = async (person) => await instance.put('/'+person.id, person);

