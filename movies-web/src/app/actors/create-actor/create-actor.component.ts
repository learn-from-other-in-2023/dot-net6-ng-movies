import { Component, OnInit } from '@angular/core';
import { IActor } from '../actors.model';

@Component({
  selector: 'app-create-actor',
  templateUrl: './create-actor.component.html',
  styleUrls: ['./create-actor.component.scss']
})
export class CreateActorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  saveChanges(actorCreationDTO: IActor) {

    console.log(actorCreationDTO);
  }

}
