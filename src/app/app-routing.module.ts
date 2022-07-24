import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasinoComponent } from './components/casino/casino.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { LiveComponent } from './components/live/live.component';
import { SportComponent } from './components/sport/sport.component';

const routes: Routes = [
  {
    path: 'slots',
    component: GameListComponent,
  },
  {
    path: 'sport',
    component: SportComponent,
  },
  {
    path: 'live',
    component: LiveComponent,
  },
  {
    path: 'casino',
    component: CasinoComponent,
  },
  {
    path: '',
    redirectTo: 'slots',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
