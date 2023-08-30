import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  readonly urlApiUser: string = 'http://localhost:3000/usuarios'
  readonly urlApiLogin: string = 'http://localhost:3000/fazerLogin'

  constructor(
    private http: HttpClient
  ) { }

  getUsuarioPeloId(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.urlApiUser}/${id}`)
  }

  fazerLogin(user: string | null | undefined, pass: any): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.urlApiLogin}?username=${user}&senha=${pass}`)
  }

}
