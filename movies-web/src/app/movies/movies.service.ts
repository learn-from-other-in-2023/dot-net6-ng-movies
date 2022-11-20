import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '~/environments/environment';
import { formatDateFormData } from '~/app/common/utilities/formatDateFormData';
import { IHomeDto, IMovieCreationDto, IMovieDto, IMoviePostGetDto, IMoviePutGetDto } from './movies.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private apiURL = environment.apiURL + '/movies';

  constructor(private http: HttpClient) { }

  public getHomePageMovies(): Observable<IHomeDto> {
    return this.http.get<IHomeDto>(this.apiURL);
  }

  public putGet(id: number): Observable<IMoviePutGetDto> {
    return this.http.get<IMoviePutGetDto>(`${this.apiURL}/putget/${id}`);
  }

  public edit(id: number, movieCreationDTO: IMovieCreationDto) {
    const formData = this.BuildFormData(movieCreationDTO);

    return this.http.put(`${this.apiURL}/${id}`, formData);
  }

  public getById(id: number): Observable<IMovieDto> {
    return this.http.get<IMovieDto>(`${this.apiURL}/${id}`);
  }

  public filter(values: any): Observable<any> {
    const params = new HttpParams({ fromObject: values });
    return this.http.get<IMovieDto[]>(`${this.apiURL}/filter`, { params, observe: 'response' });
  }

  public postGet(): Observable<IMoviePostGetDto> {
    return this.http.get<IMoviePostGetDto>(`${this.apiURL}/postget`);
  }

  public create(movieCreationDTO: IMovieCreationDto): Observable<number> {
    const formData = this.BuildFormData(movieCreationDTO);

    return this.http.post<number>(this.apiURL, formData);
  }

  public delete(id: number) {
    return this.http.delete(`${this.apiURL}/${id}`);
  }

  private BuildFormData(movie: IMovieCreationDto): FormData {
    const formData = new FormData();

    formData.append('title', movie.title);
    formData.append('summary', movie.summary);
    formData.append('trailer', movie.trailer);
    formData.append('inTheaters', String(movie.inTheaters));
    if (movie.releaseDate) {
      formData.append('releaseDate', formatDateFormData(movie.releaseDate));
    }

    if (movie.poster) {
      formData.append('poster', movie.poster);
    }

    formData.append('genresIds', JSON.stringify(movie.genresIds));
    formData.append('movieTheatersIds', JSON.stringify(movie.movieTheatersIds));
    formData.append('actors', JSON.stringify(movie.actors));

    return formData;
  }

}
