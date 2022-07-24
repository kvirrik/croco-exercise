import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { CategoriesComponent } from './components/game-list/categories/categories.component';
import { IconComponent } from './components/icon/icon.component';
import { SportComponent } from './components/sport/sport.component';
import { LiveComponent } from './components/live/live.component';
import { CasinoComponent } from './components/casino/casino.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    GameListComponent,
    CategoriesComponent,
    IconComponent,
    SportComponent,
    LiveComponent,
    CasinoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
