import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {
  url : string = environment.baseUrl;

  constructor(private http: HttpClient,
     private router : Router
  ) { }

  removeUserInfo(){
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("id");
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("nom");
    sessionStorage.removeItem("prenom");
    sessionStorage.removeItem("nomType");
    sessionStorage.removeItem("photo");
    
  }

  logout(){
      this.removeUserInfo();
      this.router.navigate(['/login']);
       
  }
}
