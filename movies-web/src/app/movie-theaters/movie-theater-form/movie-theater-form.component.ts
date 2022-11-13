import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICoordinatesMap } from 'src/app/utilities/map/coordinate';
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

  initialCoordinates: ICoordinatesMap[] = [];

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', {
        validators: [Validators.required]
      }],
      longitude: ['78.491684', {
        validators: [Validators.required]
      }],
      latitude: ['17.387140', {
        validators: [Validators.required]
      }]
    })

    this.initialCoordinates.push({ latitude: 17.387140, longitude: 78.491684 });

    if (this.movieTheatersDto !== undefined) {
      this.form.patchValue(this.movieTheatersDto);

      this.initialCoordinates.push({ latitude: this.form.latitude, longitude: this.form.longitude });
    }
  }

  onSelectedLocation(coordinates: ICoordinatesMap) {
    this.form.patchValue(coordinates);
  }

  saveChanges() {
    this.onSaveChangesEvent.emit(this.form.value);
  }

}
