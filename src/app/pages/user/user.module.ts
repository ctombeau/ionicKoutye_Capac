import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPage } from './login/login.page';
import { LoginPageModule } from './login/login.module';
import { RegisterPageModule } from './register/register.module';
import { ResetpasswordPageModule } from './resetpassword/resetpassword.module';
import { ForgotpasswordPage } from './forgotpassword/forgotpassword.page';
import { ForgotpasswordPageModule } from './forgotpassword/forgotpassword.module';
import { UserHomePageModule } from './user-home/user-home.module';
import { UserHomePage } from './user-home/user-home.page';
import { PopoverUpdateUserComponent } from 'src/app/components/popover-update-user/popover-update-user.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    //PopoverUpdateUserComponent
  ],
  imports: [
    CommonModule,
    LoginPageModule,
    RegisterPageModule,
    ResetpasswordPageModule,
    ForgotpasswordPageModule,
    UserHomePageModule,
    IonicModule
  ]
})
export class UserModule { }
