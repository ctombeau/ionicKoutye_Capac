import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
})
export class ForgotpasswordPage implements OnInit {

  constructor(private formBuilder : FormBuilder) { }

   forgotPasswordForm = this.formBuilder.group({
       email : ["",Validators.required, Validators.email]
   });

  ngOnInit() {
  }
  
  public sendEmail(){
    
  }
}
