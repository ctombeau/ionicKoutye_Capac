import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.page.html',
  styleUrls: ['./user-home.page.scss'],
})
export class UserHomePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  async userChoice(event : any)
  {
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
  }

}
