import { action } from "typesafe-actions";

import * as Interface from "./types";

export function set(payload: any) {
  return action(Interface.Types.SET, payload);
}

export function setLoading(payload?: boolean) {
  return action(Interface.Types.LOADING, payload);
}
