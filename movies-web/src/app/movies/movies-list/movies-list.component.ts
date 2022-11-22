import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  @Input()
  movies: any;

  @Output()
  onDelete = new EventEmitter<void>();

  constructor(private moviesService: MoviesService) {
  }

  ngOnInit(): void {
  }

  remove(id: number) {
    this.moviesService.delete(id).subscribe(() => {
      this.onDelete.emit();
    });
  }

}
