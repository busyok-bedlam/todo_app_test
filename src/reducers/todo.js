import { handleActions } from 'redux-actions';

import * as todoActions from '../actions/todo-actions';

const getInd = (arr,id) => arr.findIndex(item => item._id == id); 

const initialState = [];
const todoReducer = handleActions({
    [todoActions.setTodos]: (state, { payload }) => [ ...state, ...payload],
    [todoActions.setTodo]: (state,{ payload }) => [...state, payload],
    [todoActions.deleteTodos]: () => [],
    [todoActions.deleteTodo]: (state, { payload }) => {
        const id = payload;
        return [...state.filter(item => item._id !== id)]
    },
    [todoActions.updateTodo]: (state, { payload: { id,newData } }) => [
        ...state.slice(0,getInd(state,id)),
        {...state[getInd(state,id)],...newData},
        ...state.slice(getInd(state,id) + 1)
    ],
},initialState)

export default todoReducer;