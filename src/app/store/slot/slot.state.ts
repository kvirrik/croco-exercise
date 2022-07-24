import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SlotState } from './slot.reducers';

//
export const selectSlotState = createFeatureSelector<SlotState>('slot');

//
export const selectSlotData = createSelector(
  selectSlotState,
  (state: SlotState) => state
);

//
export const selectCategories = createSelector(
  selectSlotData,
  ({ categories }: SlotState) => categories
);

//
export const selectProviders = createSelector(
  selectSlotData,
  ({ providers }: SlotState) => providers
);

//
export const selectSlotsByProvider = createSelector(
  selectSlotData,
  ({ slots }: SlotState) => slots
);

//
export const selectLoading = createSelector(
  selectSlotData,
  ({ loading }: SlotState) => loading
);
