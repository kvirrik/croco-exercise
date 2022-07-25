import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs';
import { GameCategory } from 'src/app/interfaces';
import { getCategories } from 'src/app/store/slot/slot.actions';
import { selectCategories } from 'src/app/store/slot/slot.state';

@UntilDestroy()
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesComponent implements OnInit {
  //
  @Input() active!: GameCategory | null;

  //
  @Output() selected = new EventEmitter<GameCategory>();

  //
  categories$ = this.store.select(selectCategories);

  //
  categories!: GameCategory[];

  //
  constructor(private store: Store) {}

  //
  ngOnInit(): void {
    this.fetch();
    this.subscribeCategories();
  }

  //
  selectCategory(category: GameCategory): void {
    this.selected.emit(category);
  }

  //
  trackByFn(_: number, category: GameCategory): string {
    return category.name;
  }

  //
  private fetch(): void {
    this.store.dispatch(getCategories());
  }

  //
  private subscribeCategories(): void {
    this.categories$
      .pipe(
        untilDestroyed(this),
        filter((data) => !!(data && data.length))
      )
      .subscribe((categories) => {
        this.categories = categories;
        this.selectCategory(this.categories[0]);
      });
  }
}
