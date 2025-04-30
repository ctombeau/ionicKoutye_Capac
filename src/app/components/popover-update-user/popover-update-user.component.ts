import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-update-user',
  templateUrl: './popover-update-user.component.html',
  styleUrls: ['./popover-update-user.component.scss'],
  standalone: false
})
export class PopoverUpdateUserComponent  implements OnInit {
  @Input() nom! : string;
  @Input() prenom! : string;
  @Input() username! : string;
  @Input() email! : string;
  @Input() phone! : string;

  constructor(private popoverCtrl: PopoverController,
    private router: Router
  ) { }

  ngOnInit() {
      this.formData.nom = this.nom;
      this.formData.prenom=this.prenom;
      this.formData.username=this.username;
      this.formData.email=this.email;
      this.formData.phone=this.phone;
  }

  formData ={
    nom: '',
    prenom:'',
    username: '',
    email: '',
    phone: ''
  }

  submitForm(){
     this.popoverCtrl.dismiss(this.formData)
  }
  
  goback(){
     
     console.log('go back')
     this.popoverCtrl.dismiss();
  }
}
