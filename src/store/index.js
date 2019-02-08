import { createStore,applyMiddleware } from 'redux';

import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from 'redux-saga';

import mainReducer from '../reducers';
// import rootSaga from '../saga';

// const sagaMiddleWare = createSagaMiddleware();
// const middleWares = composeWithDevTools(
//     applyMiddleware(sagaMiddleWare)
// )


// ,middleWares

const store = createStore(mainReducer);
sagaMiddleWare.run(rootSaga);

export default store;