import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  moviesInTheaters: any;
  moviesFutureReleases: any;

  constructor() { }

  ngOnInit(): void {

    this.moviesInTheaters = [
      {
        title: 'The Shawshank Redemption',
        releaseDate: new Date('1994-09-23'),
        price: 10.99,
        poster: 'https://picsum.photos/200/200?grayscale'
      },
      {
        title: 'The Godfather',
        releaseDate: new Date('1972-03-24'),
        price: 11.99,
        poster: 'https://picsum.photos/200/201?grayscale'
      }
    ];

    this.moviesFutureReleases = [
      {
        title: 'Black Widow',
        releaseDate: new Date('2021-07-07'),
        price: 8.99,
        poster: 'https://picsum.photos/201/200?grayscale'
      },
      {
        title: 'The Godfather II',
        releaseDate: new Date('1974-12-20'),
        price: 9.99,
        poster: 'https://picsum.photos/201/201?grayscale'
      }
    ];

  }

}
