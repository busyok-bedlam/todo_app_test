import ApiCreator from './api';

const api = ApiCreator('https://ffddwewr33.herokuapp.com/todopage/');

export const addTodo = todo => api.post('create-todo', todo, { 'Content-Type': 'application/json' });
export const getTodo = id => api.get(`todo/${id}`);
export const getTodos = () => api.get('todos');
export const delTodo = ({id}) => api.post('delete-todo', { id });
export const updateTodo = ({id,newData}) => api.post('update', {id,newData},{ 'Content-Type': 'application/json' });