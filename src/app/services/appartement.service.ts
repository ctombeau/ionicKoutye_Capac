import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, tap } from 'rxjs';
import { Appartement } from '../model/appartement.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppartementService {
   url = environment.baseUrl;
  constructor(private http: HttpClient) { }

    getAllAppartementsByUsername(username: any):Observable<Appartement[]>{
        return this.http.get<Appartement[]>(this.url+"/appartement/show-by-username?username="+username).pipe(
            tap(()=>console.log("Test du service")),
            map((apps)=>{
                console.log("Les appartements: "+apps)
                return [];
            }),
            catchError((err: HttpErrorResponse)=>{
                
                return[];
            })
        )
    }
}
