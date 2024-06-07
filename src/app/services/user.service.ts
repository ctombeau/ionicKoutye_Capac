import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLogin } from '../model/user-login';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl : string = "http://localhost:5050/api";
  isUrl : boolean = false;
  
  constructor(
    private http : HttpClient
  ) { }

   postLogin(user : UserLogin)
   {
       return this.http.post(this.baseUrl+"/login",user);
   }
}
