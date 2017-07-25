/**
 * Tests for HomePage sagas
 */

import { cancel, take, put, takeLatest } from 'redux-saga/effects';
import { createMockTask } from 'redux-saga/lib/utils';

import { LOCATION_CHANGE } from 'react-router-redux';

import { LOAD_APOD } from '../constants';
import { loadApodSuccess, loadApodError } from '../actions';

import { getApod, apodData } from '../sagas';


/* eslint-disable redux-saga/yield-effects */
describe('getApod Saga', () => {
  let getApodGenerator;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    getApodGenerator = getApod();

    const selectDescriptor = getApodGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();
  });

  it('should dispatch the loadApodSuccess action if it requests the data successfully', () => {
    const response = [{
      name: 'First repo',
    }];
    const putDescriptor = getApodGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(loadApodSuccess(response)));
  });

  it('should call the loadApodError action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = getApodGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(loadApodError(response)));
  });
});

describe('apodDataSaga Saga', () => {
  const apodDataSaga = apodData();
  const mockedTask = createMockTask();

  it('should start task to watch for LOAD_APOD action', () => {
    const takeLatestDescriptor = apodDataSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(LOAD_APOD, getApod));
  });

  it('should yield until LOCATION_CHANGE action', () => {
    const takeDescriptor = apodDataSaga.next(mockedTask).value;
    expect(takeDescriptor).toEqual(take(LOCATION_CHANGE));
  });

  it('should cancel the forked task when LOCATION_CHANGE happens', () => {
    const cancelDescriptor = apodDataSaga.next().value;
    expect(cancelDescriptor).toEqual(cancel(mockedTask));
  });
});
