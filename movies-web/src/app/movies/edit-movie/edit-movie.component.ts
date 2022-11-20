import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMovieCreationDto, IMovieDto } from '../movies.model';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.scss']
})
export class EditMovieComponent implements OnInit {

  model: IMovieDto = {
    id: 1,
    title: 'Spider-Man',
    inTheaters: true,
    summary: "whatever",
    releaseDate: new Date(),
    trailer: 'ABCDE',
    poster: 'https://picsum.photos/200/200?grayscale',
    genres: [{ id: 1, name: 'Action' }],
    movieTheaters: [{ id: 1, name: 'Cinepolis', latitude: 1, longitude: 1 }],
    actors: [{ id: 1, name: 'Tom Holland', character: 'Peter Parker', picture: 'https://picsum.photos/200/200?grayscale' }]
  }

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      console.log('EditActorComponent: ', params['id']);
    });
  }

  saveChanges(movieCreationDTO: IMovieCreationDto) {
    console.log(movieCreationDTO);
  }

}
