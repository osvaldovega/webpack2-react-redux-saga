import { take, call, put, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_APOD } from './constants';
import { loadApodSuccess, loadApodError } from './actions';
import request from '../../utils/request';
import nasa from '../../utils/endpointNASA.json';

/**
 * Build NASA URL
 */
function generateURL(partialURL) {
  return `${nasa.base_url}${partialURL}${nasa.key}`;
}

/**
 * NASA APOD request/response handler
 */
export function* getApod() {
  const requestURL = generateURL(nasa.apod_url);

  try {
    // Call our request helper (see 'utils/request')
    const data = yield call(request, requestURL);
    yield put(loadApodSuccess(data));
  } catch (err) {
    yield put(loadApodError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* apodData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  const watcher = yield takeLatest(LOAD_APOD, getApod);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [
  apodData,
];
