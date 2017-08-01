import {
  LOAD_APOD,
  LOAD_APOD_SUCCESS,
  LOAD_APOD_ERROR,
} from './constants';


export function loadApod() {
  return {
    type: LOAD_APOD,
  };
}

export function loadApodSuccess(data) {
  return {
    type: LOAD_APOD_SUCCESS,
    payload: data,
  };
}


export function loadApodError(error) {
  return {
    type: LOAD_APOD_ERROR,
    error,
  };
}
