import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
     const token = sessionStorage.getItem("token");
    //const token = this.userService.getToken();

      //console.log("token interceptor: "+token)
      //console.log(request.url)

      if(token !== null)
      {
        if(!request.url.includes("/login"))
        {
             let clone = request.clone({
              headers : request.headers.set('Authorization','Bearer '+token)
            });
            //console.log("clone request", clone)
            return next.handle(clone);
        }
        else
          return next.handle(request);
      }
      else
        return next.handle(request);
    
  }
}
