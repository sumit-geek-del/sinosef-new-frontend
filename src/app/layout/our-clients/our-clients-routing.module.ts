import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OurClientsComponent } from './our-clients.component';

const routes: Routes = [
  {
    path:"",
    component:OurClientsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OurClientsRoutingModule { }
