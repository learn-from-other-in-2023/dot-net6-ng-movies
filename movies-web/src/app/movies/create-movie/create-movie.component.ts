import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMultipleSelectorModel } from '~/app/utilities/multiple-selector/multiple-selector.model';
import { IMovieCreationDto } from '~/app/movies/movies.model';
import { MoviesService } from '~/app/movies/movies.service';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.scss']
})
export class CreateMovieComponent implements OnInit {

  nonSelectedGenres: IMultipleSelectorModel[] | any;
  nonSelectedMovieTheaters: IMultipleSelectorModel[] | any;

  constructor(private moviesService: MoviesService, private router: Router) { }

  ngOnInit(): void {
    this.moviesService.postGet().subscribe(response => {
      this.nonSelectedGenres = response.genres.map(genre => {
        return <IMultipleSelectorModel>{ key: genre.id, value: genre.name }
      });

      this.nonSelectedMovieTheaters = response.movieTheaters.map(movieTheater => {
        return <IMultipleSelectorModel>{ key: movieTheater.id, value: movieTheater.name }
      });

    });
  }

  saveChanges(movieCreationDto: IMovieCreationDto) {
    console.log(movieCreationDto);

    this.moviesService.create(movieCreationDto)
      .subscribe(id => {
        this.router.navigate(['/movie/' + id]);
      });
  }

}
