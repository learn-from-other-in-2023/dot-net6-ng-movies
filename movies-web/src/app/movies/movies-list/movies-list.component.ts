import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  @Input()
  movies: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  remove(index: number) {
    this.movies.splice(index, 1);
  }

}
