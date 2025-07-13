import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatailAppartementPage } from './datail-appartement.page';

const routes: Routes = [
  {
    path: '',
    component: DatailAppartementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatailAppartementPageRoutingModule {}
