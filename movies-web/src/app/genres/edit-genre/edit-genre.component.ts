import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IGenreCreationDto } from '../genres.model';

@Component({
  selector: 'app-edit-genre',
  templateUrl: './edit-genre.component.html',
  styleUrls: ['./edit-genre.component.scss']
})
export class EditGenreComponent implements OnInit {

  genreCreationDto: IGenreCreationDto = {name: 'Drama'};
  
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      console.log('EditActorComponent: ', params['id']);
    });
  }

  saveChanges(editGenreDto: IGenreCreationDto){
  }
}
