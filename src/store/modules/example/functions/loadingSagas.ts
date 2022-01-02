import { toast } from "react-toastify";
import { call, put, all } from "redux-saga/effects";
import { api } from "services/api";
import { ActionsExample } from "..";

export function* loadingSagas(): Generator {
  try {
    yield put(ActionsExample.set({ loading: true }));

    const res: any = yield call(api.get, "example");
    yield all(res.data.map((el: any) => console.log("Nome: ", el.name)));

    yield put(ActionsExample.set({ loading: false }));

    toast.success("Testado e aprovado!");
  } catch (err) {
    toast.error("Vish, deu ruim!");
  }
}
