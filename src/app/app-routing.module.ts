import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { HomeComponent } from './components/home/home.component';
import {PruebaComponent} from './components/prueba/prueba.component';
import {FailComponent} from './components/fail/fail.component';




const routes: Routes = [
  { path: 'movies/home', component: HomeComponent },
  { path: 'movies/:category', component: MoviesComponent },
  { path: 'movie/:id', component: MovieDetailComponent },
  { path: 'search',component: PruebaComponent},
  { path: 'movies/404',component: FailComponent},
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
