import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IActorsMovieDto } from '~/app/actors/actors.model';
import { IMultipleSelectorModel } from '~/app/utilities/multiple-selector/multiple-selector.model';
import { IMovieCreationDto, IMovieDto } from '../movies.model';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.scss']
})
export class EditMovieComponent implements OnInit {

  editMovieDto: IMovieDto | any;
  selectedGenres: IMultipleSelectorModel[] | any;
  nonSelectedGenres: IMultipleSelectorModel[] | any;
  selectedMovieTheaters: IMultipleSelectorModel[] | any;
  nonSelectedMovieTheaters: IMultipleSelectorModel[] | any;
  selectedActors: IActorsMovieDto[] | any;

  constructor(private activatedRoute: ActivatedRoute, private moviesService: MoviesService, private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      console.log('EditActorComponent: ', params['id']);
      this.moviesService.putGet(params['id']).subscribe(putGetDTO => {
        this.editMovieDto = putGetDTO.movie;

        this.selectedGenres = putGetDTO.selectedGenres.map(genre => {
          return <IMultipleSelectorModel>{ key: genre.id, value: genre.name }
        });

        this.nonSelectedGenres = putGetDTO.nonSelectedGenres.map(genre => {
          return <IMultipleSelectorModel>{ key: genre.id, value: genre.name }
        });

        this.selectedMovieTheaters = putGetDTO.selectedMovieTheaters.map(movieTheater => {
          return <IMultipleSelectorModel>{ key: movieTheater.id, value: movieTheater.name }
        });

        this.nonSelectedMovieTheaters = putGetDTO.nonSelectedMovieTheaters.map(movieTheater => {
          return <IMultipleSelectorModel>{ key: movieTheater.id, value: movieTheater.name }
        });

        this.selectedActors = putGetDTO.actors;

      });
    });
  }

  saveChanges(movieCreationDTO: IMovieCreationDto) {
    console.log(movieCreationDTO);

    this.moviesService.edit(this.editMovieDto.id, movieCreationDTO).subscribe(() => {
      this.router.navigate(['/movie/' + this.editMovieDto.id]);
    });
  }

}
