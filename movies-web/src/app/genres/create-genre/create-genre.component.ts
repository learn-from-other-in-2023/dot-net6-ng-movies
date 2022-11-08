import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { genreCreationDTO } from '../genres.model';

@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  styleUrls: ['./create-genre.component.scss']
})
export class CreateGenreComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  saveChanges(createGenreDto: genreCreationDTO) {
    // ... save the genre
    console.log(createGenreDto);

    this.router.navigate(['/genres']);
  }

  backToHome() {
    this.router.navigate(['/']);
  }

}
