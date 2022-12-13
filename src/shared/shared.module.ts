import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderNavbarComponent } from './navbar/header-navbar.component';


@NgModule({
  declarations: [
    HeaderNavbarComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[HeaderNavbarComponent]
})
export class SharedModule { }
