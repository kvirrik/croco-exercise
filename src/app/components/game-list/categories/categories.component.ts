import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GameCategory } from 'src/app/interfaces';
import { getCategories } from 'src/app/store/slot/slot.actions';
import { selectCategories } from 'src/app/store/slot/slot.state';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesComponent implements OnInit {
  //
  categories$ = this.store.select(selectCategories);

  //
  constructor(private store: Store) {}

  //
  ngOnInit(): void {
    this.fetch();
  }

  //
  trackByFn(_: number, category: GameCategory): string {
    return category.name;
  }

  //
  private fetch(): void {
    this.store.dispatch(getCategories());
  }
}
