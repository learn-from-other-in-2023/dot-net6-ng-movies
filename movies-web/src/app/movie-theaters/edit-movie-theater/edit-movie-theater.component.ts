import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMovieTheatersCreationDto, IMovieTheatersDto } from '../movie-theaters.model';

@Component({
  selector: 'app-edit-movie-theater',
  templateUrl: './edit-movie-theater.component.html',
  styleUrls: ['./edit-movie-theater.component.scss']
})
export class EditMovieTheaterComponent implements OnInit {

  movieTheatersDto: IMovieTheatersDto = { name: 'Agora', latitude: 18.483541251864438, longitude: -69.93927597999574 };

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      console.log('EditActorComponent: ', params['id']);
    });
  }

  saveChanges(movieTheater: IMovieTheatersCreationDto) {
    console.log(movieTheater);
  }

}
