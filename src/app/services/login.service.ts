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
  spinnerLogin$ : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router: Router) { }
  messsageLogin$ : BehaviorSubject<String> = new BehaviorSubject<String>("");

  postLogin(user : UserLogin)
  {
      this.spinnerLogin$.next(true);
      return this.http.post(this.url+"/login",user).pipe(
          map((data: any)=>{
               console.log(data.success);
               if(data.success===true){
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
               return "";
          })
      );
  }
}
