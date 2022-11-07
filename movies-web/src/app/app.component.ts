import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  title = 'Movies Web';
  moviesInTheaters: any;
  moviesFutureReleases: any;

  constructor() {
  }

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
        poster: 'https://picsum.photos/seed/picsum/200/200'
      }
    ];

    this.moviesFutureReleases = [
      {
        title: 'Black Widow',
        releaseDate: new Date('2021-07-07'),
        price: 8.99,
        poster: 'https://picsum.photos/200/200?grayscale'
      },
      {
        title: 'The Godfather II',
        releaseDate: new Date('1974-12-20'),
        price: 9.99,
        poster: 'https://picsum.photos/seed/picsum/200/200'
      }
    ];
  }

}


  // userName: string = 'Sri Varu';
  // display: boolean = true;

    // handleRating(rate: number) {
  //   console.log(rate);
  // }
