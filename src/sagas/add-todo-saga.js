import { call,put,fork,takeEvery,delay } from 'redux-saga/effects';

import { addTodo as addTodoAction, setTodo } from '../actions/todo-actions';
import { addTodo } from '../api';



export default function * todoAddSaga() {
  yield fork(todoAddWatcher);
}

function * todoAddWatcher(){
  yield takeEvery(addTodoAction,todoAddWorker);
}

function * todoAddWorker({payload}){
  const { todo } = yield call(addTodo, payload );
  yield put(setTodo(todo));
}