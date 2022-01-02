import { all, takeLatest } from "redux-saga/effects";
import * as Interface from "./types";

import { loadingSagas } from "./functions/loadingSagas";

export default all([takeLatest(Interface.Types.LOADING, loadingSagas)]);
