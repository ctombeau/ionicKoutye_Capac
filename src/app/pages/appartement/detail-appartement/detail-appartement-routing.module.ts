import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailAppartementPage } from './detail-appartement.page';

const routes: Routes = [
  {
    path: '',
    component: DetailAppartementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailAppartementPageRoutingModule {}
