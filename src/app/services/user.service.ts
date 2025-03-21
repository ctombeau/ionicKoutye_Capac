import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLogin } from '../model/user-login';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';
import { catchError, map, Observable, shareReplay, throwError } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  url : string = environment.baseUrl;
  isUrl : boolean = false;
  
  constructor(
    private http : HttpClient,
    private router: Router
  ) { }

   public postUser(user : User): Observable<any>{
    return this.http.post(this.url+"/user/add",user);
   }
}