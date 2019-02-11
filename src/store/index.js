import { createStore,applyMiddleware } from 'redux';

import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from 'redux-saga';

import mainReducer from '../reducers';
import rootSaga from '../sagas';

const sagaMiddleWare = createSagaMiddleware();
const middleWares = composeWithDevTools(
    applyMiddleware(sagaMiddleWare)
)

const store = createStore(mainReducer,middleWares);
sagaMiddleWare.run(rootSaga);

export default store;