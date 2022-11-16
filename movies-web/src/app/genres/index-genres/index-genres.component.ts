import { Component, OnInit } from '@angular/core';
import { GenresService } from '~/app/genres/genres.service';
import { IGenreDto } from '../genres.model';

@Component({
  selector: 'app-index-genres',
  templateUrl: './index-genres.component.html',
  styleUrls: ['./index-genres.component.scss']
})
export class IndexGenresComponent implements OnInit {

  genres: IGenreDto[] | any;

  columnsToDisplay = ['name', 'actions'];

  constructor(private genresService: GenresService) { }

  ngOnInit(): void {
    this.loadGenres();
  }

  loadGenres() {
    this.genresService
      .getAll()
      .subscribe(genres => {
        this.genres = genres;
      });
  }

  delete(id: number) {
    this.genresService.delete(id)
      .subscribe(() => {
        this.loadGenres();
      });
  }

}
