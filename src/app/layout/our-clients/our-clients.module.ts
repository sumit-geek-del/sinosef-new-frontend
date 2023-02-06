import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OurClientsRoutingModule } from './our-clients-routing.module';
import { OurClientsComponent } from './our-clients.component';
import { SharedModule } from 'src/shared/shared.module';
import { GalleryModule } from '../gallery/gallery.module';


@NgModule({
  declarations: [
    OurClientsComponent
  ],
  imports: [
    CommonModule,
    OurClientsRoutingModule,
    SharedModule,
    GalleryModule
  ]
})
export class OurClientsModule { }
