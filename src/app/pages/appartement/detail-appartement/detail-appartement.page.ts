import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-appartement',
  templateUrl: './detail-appartement.page.html',
  styleUrls: ['./detail-appartement.page.scss'],
})
export class DetailAppartementPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  goBack(){
     this.router.navigate(['/home']);
  }
}
