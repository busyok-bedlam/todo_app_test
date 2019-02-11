import { createAction } from 'redux-actions';

export const setTodos = createAction('setTodos');
export const getTodos = createAction('getTodos');
export const getTodo = createAction('getTodo');
export const setTodo = createAction('setTodo');
export const addTodo = createAction('addTodo');
export const deleteTodo = createAction('deleteTodo');
export const deleteTodos = createAction('deleteTodos');
export const removeTodo = createAction('removeTodo');
export const removeTodos = createAction('deleteTodos');

export const updateTodo = createAction('updateTodo');
export const upgradeTodo = createAction('upgradeTodo');