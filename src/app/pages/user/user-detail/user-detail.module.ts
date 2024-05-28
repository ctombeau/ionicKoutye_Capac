import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserDetailPageRoutingModule } from './user-detail-routing.module';

import { UserDetailPage } from './user-detail.page';
import { UserHomePage } from '../user-home/user-home.page';
import { UserHomePageModule } from '../user-home/user-home.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserDetailPageRoutingModule
  ],
  declarations: [UserDetailPage]
})
export class UserDetailPageModule {}
