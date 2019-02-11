import { call,put,fork,takeEvery,delay } from 'redux-saga/effects';

import { removeTodo, deleteTodo } from '../actions/todo-actions';
import { delTodo } from '../api';



export default function * todoDelSaga() {
  yield fork(todoDelWatcher);
}

function * todoDelWatcher(){
  yield takeEvery(removeTodo,todoDelWorker);
}

function * todoDelWorker({payload}){
  // debugger
  yield call(delTodo, payload );
  yield put(deleteTodo(payload));
}