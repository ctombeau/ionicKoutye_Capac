import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPage } from './login/login.page';
import { LoginPageModule } from './login/login.module';
import { RegisterPageModule } from './register/register.module';
import { ResetpasswordPageModule } from './resetpassword/resetpassword.module';
import { ForgotpasswordPage } from './forgotpassword/forgotpassword.page';
import { ForgotpasswordPageModule } from './forgotpassword/forgotpassword.module';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    LoginPageModule,
    RegisterPageModule,
    ResetpasswordPageModule,
    ForgotpasswordPageModule
  ]
})
export class UserModule { }
