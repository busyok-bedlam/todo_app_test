import { fork } from 'redux-saga/effects';

import getTodosSaga from './get-todos-saga';
import updateTodoSaga from './update-todo-saga';
import todoAddSaga from './add-todo-saga';
import todoDelSaga from './del-todo-saga';

export default function * rootSaga(){
    yield fork(getTodosSaga);
    yield fork(updateTodoSaga);
    yield fork(todoAddSaga);
    yield fork(todoDelSaga);
}