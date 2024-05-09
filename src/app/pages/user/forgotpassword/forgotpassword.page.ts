import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
})
export class ForgotpasswordPage implements OnInit {

  constructor(private formBuilder : FormBuilder,
    private router : Router
  ) { }

   forgotPasswordForm = this.formBuilder.group({
       email : ["", Validators.compose([Validators.required, Validators.email])]
      
   });

  ngOnInit() {
  }
  
  public sendEmail(){
    
  }

  public backToLogin(){
      this.router.navigate(['/']);
  }
}
