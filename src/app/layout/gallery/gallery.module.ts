import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { ImageGalleryComponent } from './image/image-gallery.component';
import { SharedModule } from 'src/shared/shared.module';
import { SharedCardComponent } from './shared-card/shared-card.component';


@NgModule({
  declarations: [
  
    ImageGalleryComponent,
       SharedCardComponent
  ],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    SharedModule
  ]
})
export class GalleryModule { }
