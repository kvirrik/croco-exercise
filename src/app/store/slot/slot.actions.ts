import { createAction, props } from '@ngrx/store';
import { GameCategory, Provider } from './../../interfaces';

//
export const getCategories = createAction('[Slot] Get Categories');

//
export const getCategoriesSuccess = createAction(
  '[Slot] Get Categories Success',
  props<{ categories: GameCategory[] }>()
);

//
export const getProviders = createAction('[Slot] Get Providers');

//
export const getProvidersSuccess = createAction(
  '[Slot] Get Providers Success',
  props<{ providers: Provider[] }>()
);

//
export const getSlotsByProvider = createAction(
  '[Slot] Get Slots By Provider',
  props<{ provider: string }>()
);

//
export const getSlotsByProviderSuccess = createAction(
  '[Slot] Get Slots By Provider Success',
  props<{ slots: any }>()
);
