import { all } from "redux-saga/effects";

import example from "./modules/example/saga";

export function* sagas(): Generator {
  const saga = [example];

  return yield all(saga);
}
