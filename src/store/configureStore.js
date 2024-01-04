import { applyMiddleware, combineReducers, createStore } from "redux";
import entriesReducer from "../reducers/entries.reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { modalsReducer } from "../reducers/modals.reducers";
import createSagaMiddleware from "redux-saga";
import { count, testSaga } from "../saga/testSaga";
import initSagas from "../saga";

const sagaMiddleWare = createSagaMiddleware();
const middlewares = [sagaMiddleWare];

const combinedReducers = combineReducers({
  entries: entriesReducer,
  modals: modalsReducer,
});

const configureStore = () => {
  const store = createStore(
    combinedReducers,
    composeWithDevTools(applyMiddleware(...middlewares))
  );
  // sagaMiddleWare.run(testSaga);
  // sagaMiddleWare.run(count);
  initSagas(sagaMiddleWare)
  return store;
};

export default configureStore;
