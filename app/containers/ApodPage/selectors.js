/**
 * ApodPage selectors
 */

import { createSelector } from 'reselect';

const selectApod = (state) => state.get('apod');

const selectApodData = () => createSelector(
  selectApod,
  (apodState) => apodState.get('data')
);

export {
  selectApod,
  selectApodData,
};
