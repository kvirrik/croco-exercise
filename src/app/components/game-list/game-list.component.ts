import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Game, GameCategory, Provider } from 'src/app/interfaces';
import { getSlotsByProvider } from 'src/app/store/slot/slot.actions';
import { selectGamesByProvider } from 'src/app/store/slot/slot.state';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameListComponent {
  //
  activeCategory!: GameCategory | null;

  //
  providerGames$!: Observable<Game[]>;

  //
  activeProvider!: Provider | null;

  //
  games!: Game[] | null;

  //
  constructor(private store: Store) {}

  //
  onCategorySelect(category: GameCategory): void {
    this.activeCategory = category;
    this.activeProvider = null;
    this.games = [...this.activeCategory.games];
  }

  //
  onProviderSelect(provider: Provider): void {
    this.games = null;
    this.activeCategory = null;
    this.activeProvider = provider;

    this.fetchGamesByProvider(provider.provider);
  }

  //
  private fetchGamesByProvider(provider: string): void {
    this.store.dispatch(getSlotsByProvider({ provider }));
    this.providerGames$ = this.store.select(selectGamesByProvider(provider));
  }
}
