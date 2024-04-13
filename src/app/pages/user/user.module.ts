import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPage } from './login/login.page';
import { LoginPageModule } from './login/login.module';
import { RegisterPageModule } from './register/register.module';
import { ResetpasswordPageModule } from './resetpassword/resetpassword.module';
import { ForgotpasswordPage } from './forgotpassword/forgotpassword.page';
import { ForgotpasswordPageModule } from './forgotpassword/forgotpassword.module';
import { UserHomePageModule } from './user-home/user-home.module';
import { UserDetailPageModule } from './user-detail/user-detail.module';
import { CourtierPageModule } from './courtier/courtier.module';
import { UserHomePage } from './user-home/user-home.page';
import { UserDetailPage } from './user-detail/user-detail.page';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    LoginPageModule,
    RegisterPageModule,
    ResetpasswordPageModule,
    ForgotpasswordPageModule,
    UserHomePageModule,
    UserDetailPageModule,
    CourtierPageModule
  ]
})
export class UserModule { }
