import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IGenreCreationDto, IGenreDto } from '../genres.model';
import { GenresService } from '../genres.service';

@Component({
  selector: 'app-edit-genre',
  templateUrl: './edit-genre.component.html',
  styleUrls: ['./edit-genre.component.scss']
})
export class EditGenreComponent implements OnInit {

  genreEditDto: IGenreDto | any;

  constructor(private activatedRoute: ActivatedRoute,
    private genresService: GenresService,
    private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      console.log('EditActorComponent: ', params['id']);

      this.genresService
        .getById(params['id'])
        .subscribe(genre => {
          this.genreEditDto = genre;
        });

    });
  }

  saveChanges(editGenreDto: IGenreCreationDto) {
    console.log('EditActorComponent: ', editGenreDto);

    this.genresService.edit(this.genreEditDto.id, this.genreEditDto)
      .subscribe(() => {
        this.router.navigate(["/genres"]);
      });
  }

}
