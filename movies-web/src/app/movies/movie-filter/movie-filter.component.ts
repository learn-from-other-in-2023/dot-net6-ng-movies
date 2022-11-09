import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-movie-filter',
  templateUrl: './movie-filter.component.html',
  styleUrls: ['./movie-filter.component.scss']
})
export class MovieFilterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup | any;

  genres = [{ id: 1, name: 'Drama' }, { id: 2, name: 'Action' }];

  movies = [
    { title: 'Spider-Man', poster: 'https://picsum.photos/200/200?grayscale' },
    { title: 'Moana', poster: 'https://picsum.photos/200/201?grayscale' },
    { title: 'Inception', poster: 'https://picsum.photos/201/200?grayscale' }
  ];

  originalMovies = this.movies;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: '',
      genreId: 0,
      upcomingReleases: false,
      inTheaters: false
    });

    this.form.valueChanges
      .subscribe((values: any) => {
        console.log('Values: ', values);

        this.movies = this.originalMovies;

        this.filterMovies(values);
      });

  }

  filterMovies(values: any) {
    if (values.title) {
      this.movies = this.movies.filter(movie => movie.title.indexOf(values.title) !== -1);
    }
  }

  clearForm() {
    this.form.reset();
  }

}