import { call, fork, put, take } from "redux-saga/effects";
import entriesTypes, { populateEntryDetails } from "../actions/entries.actions";
import { getEntries, getValues } from "../api/apis";
import axios from "axios";
import { populateEntries } from "../actions/entries.actions";

export function* getAllEntries() {
  yield take(entriesTypes.GET_ENTRIES);
  console.log("I need to get the entries now");
  const { data } = yield call(getEntries);
  yield put(populateEntries(data));
}

export function* getEntryDetails(id) {
  const data  = yield call(() => getValues(id));
  console.log(data);
  yield put(populateEntryDetails(id, data));
}

export function* getAllEntriesDetails() {
  const { payload } = yield take(entriesTypes.POPULATE_ENTRIES);
  console.log(payload);
  for (let index = 0; index < payload.length; index++) {
    const entry = payload[index];
    yield fork(getEntryDetails, entry.id);
  }
}
