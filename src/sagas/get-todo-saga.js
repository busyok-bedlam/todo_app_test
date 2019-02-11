import { fork, takeEvery, call, put, delay  } from 'redux-saga/effects'


import { getTodo as getTodoAction } from "../actions/todo-actions";
import { setCurrent } from '../actions/current-actions';
import { getTodo } from '../api'

export default function * getTodoSaga(){
  yield fork(getTodoWatcher);
}

function * getTodoWatcher(){
  yield takeEvery(getTodoAction, getTodoWorker)
}

function * getTodoWorker({ payload }){
  
  const {todo} = yield call(getTodo, payload);
  yield put(setCurrent(todo));
}