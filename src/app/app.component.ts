import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router, UrlSegment } from '@angular/router';

import { Subject } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';
import { UserService } from './services/user.service';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy{
  closed$ = new Subject<any>();
  showTabs : boolean = false;

  constructor(private _router: Router, private userService: UserService) { }

  ngOnInit() {
    
    this._router.events.pipe(
       filter(e => e instanceof NavigationEnd),
       takeUntil(this.closed$)
    ).subscribe((event : any) => {
        console.log(event);
       if ( event.url=== '/login' || event.url==='/') {
         this.showTabs = false; // <-- hide tabs on specific pages
       }
       else
        this.showTabs=true;
    });
   
  }
  
  ngOnDestroy() {
    this.closed$.next(0); // <-- close subscription when component is destroyed
  }
}
