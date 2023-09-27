import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JiraService {

  readonly urlApi: string = 'http://localhost:3000'

  constructor(
    private http: HttpClient
  ) { }

  getColaboradorPorId(id:number): Observable<any>{
    return this.http.get<any>(`${this.urlApi}/colaboradores/${id}`)
  }

}
