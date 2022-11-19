import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMovieTheatersCreationDto, IMovieTheatersDto } from '../movie-theaters.model';

@Component({
  selector: 'app-edit-movie-theater',
  templateUrl: './edit-movie-theater.component.html',
  styleUrls: ['./edit-movie-theater.component.scss']
})
export class EditMovieTheaterComponent implements OnInit {

  movieTheatersDto: IMovieTheatersDto = { id: 1, name: 'Cine Polis', latitude: 17.387140, longitude: 78.491684 };

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
