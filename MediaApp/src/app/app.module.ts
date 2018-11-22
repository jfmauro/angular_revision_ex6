import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import {MoviesAppRoutes} from './app.routes';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MoviesDetailComponent } from './movies-detail/movies-detail.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    MoviesListComponent,
    MoviesDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(MoviesAppRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
