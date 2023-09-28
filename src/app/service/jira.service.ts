import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Colaborador } from '../model/jira/colaborador';
import { Projeto } from '../model/jira/projeto';

@Injectable({
  providedIn: 'root'
})
export class JiraService {

  readonly urlApi: string = 'http://localhost:3000'

  constructor(
    private http: HttpClient
  ) { }

  // COLABORADORES

  getColaboradorPorId(id:number): Observable<Colaborador>{
    return this.http.get<Colaborador>(`${this.urlApi}/colaboradores/${id}`)
  }

  putAtualizaColaborador(id:number, colaborador: Colaborador): Observable<Colaborador>{
    return this.http.put<Colaborador>(`${this.urlApi}/colaboradores/${id}`, colaborador)
  }


  // PROJETOS

  getTodosProjetos(): Observable<Projeto[]>{
    return this.http.get<Projeto[]>(`${this.urlApi}/projetos`)
  }


}
