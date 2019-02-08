import { handleActions } from 'redux-actions';

import * as todoActions from '../actions/todo-actions';

const initialState = [
    { id: 1, title: "first todo", body: "TEXT1"},
    { id: 2, title: "second todo", body: "TEXT2"}
];
const todoReducer = handleActions({
    [todoActions.setTodos]: (state, { payload }) => [...payload],
    [todoActions.addTodo]: (state,{ payload }) => [...state,payload],
    [todoActions.deleteTodos]: (state) => [],
    [todoActions.deleteTodo]: (state, { payload: id }) => [...state.filter(item => item.id === id)],
},initialState)

export default todoReducer;