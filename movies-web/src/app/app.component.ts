import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Movies Web';

  movie = {
    title: 'The Shawshank Redemption',
    releaseDate: new Date('1994-09-23'),
    price: 10.99
  }

  square(n: number) {
    return n * n;
  }

}
