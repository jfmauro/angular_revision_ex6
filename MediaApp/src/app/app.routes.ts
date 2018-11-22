import { Routes } from '@angular/router';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MoviesDetailComponent } from './movies-detail/movies-detail.component';


export const MoviesAppRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/movies' },
  { path: 'movies', component: MoviesListComponent },
  { path: 'movies/:id', component: MoviesDetailComponent }

];
