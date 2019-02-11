import ApiCreator from './api';

const api = ApiCreator('https://ffddwewr33.herokuapp.com/todopage/');

export const addTodo = todo => api.post('create-todo', todo, { 'Content-Type': 'application/json' });
export const getTodo = id => {
    return api.get(`todo/${id}`);
} 
export const getTodos = () => api.get('todos');
export const delTodo = id =>{
    return api.post('delete', { id });
} 
export const updateTodo = ({id,newData}) => api.post('update', {id,newData},{ 'Content-Type': 'application/json' });
