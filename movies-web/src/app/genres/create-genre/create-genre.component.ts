import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IGenreCreationDto } from '~/app/genres//genres.model';
import { GenresService } from '~/app/genres/genres.service';
import { parseWebAPIErrors } from '~/app/utilities/utils';

@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  styleUrls: ['./create-genre.component.scss']
})
export class CreateGenreComponent implements OnInit {

  errors: string[] = [];

  constructor(private router: Router, private genresService: GenresService) { }

  ngOnInit(): void {
  }

  saveChanges(createGenreDto: IGenreCreationDto) {
    // ... save the genre
    console.log(createGenreDto);

    this.genresService
      .create(createGenreDto)
      .subscribe(() => {
        this.router.navigate(['/genres']);
      }, error => this.errors = parseWebAPIErrors(error));
  }

  backToHome() {
    this.router.navigate(['/']);
  }

}
