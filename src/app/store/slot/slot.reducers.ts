import { createReducer, on } from '@ngrx/store';
import { GameCategory, Provider } from 'src/app/interfaces';
import {
  getCategories,
  getCategoriesSuccess,
  getProvidersSuccess,
  getSlotsByProvider,
  getSlotsByProviderSuccess,
} from './slot.actions';

//
export interface SlotState {
  loading: boolean;
  categories: GameCategory[];
  providers: Provider[];
  slots: any;
}

//
export const initialState: SlotState = {
  categories: [],
  providers: [],
  loading: false,
  slots: null,
};

//
export const reducer = createReducer(
  initialState,
  on(
    getCategories,
    getSlotsByProvider,
    (state): SlotState => ({
      ...state,
      loading: true,
    })
  ),

  on(
    getCategoriesSuccess,
    (state, { categories }): SlotState => ({
      ...state,
      loading: false,
      categories,
    })
  ),
  on(
    getProvidersSuccess,
    (state, { providers }): SlotState => ({
      ...state,
      loading: false,
      providers,
    })
  ),
  on(
    getSlotsByProviderSuccess,
    (state, { slots }): SlotState => ({
      ...state,
      loading: false,
      slots,
    })
  )
);
