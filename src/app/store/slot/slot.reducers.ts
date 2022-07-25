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
  gamesByProvider: { [name: string]: any };
  categories: GameCategory[];
  providers: Provider[];
  loading: boolean;
}

//
export const initialState: SlotState = {
  gamesByProvider: {},
  categories: [],
  providers: [],
  loading: false,
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
    (state, { data }): SlotState => ({
      ...state,
      loading: false,
      gamesByProvider: {
        ...state.gamesByProvider,
        [data.provider]: data.games,
      },
    })
  )
);
