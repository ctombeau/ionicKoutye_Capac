import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-update-user',
  templateUrl: './popover-update-user.component.html',
  styleUrls: ['./popover-update-user.component.scss'],
  standalone: false
})
export class PopoverUpdateUserComponent  implements OnInit {

  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {}

  formData ={
    nom:'',
    prenom:'',
    username:'',
    email:'',
    phone:''
  }

  submitForm(){
     this.popoverCtrl.dismiss(this.formData)
  }

}
