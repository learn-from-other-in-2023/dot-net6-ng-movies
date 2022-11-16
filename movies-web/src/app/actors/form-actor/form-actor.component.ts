import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import type { IActor } from '~/app/actors/actors.model';

@Component({
  selector: 'app-form-actor',
  templateUrl: './form-actor.component.html',
  styleUrls: ['./form-actor.component.scss']
})
export class FormActorComponent implements OnInit {

  form!: FormGroup;

  @Input()
  actorDto!: IActor;

  @Output()
  onSaveChangesEvent = new EventEmitter<IActor>();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initializeActorForm();
  }

  private initializeActorForm() {
    this.form = this.formBuilder.group({
      name: ['', {
        validators: [Validators.required]
      }],
      dateOfBirth: '',
      picture: '',
      biography: ''
    });

    if (this.actorDto !== undefined) {
      this.form.patchValue(this.actorDto);
    }
  }

  onImageSelected(image: any) {
    const picture = this.form.get('picture');

    if (!picture) {
      return;
    }

    picture.setValue(image);
  }

  changeMarkdown(content: any) {
    const biography = this.form.get('biography');

    if (!biography) {
      return;
    }

    biography.setValue(content);
  }

  saveChanges() {
    this.onSaveChangesEvent.emit(this.form.value);
  }

}
