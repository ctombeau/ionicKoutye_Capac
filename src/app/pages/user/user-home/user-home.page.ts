import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonSegment } from '@ionic/angular';


@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.page.html',
  styleUrls: ['./user-home.page.scss'],
})
export class UserHomePage implements OnInit, AfterViewInit {

  @Input('tabSegment') tabSegment? : HTMLIonSegmentElement ;

  constructor(private router: Router) { }
  @Input() showTabs = false;

  ngAfterViewInit(): void {
    console.log(this.tabSegment);
  }

  ngOnInit() {
      
  }
 
  
  async changeSegment(event : any)
  {
    /*
     const page = event.detail.value;
     switch(page)
     {
        case "profil": 
              await this.router.navigate(['/user-detail']);
              break;
        case "courtier": 
              await this.router.navigate(['/courtier']);
              break;
        case "favorites":
            break;
        default : 
             await this.router.navigate(['/user-detAIL']);
              break;
     }
     console.log(event.detail.value);
     */
  }
  
   goBack(){
       this.router.navigate(['/home']);
   }

   showMessage() {
     console.log("ouverture de la boite a message")
  }
}
