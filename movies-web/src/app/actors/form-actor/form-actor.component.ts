import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IActorCreationDto } from '../actors.model';

@Component({
  selector: 'app-form-actor',
  templateUrl: './form-actor.component.html',
  styleUrls: ['./form-actor.component.scss']
})
export class FormActorComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup | any;

  @Input()
  actorCreationDto: IActorCreationDto | any;

  @Output()
  onSaveChangesEvent = new EventEmitter<IActorCreationDto>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', {
        validators: [Validators.required]
      }],
      dateOfBirth: '',
      picture: '',
      biography: ''
    });

    if (this.actorCreationDto !== undefined) {
      this.form.patchValue(this.actorCreationDto);
    }
  }

  onImageSelected(image: any) {
    this.form.get('picture').setValue(image);
  }

  changeMarkdown(content: any) {
    this.form.get('biography').setValue(content);
  }

  saveChanges() {
    this.onSaveChangesEvent.emit(this.form.value);
  }

}
