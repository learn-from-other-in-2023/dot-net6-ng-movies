import { Component, OnInit } from '@angular/core';
import { IMovieTheatersDto } from '../movie-theaters.model';
import { MovieTheatersService } from '../movie-theaters.service';

@Component({
  selector: 'app-index-movie-theaters',
  templateUrl: './index-movie-theaters.component.html',
  styleUrls: ['./index-movie-theaters.component.scss']
})
export class IndexMovieTheatersComponent implements OnInit {

  movieTheaters: IMovieTheatersDto[] | any;
  displayColumns = ['name', 'actions'];

  constructor(private movieTheatersService: MovieTheatersService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.movieTheatersService.get()
      .subscribe(movieTheaters => this.movieTheaters = movieTheaters);
  }

  delete(id: number) {
    this.movieTheatersService.delete(id)
      .subscribe(() => this.loadData());
  }

}
