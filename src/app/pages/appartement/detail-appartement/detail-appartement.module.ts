import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailAppartementPageRoutingModule } from './detail-appartement-routing.module';

import { DetailAppartementPage } from './detail-appartement.page';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailAppartementPageRoutingModule,
    MatPaginatorModule

  ],
  declarations: [DetailAppartementPage]
})
export class DetailAppartementPageModule {}
