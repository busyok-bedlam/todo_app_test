import { combineReducers } from 'redux';

import todoReducer from './todo';
import currentReducer from './current';
export default combineReducers({
    todos: todoReducer,
    current: currentReducer
})