/*
 * CURIOSITY Actions
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
  LOAD_CURIOSITY,
  LOAD_CURIOSITY_SUCCESS,
  LOAD_CURIOSITY_ERROR,
} from './constants';

/**
 * Load the CURIOSITY data, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_CURIOSITY
 */
export function loadCuriosity() {
  return {
    type: LOAD_CURIOSITY,
  };
}

/**
 * Dispatched when the data are loaded by the request saga
 *
 * @param  {object} Object that has the CURIOSITY data
 *
 * @return {object} An action object with a type of LOAD_CURIOSITY_SUCCESS passing the repos
 */
export function loadCuriositySuccess(data) {
  return {
    type: LOAD_CURIOSITY_SUCCESS,
    payload: data,
  };
}

/**
 * Dispatched when loading the data from NASA fails
 *
 * @param  {object} error The error
 *
 * @return {object} An action object with a type of LOAD_CURIOSITY_ERROR passing the error
 */
export function loadCuriosityError(error) {
  return {
    type: LOAD_CURIOSITY_ERROR,
    error,
  };
}
