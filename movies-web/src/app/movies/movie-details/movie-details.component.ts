import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { ICoordinatesMapWithMessage } from '~/app/utilities/map/coordinate';
import { RatingService } from '~/app/utilities/rating.service';
import { IMovieDto } from '../movies.model';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  movie: IMovieDto | any;
  releaseDate: Date | any;
  trailerURL: SafeResourceUrl | any;
  coordinates: ICoordinatesMapWithMessage[] = [];

  constructor(private moviesService: MoviesService, private activatedRoute: ActivatedRoute, private sanitizer: DomSanitizer
    , private ratingsService: RatingService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.moviesService.getById(params['id']).subscribe((movie) => {
        console.log(movie);
        this.movie = movie;
        this.releaseDate = new Date(movie.releaseDate);
        this.trailerURL = this.generateYoutubeURLForEmbeddedVideo(movie.trailer);
        this.coordinates = movie.movieTheaters.map(movieTheater => {
          return {
            latitude: movieTheater.latitude, longitude: movieTheater.longitude,
            message: movieTheater.name
          }
        })
      });
    });
  }

  generateYoutubeURLForEmbeddedVideo(url: any): SafeResourceUrl {
    if (!url) {
      return '';
    }
    // https://www.youtube.com/watch?v=LKFuXETZUsI
    let videoId = url.split('v=')[1];
    const ampersandPosition = videoId.indexOf('&');
    if (ampersandPosition !== -1) {
      videoId = videoId.substring(0, ampersandPosition);
    }

    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${videoId}`);
  }

  onRating(rate: number){
    this.ratingsService.rate(this.movie.id, rate).subscribe(() => {
      Swal.fire("Success", "Your vote has been received", "success");
    });
  }

}
