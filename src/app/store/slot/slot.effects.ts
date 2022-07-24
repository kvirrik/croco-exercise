import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { SlotService } from 'src/app/services/slot.service';
import { GameCategory, Provider } from 'src/app/interfaces';
import {
  getCategoriesSuccess,
  getProvidersSuccess,
  getSlotsByProviderSuccess,
} from './slot.actions';

@Injectable()
export class SlotEffects {
  //
  getCategories$ = createEffect(() => {
    return this.actions$.pipe(
      ofType('[Slot] Get Categories'),
      mergeMap(() =>
        this.slotService.getCategories().pipe(
          map(({ data: categories }) => getCategoriesSuccess({ categories })),
          catchError(() => EMPTY)
        )
      )
    );
  });

  //
  getProviders$ = createEffect(() => {
    return this.actions$.pipe(
      ofType('[Slot] Get Providers'),
      mergeMap(() =>
        this.slotService.getProviders().pipe(
          map(({ data: providers }) => getProvidersSuccess({ providers })),
          catchError(() => EMPTY)
        )
      )
    );
  });

  //
  getSlotsByProvider$ = createEffect(() => {
    return this.actions$.pipe(
      ofType('[Slot] Get Slots By Provider'),
      mergeMap(({ provider }) =>
        this.slotService.getSlotsByProvider(provider).pipe(
          map((slots: any) => getSlotsByProviderSuccess({ slots })),
          catchError(() => EMPTY)
        )
      )
    );
  });

  //
  constructor(private slotService: SlotService, private actions$: Actions) {}
}
