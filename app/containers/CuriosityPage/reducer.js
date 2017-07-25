import { fromJS } from 'immutable';

import {
  LOAD_CURIOSITY,
  LOAD_CURIOSITY_SUCCESS,
  LOAD_CURIOSITY_ERROR,
} from './constants';

const initialState = fromJS({
  loading: false,
  error: false,
  data: false,
});

function apodReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_CURIOSITY:
      return state
        .set('loading', true)
        .set('error', false)
        .set('data', false);
    case LOAD_CURIOSITY_SUCCESS:
      return state
        .set('data', action.payload)
        .set('loading', false)
        .set('error', false);
    case LOAD_CURIOSITY_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default apodReducer;

