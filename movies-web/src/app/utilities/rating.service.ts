import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '~/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  private apiURL = environment.apiURL + "/ratings";

  constructor(private http: HttpClient) { }

  public rate(movieId: number, rating: number) {
    return this.http.post(this.apiURL, { movieId, rating });
  }

}
