import { Component, OnInit } from '@angular/core';
import { IMovieCreationDto } from '../movies.model';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.scss']
})
export class CreateMovieComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  saveChanges(movieCreationDto: IMovieCreationDto){
    console.log(movieCreationDto);
  }

}
