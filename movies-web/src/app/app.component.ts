import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Movies Web';
  movies: any;

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



  square(n: number) {
    return n * n;
  }

}
