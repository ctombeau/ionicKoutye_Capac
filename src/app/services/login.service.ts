import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLogin } from '../model/user-login';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, catchError, map } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url : string = environment.baseUrl;
  isUrl : boolean = false;
  private token = "token";
  private nom = "nom";
  private prenom = "prenom";
  private username="username";
  private email= "email";
  private phone = "phone";
  private photo="photo";
  private nomType="nomType"
  spinnerLogin$ : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  getToken(): string | null{
    return sessionStorage.getItem(this.token);
  }

  constructor(private http: HttpClient, private router: Router) { }
  messsageLogin$ : BehaviorSubject<String> = new BehaviorSubject<String>("");

  postLogin(user : UserLogin)
  {
      this.spinnerLogin$.next(true);
      return this.http.post(this.url+"/login",user).pipe(
          map((data: any)=>{
               if(data.success===true){
                  this.saveUserInfo(data.object['access-token'],data.object['user-info']);
                  this.spinnerLogin$.next(false);
                  this.messsageLogin$.next("");
                  this.router.navigate(['/home']);
               }
          }),
          catchError((err: HttpErrorResponse)=>{
               
               if(err.status===401){
                   this.spinnerLogin$.next(false);
                   this.messsageLogin$.next("Nom utilisateur et/ou mot de passe incorrect.");
               }
               else if(err.status===500){
                  this.spinnerLogin$.next(false);
                  this.messsageLogin$.next("Erreur serveur");
               }
               else if(err.status===null){
                  this.spinnerLogin$.next(false);
                  this.messsageLogin$.next("Erreur inconnue");
               }
               return "";
          })
      );
  }

  saveUserInfo(token: any, userInfo: any){
      sessionStorage.setItem(this.token,token);
      sessionStorage.setItem(this.username,userInfo.username);
      sessionStorage.setItem(this.email,userInfo.email);
      sessionStorage.setItem(this.nom,userInfo.nom);
      sessionStorage.setItem(this.prenom,userInfo.prenom);
      sessionStorage.setItem(this.nomType,userInfo.nomType);
  }
}
