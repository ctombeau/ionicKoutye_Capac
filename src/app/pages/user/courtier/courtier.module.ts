import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourtierPageRoutingModule } from './courtier-routing.module';

import { CourtierPage } from './courtier.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourtierPageRoutingModule
  ],
  declarations: [CourtierPage]
})
export class CourtierPageModule {}
