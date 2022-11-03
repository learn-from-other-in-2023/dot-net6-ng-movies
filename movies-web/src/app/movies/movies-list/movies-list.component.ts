import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  movies: any;

  constructor() { }

  ngOnInit(): void {

    setTimeout(() => {
      this.movies = [
        {
          title: 'The Shawshank Redemption',
          releaseDate: new Date('1994-09-23'),
          price: 10.99
        },
        {
          title: 'The Godfather',
          releaseDate: new Date('1972-03-24'),
          price: 11.99
        }
      ];
    }, 2000);

  }

}
