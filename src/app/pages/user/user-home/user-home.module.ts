import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserHomePageRoutingModule } from './user-home-routing.module';

import { UserHomePage } from './user-home.page';
import { UserDetailPage } from '../user-detail/user-detail.page';
import { UserDetailPageModule } from '../user-detail/user-detail.module';
import { CourtierPage } from '../courtier/courtier.page';
import { CourtierPageModule } from '../courtier/courtier.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserHomePageRoutingModule
  ],
  declarations: [UserHomePage]
})
export class UserHomePageModule {}
