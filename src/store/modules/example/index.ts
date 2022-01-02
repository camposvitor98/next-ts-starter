import { ActionType } from "typesafe-actions";

import { Types, InitialValues } from "./types";
import * as actions from "./actions";

export const ActionsExample = actions;

export type ActionsExampleType = ActionType<typeof actions>;

const INITIAL: InitialValues = {
  loading: false,
};

export const exampleReducer = (state = INITIAL, action: ActionsExampleType) => {
  const { type, payload } = action;

  switch (type) {
    case Types.SET: {
      return { ...state, ...payload };
    }

    case Types.LOADING: {
      return { ...state, loading: payload };
    }

    default:
      return state;
  }
};
