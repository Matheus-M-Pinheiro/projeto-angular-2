import { CanActivateFn } from '@angular/router';
import { LocalstorageService } from '../service/localstorage.service';

export const userGuard: CanActivateFn = (route, state) => {

  let idUser = window.localStorage.getItem('idUser')

  if(idUser){
    return true;
  } else {
    return false
  }

};
