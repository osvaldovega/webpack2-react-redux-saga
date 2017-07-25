/*
 * APOD Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOAD_APOD,
  LOAD_APOD_SUCCESS,
  LOAD_APOD_ERROR,
} from './constants';

/**
 * Load the APOD data, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_APOD
 */
export function loadApod() {
  return {
    type: LOAD_APOD,
  };
}

/**
 * Dispatched when the data are loaded by the request saga
 *
 * @param  {object} Object that has the APOD data
 *
 * @return {object} An action object with a type of LOAD_APOD_SUCCESS passing the repos
 */
export function loadApodSuccess(data) {
  return {
    type: LOAD_APOD_SUCCESS,
    payload: data,
  };
}

/**
 * Dispatched when loading the data from NASA fails
 *
 * @param  {object} error The error
 *
 * @return {object} An action object with a type of LOAD_APOD_ERROR passing the error
 */
export function loadApodError(error) {
  return {
    type: LOAD_APOD_ERROR,
    error,
  };
}
