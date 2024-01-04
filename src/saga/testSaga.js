import { call, delay, fork, put, take, takeEvery } from "redux-saga/effects";

function double(number) {
  return number * 2;
}

export function* testSaga() {
  while (true) {
    console.log("starting saga");
    const state = yield take("TEST_MESSAGE");
    const a = yield call(double, 2);
    console.log(a);
    const b = yield double(3);
    console.log(b);
    console.log("finishing saga function", state);
  }
}

function* doNothing() {
  console.log("I haven called");
  yield delay(1000);
  console.log("I am doing nothing");
}

export function* testSagaFork() {
  while (true) {
    yield take("TEST_MESSAGE_2");
    yield fork(doNothing);
    yield fork(doNothing);
    yield fork(doNothing);
  }
}

export function* dispatchTest() {
  while (true) {
    yield delay(5000);
    yield put({
      type: "TEST_MESSAGE_2",
      payload: 1000,
    });
  }
}

export  function* testSagaTakeEveryProcess({payload}){
console.log(`Starting Process for index ${payload}`)
yield delay(3000);
console.log(`Ending Process for index ${payload}`)
}

export function* testSagaTakeEvery() {
  const { payload } = yield takeEvery("TEST_MESSAGE_3", testSagaTakeEveryProcess);
  console.log(`Finish TakeEvery for index ${payload}`);
}

export function* dispatchTest1() {
  let index = 0;
  while (true) {
    yield delay(500);
    yield put({
      type: "TEST_MESSAGE_3",
      payload: index,
    });
    index++;
  }
}
