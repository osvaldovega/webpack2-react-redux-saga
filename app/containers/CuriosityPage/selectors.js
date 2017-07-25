/**
 * CuriosityPage selectors
 */

import { createSelector } from 'reselect';

const selectCuriosity = (state) => state.get('curiosity');

const selectCuriosityData = () => createSelector(
  selectCuriosity,
  (curiosityState) => curiosityState.get('data')
);

export {
  selectCuriosity,
  selectCuriosityData,
};
