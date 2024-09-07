import { Component, OnInit } from '@angular/core';
import { AppartementService } from '../services/appartement.service';
import { Observable, of } from 'rxjs';
import { Appartement } from '../model/appartement.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  username : any = sessionStorage.getItem("username");
  constructor(private appService : AppartementService) {}
   
  ngOnInit(): void {
   // console.log("Dans home : "+this.username);
      this.listAppartementByUsername();
  }
   
    listAppartementByUsername(): Observable<Appartement[]>{
        this.appService.getAllAppartementsByUsername(this.username).subscribe(
           (data)=>{
             console.log(data);
           }
        );
        return of([]);
    }
}
