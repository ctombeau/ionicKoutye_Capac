import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private http: HttpClient,
     private router : Router
  ) { }

  logout(){
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("nom");
    sessionStorage.removeItem("prenom");
    sessionStorage.removeItem("nomType");
    this.router.navigate(['/login']);
  }
}
