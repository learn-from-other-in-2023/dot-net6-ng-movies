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
  model: IMovieTheatersDto | any;

  @Output()
  onSaveChanges = new EventEmitter<IMovieTheatersCreationDto>();

  // initialCoordinates: coordinatesMap[] = [];

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', {
        validators: [Validators.required]
      }],
      longitude: ['', {
        validators: [Validators.required]
      }],
      latitude: ['', {
        validators: [Validators.required]
      }]
    })

    if (this.model !== undefined) {
      this.form.patchValue(this.model);

      // this.initialCoordinates.push({ latitude: this.model.latitude, longitude: this.model.longitude });
    }
  }

  // onSelectedLocation(coordinates: coordinatesMap) {
  //   this.form.patchValue(coordinates);
  // }

  saveChanges() {
    this.onSaveChanges.emit(this.form.value);
  }

}
