/**
 * ApodPage selectors
 */

import { createSelector } from 'reselect';

const selectApod = (state) => state.get('apodContainer');

const selectApodData = () => createSelector(
  selectApod,
  (apodState) => apodState.get('data')
);

export {
  selectApod,
  selectApodData,
};
