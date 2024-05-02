import { Element } from '@angular/compiler';
import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLogin } from 'src/app/model/user-login';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, AfterViewInit {

  message : string = "";
  userInfoToken : any ="";
  showPsw: boolean = false;
 
  constructor(
    private router : Router,
    private userService: UserService,
    private formBuilder : FormBuilder
  ) { }

  loginForm = this.formBuilder.group({
      username : ["", Validators.required],
      password: ["",Validators.required]
  })

  ngOnInit() {
    
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
       /*
       if(user.username == "" || user.password=="")
       {
          this.message ="Les champs sont obligatoires";
       }
       else
       {
          this.userService.postLogin(user).subscribe((data: any)=>{
            console.log(data['access-token']);
            console.log(this.userInfoToken) 
             sessionStorage.setItem("access-token",data['access-token']);
             this.router.navigate(['home']);
          },
          (error)=>{
            console.log(error);
          }
        );
       }
       */
       this.router.navigate(['home']);
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
