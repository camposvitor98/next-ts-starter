import { combineReducers } from "redux";

import { ActionsExampleType, exampleReducer } from "./modules/example";

export type StoreAction = ActionsExampleType;

export const Reducers = combineReducers({ exampleReducer });

export type RootState = ReturnType<typeof Reducers>;
