import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatailAppartementPageRoutingModule } from './datail-appartement-routing.module';

import { DatailAppartementPage } from './datail-appartement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatailAppartementPageRoutingModule
  ],
  declarations: [DatailAppartementPage]
})
export class DatailAppartementPageModule {}
