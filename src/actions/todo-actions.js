import { createAction } from 'redux-actions';
import create from 'antd/lib/icon/IconFont';

export const setTodos = createAction('setTodos');
export const getTodos = createAction('getTodos');
export const setTodo = createAction('setTodo');
export const addTodo = createAction('addTodo');
export const deleteTodo = createAction('deleteTodo');
export const deleteTodos = createAction('deleteTodos');
export const removeTodo = createAction('deleteTodo');
export const removeTodos = createAction('deleteTodos');

export const updateTodo = createAction('updateTodo');
export const upgradeTodo = createAction('upgradeTodo');