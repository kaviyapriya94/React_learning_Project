import { all } from "redux-saga/effects";
import authSaga from "./authRoutes/sagas";

export default function* rootSaga() {
  yield all([authSaga()]);
}