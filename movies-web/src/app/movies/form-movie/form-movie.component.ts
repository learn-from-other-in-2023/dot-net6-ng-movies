import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IMultipleSelectorModel } from 'src/app/utilities/multiple-selector/multiple-selector.model';
import { IMovieCreationDto, IMovieDto } from '../movies.model';

@Component({
  selector: 'app-form-movie',
  templateUrl: './form-movie.component.html',
  styleUrls: ['./form-movie.component.scss']
})
export class FormMovieComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup | any;

  @Input()
  model: IMovieDto | any;

  @Output()
  onMovieSaveChangesEvent = new EventEmitter<IMovieCreationDto>();

  nonSelectedGenres: IMultipleSelectorModel[] = [
    { key: 1, value: 'Drama' },
    { key: 2, value: 'Action' },
    { key: 3, value: 'Comedy' },
  ];

  selectedGenres: IMultipleSelectorModel[] = [];

  nonSelectedMovieTheaters: IMultipleSelectorModel[] = [
    { key: 1, value: 'Agora' },
    { key: 2, value: 'Sambil' },
    { key: 3, value: 'Megacentro' },
  ]

  selectedMovieTheaters: IMultipleSelectorModel[] = [];

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['', {
        validators: [Validators.required]
      }],
      summary: '',
      inTheaters: false,
      trailer: '',
      releaseDate: '',
      poster: '',
      genresIds: '',
      movieTheatersIds: ''
    });

    if (this.model !== undefined) {
      this.form.patchValue(this.model);
    }
  }

  onImageSelected(file: File) {
    this.form.get('poster').setValue(file);
  }

  changeMarkdown(content: string) {
    this.form.get('summary').setValue(content);
  }

  saveChanges() {
    const genresIds = this.selectedGenres.map(value => value.key);
    this.form.get('genresIds').setValue(genresIds);

    const movieTheatersIds = this.selectedMovieTheaters.map(value => value.key);
    this.form.get('movieTheatersIds').setValue(movieTheatersIds);

    this.onMovieSaveChangesEvent.emit(this.form.value);
  }

}
