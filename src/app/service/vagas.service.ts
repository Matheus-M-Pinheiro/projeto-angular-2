import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vaga } from '../model/vagas/vaga';

@Injectable({
  providedIn: 'root'
})
export class VagasService {

  readonly urlApi: string = 'http://localhost:3000/vagas'

  constructor(
    private http: HttpClient
  ) { }

  getTodasVagas(): Observable<Vaga[]>{
    return this.http.get<Vaga[]>( this.urlApi )
  }

  getVagaPeloId( id: number ): Observable<Vaga>{
    return this.http.get<Vaga>( `${this.urlApi}/${id}` )
  }

}
