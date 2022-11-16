import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IActor } from '../actors.model';

@Component({
  selector: 'app-edit-actor',
  templateUrl: './edit-actor.component.html',
  styleUrls: ['./edit-actor.component.scss']
})
export class EditActorComponent implements OnInit {

  actionDto: IActor = {
    name: 'Tom Holland',
    dateOfBirth: new Date(),
    biography: '# Default Value',
    picture: 'https://picsum.photos/200/200?grayscale'
  }

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      console.log('EditActorComponent: ', params['id']);
    });
  }

  saveChanges(actorCreationDTO: IActor) {
    console.log(actorCreationDTO);
  }

}
