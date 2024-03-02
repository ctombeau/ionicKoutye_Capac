import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourtierPage } from './courtier.page';

const routes: Routes = [
  {
    path: '',
    component: CourtierPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourtierPageRoutingModule {}
