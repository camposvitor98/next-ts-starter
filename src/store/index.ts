import { Reducer, Middleware, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { RootState, StoreAction, Reducers } from "./reducers";
import { sagas } from "./sagas";

type _reducers = Reducer<RootState, StoreAction>;
type _middlewares = Middleware[];

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(Reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagas);

// const store = (reducers: _reducers, middlewares: _middlewares) => {
//   const enhancer = applyMiddleware(...middlewares);

//   return createStore(reducers, enhancer);
// };
