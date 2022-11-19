import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '~/environments/environment';
import { IMovieTheatersCreationDto, IMovieTheatersDto } from './movie-theaters.model';

@Injectable({
  providedIn: 'root'
})
export class MovieTheatersService {

  private apiURL = environment.apiURL + '/movieTheaters';

   constructor(private http: HttpClient) { }

   public get(): Observable<IMovieTheatersDto[]>{
    return this.http.get<IMovieTheatersDto[]>(this.apiURL);
  }

  public getById(id: number): Observable<IMovieTheatersDto>{
    return this.http.get<IMovieTheatersDto>(`${this.apiURL}/${id}`);
  }

  public create(movieTheaterDTO: IMovieTheatersCreationDto){
    return this.http.post(this.apiURL, movieTheaterDTO);
  }

  public edit(id: number, movieTheaterDTO: IMovieTheatersCreationDto){
    return this.http.put(`${this.apiURL}/${id}`, movieTheaterDTO);
  }

  public delete(id: number){
    return this.http.delete(`${this.apiURL}/${id}`);
  }

}
