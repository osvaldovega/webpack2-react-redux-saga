/*
 * ApodReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import {
  LOAD_APOD,
  LOAD_APOD_SUCCESS,
  LOAD_APOD_ERROR,
} from './constants';

const initialState = fromJS({
  loading: false,
  error: false,
  data: false,
});

function apodReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_APOD:
      return state
        .set('loading', true)
        .set('error', false)
        .set('data', false);
    case LOAD_APOD_SUCCESS:
      return state
        .set('data', action.payload)
        .set('loading', false)
        .set('error', false);
    case LOAD_APOD_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default apodReducer;

