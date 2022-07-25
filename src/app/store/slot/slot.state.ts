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
export const selectGamesByProvider = (name: string) =>
  createSelector(
    selectSlotData,
    ({ gamesByProvider }: SlotState) => gamesByProvider?.[name]
  );

//
export const selectProviderGames = createSelector(
  selectSlotData,
  ({ gamesByProvider }: SlotState) => gamesByProvider
);

//
export const selectLoading = createSelector(
  selectSlotData,
  ({ loading }: SlotState) => loading
);
