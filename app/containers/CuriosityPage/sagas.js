import { take, call, put, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_CURIOSITY } from './constants';
import { loadCuriositySuccess, loadCuriosityError } from './actions';
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
export function* getCuriosity() {
  const requestURL = generateURL(nasa.rovers_url_1);

  try {
    // Call our request helper (see 'utils/request')
    const data = yield call(request, requestURL);
    yield put(loadCuriositySuccess(data));
  } catch (err) {
    yield put(loadCuriosityError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* CuriosityData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  const watcher = yield takeLatest(LOAD_CURIOSITY, getCuriosity);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [
  CuriosityData,
];
