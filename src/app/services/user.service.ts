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

   public putUser(id: number,user: User){
    return this.http.put(this.url+"/user/update/"+id,user);
   }

   public processForgotPassword(email: string){
    return this.http.get(this.url+"/send-email?emailTo="+ email);
  }
 
  public getUser(username : string) : Observable<any>
  {
     return this.http.get(this.url + "/user?username="+username);
     
  }

  public setPicture(formData: FormData){
    return this.http.post(this.url+"/update-picture",formData);
  }
}