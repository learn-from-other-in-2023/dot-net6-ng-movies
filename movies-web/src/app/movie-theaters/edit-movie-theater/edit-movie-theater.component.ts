import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IMovieTheatersCreationDto, IMovieTheatersDto } from '../movie-theaters.model';
import { MovieTheatersService } from '../movie-theaters.service';

@Component({
  selector: 'app-edit-movie-theater',
  templateUrl: './edit-movie-theater.component.html',
  styleUrls: ['./edit-movie-theater.component.scss']
})
export class EditMovieTheaterComponent implements OnInit {

  movieTheatersDto: IMovieTheatersDto | any;

  constructor(private activatedRoute: ActivatedRoute, private movieTheaterService: MovieTheatersService, private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      console.log('EditActorComponent: ', params['id']);
      this.movieTheaterService.getById(params['id'])
        .subscribe(movieTheater => this.movieTheatersDto = movieTheater);
    });
  }

  saveChanges(movieTheater: IMovieTheatersCreationDto) {
    console.log(movieTheater);
    this.movieTheaterService.edit(this.movieTheatersDto.id, movieTheater)
      .subscribe(() => this.router.navigate(['/movietheaters']));
  }

}
