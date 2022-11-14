import { Component, OnInit } from '@angular/core';
import { IMovieTheatersCreationDto, IMovieTheatersDto } from '../movie-theaters.model';

@Component({
  selector: 'app-create-movie-theater',
  templateUrl: './create-movie-theater.component.html',
  styleUrls: ['./create-movie-theater.component.scss']
})
export class CreateMovieTheaterComponent implements OnInit {

  movieTheatersDto: IMovieTheatersDto = { name: 'Cine Polis', latitude: 17.387140, longitude: 78.491684 };

  constructor() { }

  ngOnInit(): void {
  }

  saveChanges(movieTheater: IMovieTheatersCreationDto) {
    console.log(movieTheater);
  }

}
