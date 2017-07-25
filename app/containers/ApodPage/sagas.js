import { take, call, put, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_APOD } from './constants';
import { loadApodSuccess, loadApodError } from './actions';
import request from '../../utils/request';
import nasa from '../../utils/endpointNASA.json';

function generateURL(partialURL) {
  return `${nasa.base_url}${partialURL}${nasa.key}`;
}

export function* getApod() {
  const requestURL = generateURL(nasa.apod_url);

  try {
    const data = yield call(request, requestURL);
    yield put(loadApodSuccess(data));
  } catch (err) {
    yield put(loadApodError(err));
  }
}

export function* apodData() {
  const watcher = yield takeLatest(LOAD_APOD, getApod);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export default [
  apodData,
];
