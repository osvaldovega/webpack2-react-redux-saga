/**
 * CuriosityPage selectors
 */

import { createSelector } from 'reselect';

const selectCuriosity = (state) => state.get('curiosityContainer');

const selectCuriosityData = () => createSelector(
  selectCuriosity,
  (curiosityState) => curiosityState.get('data')
);

export {
  selectCuriosity,
  selectCuriosityData,
};
