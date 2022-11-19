import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import type { IActor } from '~/app/actors/actors.model';
import { ActorsService } from '~/app/actors/actors.service';

@Component({
  selector: 'app-edit-actor',
  templateUrl: './edit-actor.component.html',
  styleUrls: ['./edit-actor.component.scss']
})
export class EditActorComponent implements OnInit {

  actorDto: IActor | any;

  constructor(private actorsService: ActorsService, private activatedRoute: ActivatedRoute
    , private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      console.log('EditActorComponent: ', params['id']);
      this.actorsService.getById(params['id']).subscribe(actor => this.actorDto = actor);
    });
  }

  saveChanges(actorCreationDto: IActor) {
    console.log(actorCreationDto);

    this.actorsService.edit(this.actorDto.id, actorCreationDto).subscribe(() => {
      this.router.navigate(['/actors']);
    });
  }

}
