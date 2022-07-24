import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { CategoriesComponent } from './components/game-list/categories/categories.component';
import { GameProvidersComponent } from './components/game-list/game-providers/game-providers.component';
import { GameGridComponent } from './components/game-list/game-grid/game-grid.component';
import { IconComponent } from './components/icon/icon.component';
import { SportComponent } from './components/sport/sport.component';
import { LiveComponent } from './components/live/live.component';
import { CasinoComponent } from './components/casino/casino.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { SlotEffects } from './store/slot/slot.effects';

import * as fromSlots from './store/slot/slot.reducers';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    GameListComponent,
    CategoriesComponent,
    IconComponent,
    SportComponent,
    LiveComponent,
    CasinoComponent,
    GameProvidersComponent,
    GameGridComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      slot: fromSlots.reducer,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([SlotEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
