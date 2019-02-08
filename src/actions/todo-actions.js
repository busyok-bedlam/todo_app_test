import { createAction } from 'redux-actions';
import create from 'antd/lib/icon/IconFont';

export const setTodos = createAction('setTodos');
export const addTodo = createAction('addTodo');
export const deleteTodo = createAction('deleteTodo');
export const deleteTodos = createAction('deleteTodos');