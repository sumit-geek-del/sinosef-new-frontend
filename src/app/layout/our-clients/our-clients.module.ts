import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OurClientsRoutingModule } from './our-clients-routing.module';
import { OurClientsComponent } from './our-clients.component';


@NgModule({
  declarations: [
    OurClientsComponent
  ],
  imports: [
    CommonModule,
    OurClientsRoutingModule
  ]
})
export class OurClientsModule { }
