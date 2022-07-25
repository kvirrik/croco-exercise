import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Game } from 'src/app/interfaces';
import { selectLoading } from 'src/app/store/slot/slot.state';

@Component({
  selector: 'app-game-grid',
  templateUrl: './game-grid.component.html',
  styleUrls: ['./game-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameGridComponent {
  //
  loading$ = this.store.select(selectLoading);

  //
  @Input() games!: Game[] | null;

  //
  constructor(private store: Store) {}

  //
  openGame(url: string): void {
    window.open(url, '_blank');
  }
}
