import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IMovieTheatersCreationDto, IMovieTheatersDto } from '../movie-theaters.model';

@Component({
  selector: 'app-movie-theater-form',
  templateUrl: './movie-theater-form.component.html',
  styleUrls: ['./movie-theater-form.component.scss']
})
export class MovieTheaterFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup | any;

  @Input()
  movieTheatersDto: IMovieTheatersDto | any;

  @Output()
  onSaveChangesEvent = new EventEmitter<IMovieTheatersCreationDto>();

  // initialCoordinates: coordinatesMap[] = [];

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', {
        validators: [Validators.required]
      }],
      longitude: ['1', {
        validators: [Validators.required]
      }],
      latitude: ['1', {
        validators: [Validators.required]
      }]
    })

    if (this.movieTheatersDto !== undefined) {
      this.form.patchValue(this.movieTheatersDto);

      // this.initialCoordinates.push({ latitude: this.model.latitude, longitude: this.model.longitude });
    }
  }

  // onSelectedLocation(coordinates: coordinatesMap) {
  //   this.form.patchValue(coordinates);
  // }

  saveChanges() {
    this.onSaveChangesEvent.emit(this.form.value);
  }

}
