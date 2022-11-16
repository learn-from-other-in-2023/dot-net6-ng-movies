import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '~/environments/environment';
import { IGenreCreationDto, IGenreDto } from './genres.model';

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  private apiURL = environment.apiURL + '/genres'

  constructor(private http: HttpClient) { }

  getAll(): Observable<IGenreDto[]> {
    return this.http.get<IGenreDto[]>(this.apiURL);
  }

  getById(id: number): Observable<IGenreDto> {
    return this.http.get<IGenreDto>(`${this.apiURL}/${id}`);
  }

  create(genre: IGenreCreationDto) {
    return this.http.post(this.apiURL, genre);
  }

  edit(id: number, genre: IGenreCreationDto) {
    return this.http.put(`${this.apiURL}/${id}`, genre);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiURL}/${id}`);
  }

}
