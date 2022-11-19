import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMovieTheatersCreationDto } from '../movie-theaters.model';
import { MovieTheatersService } from '../movie-theaters.service';

@Component({
  selector: 'app-create-movie-theater',
  templateUrl: './create-movie-theater.component.html',
  styleUrls: ['./create-movie-theater.component.scss']
})
export class CreateMovieTheaterComponent implements OnInit {

  constructor(private movieTheaterService: MovieTheatersService, private router: Router) { }

  ngOnInit(): void {
  }

  saveChanges(movieTheater: IMovieTheatersCreationDto) {
    console.log(movieTheater);
    this.movieTheaterService.create(movieTheater).subscribe(() => this.router.navigate(['/movietheaters']));
  }

}
