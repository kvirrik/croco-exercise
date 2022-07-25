import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Provider } from 'src/app/interfaces';
import { getProviders } from 'src/app/store/slot/slot.actions';
import { selectProviders } from 'src/app/store/slot/slot.state';

@Component({
  selector: 'app-game-providers',
  templateUrl: './game-providers.component.html',
  styleUrls: ['./game-providers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameProvidersComponent implements OnInit {
  //
  @Input() active!: Provider | null;

  //
  @Output() selected = new EventEmitter<Provider>();

  //
  providers$ = this.store.select(selectProviders);

  //
  constructor(private store: Store) {}

  //
  ngOnInit(): void {
    this.fetch();
  }

  //
  selectProvider(provider: Provider): void {
    this.selected.emit(provider);
  }

  //
  trackByFn(_: number, provider: Provider): string {
    return provider._id;
  }

  //
  private fetch(): void {
    this.store.dispatch(getProviders());
  }
}
