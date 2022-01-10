import { takeEvery, call, all, put } from "redux-saga/effects";
import axios from "axios";
import actions from "./actions";

const rootSaga = function* () {
  yield all([
    yield takeEvery(actions.LOG_IN, workersLogIn)
  ]);
};

const workersLogIn = function* (data) {
  console.log(data);
  // const userData={UserName:"admin",Password:"Admin432"}
  const {payload}=data;
  console.log("Workers login");
  console.log(payload);
    try{
      console.log(JSON.stringify(payload));
     const result = yield call(() =>
      axios.post(
        `https://pj.avaniko.com/PJjewels/Api/Masters/User/Validation`,JSON.stringify(payload),
        {
          headers:{
            'Content-Type' : 'application/json'
          }
        })
    );
    console.log(result);
    // const Result = JSON.parse(JSON.stringify(result.data));
    if(result.data.statusCode === 200) {
      yield put({
        type: actions.UPDATE_AUTH_DETAILS,
        payload: {isAuthenticated:true}
      });
    } else {
      yield put({
        type: actions.UPDATE_AUTH_DETAILS,
        payload: {isAuthenticated:false}
      });
    }
  }
  catch (err) {
    yield put({
      type: actions.UPDATE_AUTH_DETAILS,
      
      payload: { isAuthenticated: false }
    });
  }
}
export default rootSaga;