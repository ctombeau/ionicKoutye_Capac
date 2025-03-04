import { Element } from '@angular/compiler';
import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { UserLogin } from 'src/app/model/user-login';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, AfterViewInit {

  message$! : Observable<String> ;
  userInfoToken : any ="";
  showPsw: boolean = false;
  spinner$! : Observable<boolean>;

  constructor(
    private router : Router,
    private loginService: LoginService,
    private formBuilder : FormBuilder
  ) { }

  loginForm = this.formBuilder.group({
      username : ["", Validators.required],
      password: ["",Validators.required]
  })

  ngOnInit() {
      this.message$ = this.loginService.messsageLogin$;
      this.spinner$= this.loginService.spinnerLogin$;
  }

  ngAfterViewInit(): void {
      
  }

   public Register() : void
   {
      this.router.navigateByUrl("/register");
   }

   public Login()
   {
       var user = new UserLogin(this.loginForm.value.username??"", this.loginForm.value.password??"");
       
       if(user.username == "" || user.password=="")
       {
         // this.message$("Les champs sont obligatoires");
       }
       else
       {  
          //this.loginService.postLogin(user).subscribe(); 
          this.router.navigate(['home'])
       }
       
   }

   showPassword(input : any)
   {
       if(this.showPsw==false)
       {
          this.showPsw =true;
          input.type="text";
       }
       else if(this.showPsw==true)
       {
          this.showPsw=false;
          input.type="password"
       }
   }
}
