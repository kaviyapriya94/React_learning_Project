import { createStore,applyMiddleware  } from "redux";
import rootReducer from "./reducers";
import reduxSaga from 'redux-saga';
import rootSaga from './sagas';

const reduxSagaMiddleware = reduxSaga();
const store = createStore(
    rootReducer,applyMiddleware(reduxSagaMiddleware)
);

export default store;
reduxSagaMiddleware.run(rootSaga);