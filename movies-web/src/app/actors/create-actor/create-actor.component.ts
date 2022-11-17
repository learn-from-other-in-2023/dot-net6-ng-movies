import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import type { IActor } from '~/app/actors/actors.model';
import { ActorsService } from '../actors.service';

@Component({
  selector: 'app-create-actor',
  templateUrl: './create-actor.component.html',
  styleUrls: ['./create-actor.component.scss']
})
export class CreateActorComponent implements OnInit {

  constructor(private actorsService: ActorsService, private router: Router) { }

  ngOnInit(): void {
  }

  saveChanges(actorCreationDTO: IActor) {
    console.log(actorCreationDTO);

    this.actorsService.create(actorCreationDTO).subscribe(() => {
      this.router.navigate(['/actors']);
    });
  }

}
