import { call,put,fork,takeEvery,delay } from 'redux-saga/effects';

import { updateTodo as updateTodoAction,upgradeTodo } from '../actions/todo-actions';
import { updateTodo } from '../api';



export default function * updateTodoSaga() {
  yield fork(todoUpdateWatcher);
}

function * todoUpdateWatcher(){
  yield takeEvery(upgradeTodo,todoUpdateWorker);
}

function * todoUpdateWorker({ payload }){
    
    yield call(updateTodo, payload);
    yield put(updateTodoAction(payload));
}