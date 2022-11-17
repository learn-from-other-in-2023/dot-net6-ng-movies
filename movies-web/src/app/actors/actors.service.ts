import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '~/environments/environment';
import { formatDateFormData } from '~/app/utilities/utils';
import { IActor, IActorCreationDto, IActorDto } from './actors.model';

@Injectable({
  providedIn: 'root'
})
export class ActorsService {

  private apiURL = environment.apiURL + '/actors'

  constructor(private http: HttpClient) { }

  get(page: number, recordsPerPage: number): Observable<any> {
    let params = new HttpParams();
    params = params.append('page', page.toString());
    params = params.append('recordsPerPage', recordsPerPage.toString());
    return this.http.get<IActorDto[]>(this.apiURL, { observe: 'response', params });
  }

  getById(id: number): Observable<IActorDto> {
    return this.http.get<IActorDto>(`${this.apiURL}/${id}`);
  }

  // searchByName(name: string): Observable<IActorsMovieDto[]>{
  //   const headers = new HttpHeaders('Content-Type: application/json');
  //   return this.http.post<actorsMovieDTO[]>(`${this.apiURL}/searchByName`, 
  //   JSON.stringify(name), {headers});
  // }

  create(actor: IActor) {
    const formData = this.buildFormData(actor);

    return this.http.post(this.apiURL, formData);
  }

  edit(id: number, actor: IActorCreationDto) {
    const formData = this.buildFormData(actor);
    return this.http.put(`${this.apiURL}/${id}`, formData);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiURL}/${id}`);
  }

  private buildFormData(actor: IActor): FormData {
    const formData = new FormData();

    formData.append('name', actor.name);

    if (actor.biography) {
      formData.append('biography', actor.biography);
    }

    if (actor.dateOfBirth) {
      formData.append('dateOfBirth', formatDateFormData(actor.dateOfBirth));
    }

    if (actor.picture) {
      formData.append('picture', actor.picture);
    }

    return formData;
  }

}
