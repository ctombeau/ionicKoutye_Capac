import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  handleError(error : HttpErrorResponse) : any{
    if(error.status==500 || error.status==0){
        return "impossible de communiquer avec le serveur."
    } 
 }
}
