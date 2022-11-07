import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '' }
  // {path: 'genres', component: IndexGenresComponent},
  // {path: 'genres/create', component: CreateGenreComponent},
  // {path: 'genres/edit/:id', component: EditGenreComponent},
  // {path: 'actors', component: IndexActorsComponent},
  // {path: 'actors/create', component: CreateActorComponent},
  // {path: 'actors/edit/:id', component: EditActorComponent},
  // {path: 'movietheaters', component: IndexMovieTheaterComponent},
  // {path: 'movietheaters/create', component: CreateMovieTheaterComponent},
  // {path: 'movietheaters/edit/:id', component: EditMovieTheaterComponent},
  // {path: 'movies/create', component: CreateMovieComponent},
  // {path: 'movies/edit/:id', component: EditMovieComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
