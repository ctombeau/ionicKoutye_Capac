import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private loginService: LoginService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
     const token = this.loginService.getToken();

      if(token !== null)
      {
        if(!request.url.includes("/login"))
        {
             let clone = request.clone({
              headers : request.headers.set('Authorization','Bearer '+token)
            });
            console.log("clone request", clone)
            return next.handle(clone);
        }
        else
          return next.handle(request);
      }
      else
        return next.handle(request);
    
  }
}
