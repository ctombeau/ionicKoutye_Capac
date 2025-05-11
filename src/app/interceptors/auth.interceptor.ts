import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { LogoutService } from '../services/logout.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private loginService: LoginService,
    private router: Router,
    private logoutService: LogoutService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    /*
    const token = this.loginService.getToken();

      if(token !== null)
      {
        if(!request.url.includes("/login"))
        {
             let clone = request.clone({
                headers : request.headers.set('Authorization','Bearer '+token)
            });
            
            return next.handle(clone);
        }
        else
          return next.handle(request);
      }
      else
         return next.handle(request);
    */
     
         const excludedUrls = ['/api/login', '/api/user/add', '/api/send-emailc']; // ajoute ici les endpoints publics
         const isPublic = excludedUrls.some(url => request.url.includes(url));
     
         let authReq = request;
     
         if (!isPublic) {
           const token = this.loginService.getToken();
           if (token) {
             authReq = request.clone({
               setHeaders: {
                 Authorization: `Bearer ${token}`
               }
             });
           }
         }
     
         return next.handle(authReq).pipe(
           catchError((error: HttpErrorResponse) => {
             if (error.status === 401) {
               this.logoutService.logout();
             }
     
             return throwError(() => error);
           })
         );
  }

}
