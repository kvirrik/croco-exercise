import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  catchError,
  map,
  mergeMap,
  concatMap,
  withLatestFrom,
} from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';
import { SlotService } from 'src/app/services/slot.service';
import {
  getCategoriesSuccess,
  getProvidersSuccess,
  getSlotsByProviderSuccess,
} from './slot.actions';
import { selectProviderGames } from './slot.state';
import { Store } from '@ngrx/store';

@Injectable()
export class SlotEffects {
  //
  getCategories$ = createEffect(() => {
    return this.actions$.pipe(
      ofType('[Slot] Get Categories'),
      mergeMap(() =>
        this.slotService.getCategories().pipe(
          map(({ data: categories }) =>
            getCategoriesSuccess({
              categories: categories.filter(
                ({ platform }) => platform === 'desktop'
              ),
            })
          ),
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
      concatMap((action) =>
        of(action).pipe(withLatestFrom(this.store.select(selectProviderGames)))
      ),
      mergeMap((data: any[]) => {
        const [{ provider }, gamesByProvider] = data;

        if (gamesByProvider?.[provider]) {
          return [
            getSlotsByProviderSuccess({
              data: gamesByProvider?.[provider],
            }),
          ];
        } else {
          return this.slotService.getSlotsByProvider(provider).pipe(
            map(({ data }: any) => getSlotsByProviderSuccess({ data })),
            catchError(() => EMPTY)
          );
        }
      })
    );
  });

  //
  constructor(
    private slotService: SlotService,
    private actions$: Actions,
    private store: Store
  ) {}
}
