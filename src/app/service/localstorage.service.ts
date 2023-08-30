import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  private storage: Storage;

  constructor() {
    this.storage = window.localStorage;
  }

  set(k: string, v: string): void {
    this.storage.setItem(k, v)
  }

  // Exemplo para o set de um objeto
  setObj(k: string, o: any): void {
    this.storage.setItem(k, JSON.stringify(o))
  }

  get(k: string): string | null{
    return this.storage.getItem(k)
  }

  remove(k:string): void{
    this.storage.removeItem(k)
  }

}
