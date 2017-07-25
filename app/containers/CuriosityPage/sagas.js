import { take, call, put, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_CURIOSITY } from './constants';
import { loadCuriositySuccess, loadCuriosityError } from './actions';
import request from '../../utils/request';
import nasa from '../../utils/endpointNASA.json';

function generateURL(partialURL) {
  return `${nasa.base_url}${partialURL}${nasa.key}`;
}

export function* getCuriosity() {
  const requestURL = generateURL(nasa.rovers_url_1);

  try {
    const data = yield call(request, requestURL);
    yield put(loadCuriositySuccess(data));
  } catch (err) {
    yield put(loadCuriosityError(err));
  }
}

export function* CuriosityData() {
  const watcher = yield takeLatest(LOAD_CURIOSITY, getCuriosity);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export default [
  CuriosityData,
];
