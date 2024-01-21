import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLogin } from 'src/app/model/user-login';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  message : string = "";
  userInfoToken : any ="";
  

  constructor(
    private router : Router,
    private userService: UserService,
  ) { }

  ngOnInit() {
    
  }

   public Register() : void
   {
      this.router.navigateByUrl("/register");
   }

   public Login(form : NgForm)
   {
       var user = new UserLogin(form.value.username, form.value.password);
       
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
       
   }
}
