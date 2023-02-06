import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonServicesComponent } from './common-services.component';

const routes: Routes = [
  {
    path:'',
    component:CommonServicesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
